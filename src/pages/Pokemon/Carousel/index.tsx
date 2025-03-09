import clsx from "clsx";
import { getPokemonImages } from "../utils";
import { useState } from "react";
import type { CarouselProps } from "./types";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CarouselButton from "./CarouselButton";
import ImageInfo from "./ImageInfo";

const Carousel = ({ sprites, isLoading }: CarouselProps) => {
	const images = getPokemonImages(sprites);
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	const image = images[selectedImageIndex];

	const onCarouselPreviousClick = () => {
		setSelectedImageIndex(
			(selectedImageIndex - 1 + images.length) % images.length
		);
	};

	const onCarouselNextClick = () => {
		setSelectedImageIndex((selectedImageIndex + 1) % images.length);
	};

	return (
		<>
			{image && (
				<img
					src={image.image}
					alt={image.imageType}
					className="max-w-screen w-full h-full object-cover absolute top-0 left-0 opacity-30 scale-100 -z-10 blur-2xl"
				/>
			)}

			<section
				className={clsx(
					"flex max-w-screen gap-5 w-full relative",
					isLoading &&
						"bg-gray-100 animate-pulse border border-gray-300"
				)}
			>
				{images.length > 0 && (
					<>
						<CarouselButton
							icon={<ArrowBackIosNewRoundedIcon />}
							onClick={onCarouselPreviousClick}
						/>
						<div className="flex flex-col relative min-w-96 gap-2.5 p-5 border bg-white/20 border-white/75 rounded-md flex-1">
							<div className="h-96">
								<img
									src={image.image}
									alt={image.imageType}
									className="w-full h-full object-contain drop-shadow-lg"
								/>
							</div>
							<ImageInfo image={image} />
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

						<CarouselButton
							icon={<ArrowForwardIosRoundedIcon />}
							onClick={onCarouselNextClick}
						/>
					</>
				)}
			</section>
		</>
	);
};

export default Carousel;
