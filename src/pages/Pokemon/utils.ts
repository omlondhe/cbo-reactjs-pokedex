import { fetchPokemonDataService } from "./services";
import type { Pokemon, PokemonImage } from "./types";

export const fetchPokemonData = async (id: string) => {
	const response = await fetchPokemonDataService(id);
	return response.data;
};

export const getPokemonImages = (pokemon: Pokemon | undefined) => {
	if (!pokemon) return [];

	const { sprites } = pokemon;

	const images: PokemonImage[] = [];

	const homeImages = sprites.other.home;
	const dreamWorldImages = sprites.other.dream_world;
	const officialImages = sprites.other["official-artwork"];

	if (dreamWorldImages.front_default) {
		images.push({
			image: dreamWorldImages.front_default,
			imageType: "dream",
			imageSize: "normal",
			gender: "male",
		});
	}

	if (dreamWorldImages.front_female) {
		images.push({
			image: dreamWorldImages.front_female,
			imageType: "dream",
			imageSize: "normal",
			gender: "female",
		});
	}

	if (officialImages.front_default) {
		images.push({
			image: officialImages.front_default,
			imageType: "official",
			imageSize: "normal",
			gender: null,
		});
	}

	if (officialImages.front_shiny) {
		images.push({
			image: officialImages.front_shiny,
			imageType: "official",
			imageSize: "shiny",
			gender: null,
		});
	}

	if (homeImages.front_default) {
		images.push({
			image: homeImages.front_default,
			imageType: "home",
			imageSize: "normal",
			gender: "male",
		});
	}

	if (homeImages.front_shiny) {
		images.push({
			image: homeImages.front_shiny,
			imageType: "home",
			imageSize: "shiny",
			gender: "male",
		});
	}

	if (homeImages.front_female) {
		images.push({
			image: homeImages.front_female,
			imageType: "home",
			imageSize: "normal",
			gender: "female",
		});
	}

	if (homeImages.front_shiny_female) {
		images.push({
			image: homeImages.front_shiny_female,
			imageType: "home",
			imageSize: "shiny",
			gender: "female",
		});
	}

	return images;
};
