import axios from "axios";
import { PokemonData } from "./types";

export const fetchPokemonDataService = async (url: string) => {
	return await axios.get<PokemonData>(url);
};
