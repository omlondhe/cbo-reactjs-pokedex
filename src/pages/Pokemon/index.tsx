import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";

import Carousel from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";

const Pokemon = () => {
	const { id } = useParams();
	const { data: pokemon, isLoading } = useFetchPokemonData(id ?? "1");

	if (!pokemon) return null;

	return (
		<section className="flex flex-col gap-5 max-w-screen overflow-x-hidden">
			<Header name={pokemon.name} order={pokemon.order} />
			<Carousel sprites={pokemon.sprites} isLoading={isLoading} />
			<Footer pokemon={pokemon} />
		</section>
	);
};

export default Pokemon;
