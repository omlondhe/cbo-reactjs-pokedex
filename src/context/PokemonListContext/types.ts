import { Dispatch } from "react";

export interface PokemonListContextType {
	url: string;
}

export enum PokemonListContextActionType {
	SET_URL = "SET_URL",
}

export interface PokemonListContextAction {
	url: string;
	type: PokemonListContextActionType;
}

export type PokemonListContextDefaultValue = [
	PokemonListContextType,
	Dispatch<PokemonListContextAction>
];
