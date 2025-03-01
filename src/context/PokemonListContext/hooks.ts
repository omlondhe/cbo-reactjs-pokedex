import { useContext } from "react";
import { PokemonListContext } from "./context";

const usePokemonListUrl = () => useContext(PokemonListContext);

export { usePokemonListUrl };
