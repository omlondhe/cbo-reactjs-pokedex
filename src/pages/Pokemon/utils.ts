import { fetchPokemonDataService } from "./services";

export const fetchPokemonData = async (id: string) => {
	const response = await fetchPokemonDataService(id);
	return response.data;
};
