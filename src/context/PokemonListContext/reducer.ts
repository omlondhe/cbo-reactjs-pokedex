import {
	PokemonListContextType,
	PokemonListContextAction,
	PokemonListContextActionType,
} from "./types";

export const pokemonListReducer = (
	state: PokemonListContextType,
	action: PokemonListContextAction
) => {
	switch (action.type) {
		case PokemonListContextActionType.SET_URL:
			return {
				...state,
				url: action.url,
			};
		default:
			return state;
	}
};
