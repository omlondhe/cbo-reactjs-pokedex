import {
	PokemonListContextDefaultValue,
	PokemonListContextType,
} from "./types";

export const POKEMON_LIST_INITIAL_STATE: PokemonListContextType = {
	url: "",
};

export const CREATE_CONTEXT_DEFAULT_VALUE: PokemonListContextDefaultValue = [
	POKEMON_LIST_INITIAL_STATE,
	() => {},
];
