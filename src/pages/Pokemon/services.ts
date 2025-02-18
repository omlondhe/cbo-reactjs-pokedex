import axios from "axios";

export const fetchPokemonDataService = async (id: string) => {
	return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
