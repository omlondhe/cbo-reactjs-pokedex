import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";

const Pokemon = () => {
	const { id } = useParams();
	const { data } = useFetchPokemonData(id ?? "1");
	return <div></div>;
};

export default Pokemon;
