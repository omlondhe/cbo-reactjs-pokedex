import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";

const Pokemon = () => {
	const { id } = useParams();
	const { data, isLoading } = useFetchPokemonData(id ?? "1");

	return <div>Pokemon</div>;
};

export default Pokemon;
