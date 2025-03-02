import { FC, PropsWithChildren, useReducer } from "react";
import { PokemonListContext } from "./context";
import { POKEMON_LIST_INITIAL_STATE } from "./initialState";
import { pokemonListReducer } from "./reducer";

export const PokemonListContextProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(
		pokemonListReducer,
		POKEMON_LIST_INITIAL_STATE
	);

	const contextProviderValue = {
		state,
		dispatch,
	};

	return (
		<PokemonListContext.Provider value={contextProviderValue}>
			{children}
		</PokemonListContext.Provider>
	);
};
