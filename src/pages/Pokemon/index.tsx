import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";
import { getPokemonImages } from "./utils";
import { useState } from "react";
import Button from "../../components/Button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import clsx from "clsx";

const Pokemon = () => {
	console.log("Pokemon");
	const { id } = useParams();
	const { data: pokemon, isLoading } = useFetchPokemonData(id ?? "1");

	const images = getPokemonImages(pokemon);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const image = images[selectedImageIndex];

	return (
		<section className="flex gap-5 relative">
			{image && (
				<img
					src={image.image}
					alt={image.imageType}
					className="w-screen h-full object-cover absolute top-0 left-0 scale-200 opacity-20 -z-10 blur-md"
				/>
			)}
			<header
				className={clsx(
					"flex items-center max-w-screen gap-5 w-full h-96",
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
						<div className="relative h-full min-w-96 p-5 border bg-white/20 border-white/75 rounded-md flex-1">
							<img
								src={image.image}
								alt={image.imageType}
								className="w-full h-full object-contain drop-shadow-lg"
							/>
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
