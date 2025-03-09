import clsx from "clsx";
import type { CarouselProps } from "./types";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CarouselButton from "./CarouselButton";
import ImageInfo from "./ImageInfo";
import CarouselPagination from "./CarouselPagination";
import useCarouselPagination from "./CarouselPagination/hooks/useCarouselPagination";

const Carousel = ({ sprites, isLoading }: CarouselProps) => {
	const {
		image,
		images,
		selectedImageIndex,
		onImageChange,
		onCarouselNextClick,
		onCarouselPreviousClick,
	} = useCarouselPagination(sprites);

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
							<CarouselPagination
								images={images}
								selectedImageIndex={selectedImageIndex}
								onImageChange={onImageChange}
							/>
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
