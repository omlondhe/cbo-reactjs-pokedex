import { PokemonImage } from "../../types";

export interface CarouselPaginationProps {
	images: PokemonImage[];
	selectedImageIndex: number;
	onImageChange: (index: number) => void;
}
