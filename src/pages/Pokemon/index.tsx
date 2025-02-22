import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";
import { getPokemonImages } from "./utils";
import { useState } from "react";
import Button from "../../components/Button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import clsx from "clsx";
import { capitalize } from "../../utils/common";

const Pokemon = () => {
	console.log("Pokemon");
	const { id } = useParams();
	const { data: pokemon, isLoading } = useFetchPokemonData(id ?? "1");

	const images = getPokemonImages(pokemon);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const image = images[selectedImageIndex];

	return (
		<section className="flex gap-5">
			{image && (
				<img
					src={image.image}
					alt={image.imageType}
					className="max-w-screen w-full h-full object-cover absolute top-0 left-0 opacity-30 scale-150 -z-10 blur-2xl"
				/>
			)}
			<header
				className={clsx(
					"flex items-center max-w-screen gap-5 w-full",
					isLoading &&
						"bg-gray-100 animate-pulse border border-gray-300"
				)}
			>
				{images.length > 0 && (
					<>
						<Button
							fullHeight={true}
							variant="transparent"
							onClick={() =>
								setSelectedImageIndex(
									(selectedImageIndex - 1 + images.length) %
										images.length
								)
							}
						>
							&nbsp;
							<ArrowBackIosNewRoundedIcon className="h-4 w-4 text-gray-900" />
							&nbsp;
						</Button>
						<div className="flex flex-col relative min-w-96 gap-2.5 p-5 border bg-white/20 border-white/75 rounded-md flex-1">
							<div className="h-96">
								<img
									src={image.image}
									alt={image.imageType}
									className="w-full h-full object-contain drop-shadow-lg"
								/>
							</div>
							<div className="flex items-center gap-3 w-fit mx-auto bg-white border border-white/75 px-2 justify-center rounded-md text-base font-medium text-gray-900">
								{image.imageType && (
									<p>{capitalize(image.imageType)}</p>
								)}
								{image.imageSize && (
									<>
										<div className="w-1 h-1 rounded-full bg-gray-900" />
										<p>{capitalize(image.imageSize)}</p>
									</>
								)}
								{image.gender && (
									<>
										<div className="w-1 h-1 rounded-full bg-gray-900" />
										<p>{capitalize(image.gender)}</p>
									</>
								)}
							</div>
							{images.length && (
								<div className="flex items-center gap-2 justify-center w-fit mx-auto">
									<div className="flex items-center gap-2 h-7 bg-white py-2 px-4 rounded-full">
										{Array(images.length)
											.fill(1)
											.map((_, index) => (
												<button
													key={index}
													onClick={() =>
														setSelectedImageIndex(
															index
														)
													}
													className={clsx(
														"rounded-full transition-all duration-300 cursor-pointer",
														index ===
															selectedImageIndex
															? "bg-black h-3 w-3"
															: "bg-gray-400 h-2 w-2"
													)}
												/>
											))}
									</div>
									<div className="py-2 px-4 h-7 bg-white rounded-full w-fit grid place-items-center">
										<p className="text-sm font-medium -mt-1">
											{`${selectedImageIndex + 1} of ${
												images.length
											}`}
										</p>
									</div>
								</div>
							)}
						</div>
						<Button
							fullHeight={true}
							variant="transparent"
							onClick={() =>
								setSelectedImageIndex(
									(selectedImageIndex + 1) % images.length
								)
							}
						>
							&nbsp;
							<ArrowForwardIosRoundedIcon className="h-4 w-4 text-gray-900" />
							&nbsp;
						</Button>
					</>
				)}
			</header>
		</section>
	);
};

export default Pokemon;
