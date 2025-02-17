import { fetchPaginatedPokemonService } from "./services";

export const fetchPaginatedPokemon = async (url: string) => {
	const response = await fetchPaginatedPokemonService(url);
	return response.data;
};
