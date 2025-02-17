import { fetchPokemonDataService } from "./services";

export const fetchPokemonData = async (url: string) => {
	const response = await fetchPokemonDataService(url);
	return response.data;
};
