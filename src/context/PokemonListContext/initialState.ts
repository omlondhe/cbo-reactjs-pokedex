import { POKEMON_LIST_DEFAULT_URL } from "./constants";
import {
	PokemonListContextDefaultValue,
	PokemonListContextType,
} from "./types";

export const POKEMON_LIST_INITIAL_STATE: PokemonListContextType = {
	url: POKEMON_LIST_DEFAULT_URL,
};

export const CREATE_CONTEXT_DEFAULT_VALUE: PokemonListContextDefaultValue = [
	POKEMON_LIST_INITIAL_STATE,
	() => {},
];
