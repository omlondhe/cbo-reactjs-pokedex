import axios from "axios";
import { Pokemon } from "./types";

export const fetchPokemonDataService = async (id: string) => {
	return await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
