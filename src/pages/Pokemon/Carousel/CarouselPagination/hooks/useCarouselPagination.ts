import { useState } from "react";
import { getPokemonImages } from "../../../utils";
import { PokemonSprites } from "../../../types";

const useCarouselPagination = (sprites: PokemonSprites) => {
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

	const onImageChange = (index: number) => {
		setSelectedImageIndex(index);
	};

	return {
		images,
		selectedImageIndex,
		image,
		onCarouselPreviousClick,
		onCarouselNextClick,
		onImageChange,
	};
};

export default useCarouselPagination;
