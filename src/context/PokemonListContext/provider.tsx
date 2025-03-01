import { FC, PropsWithChildren, useReducer } from "react";
import { PokemonListContext } from "./context";
import { POKEMON_LIST_INITIAL_STATE } from "./initialState";
import { pokemonListReducer } from "./reducer";

export const PokemonListContextProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	return (
		<PokemonListContext
			value={useReducer(pokemonListReducer, POKEMON_LIST_INITIAL_STATE)}
		>
			{children}
		</PokemonListContext>
	);
};
