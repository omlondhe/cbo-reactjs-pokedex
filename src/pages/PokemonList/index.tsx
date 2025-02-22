import { useState } from "react";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import { POKEMON_LIST_DEFAULT_URL } from "./constants";
import useFetchPaginatedPokemon from "./hooks/useFetchPaginatedPokemon";

const PokemonList = () => {
	const [url, setUrl] = useState<string>(POKEMON_LIST_DEFAULT_URL);
	const { data, isLoading } = useFetchPaginatedPokemon(url);

	const handleUpdateUrl = (url: string) => {
		setUrl(url);
	};

	return (
		<section>
			<Header
				isLoading={isLoading}
				nextUrl={data?.next ?? null}
				previousUrl={data?.previous ?? null}
				handleUpdateUrl={handleUpdateUrl}
			/>
			<div className="flex items-center flex-wrap gap-5 justify-center pb-10">
				{data?.results.map((pokemon) => (
					<PokemonCard key={pokemon.name} url={pokemon.url} />
				))}
			</div>
		</section>
	);
};

export default PokemonList;
