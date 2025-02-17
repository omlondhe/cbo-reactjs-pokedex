import axios from "axios";
import type { PokemonListResponse } from "./types";

export const fetchPaginatedPokemonService = async (url: string) => {
	return await axios.get<PokemonListResponse>(url);
};
