import { useState } from "react";
import useFetchPaginatedPokemon from "./hooks/useFetchPaginatedPokemon";
import PokemonCard from "./PokemonCard";
import { POKEMON_LIST_DEFAULT_URL } from "./constants";
import Pagination from "./Pagination";

const PokemonList = () => {
	const [url, setUrl] = useState<string>(POKEMON_LIST_DEFAULT_URL);
	const { data } = useFetchPaginatedPokemon(url);

	const handleUpdateUrl = (url: string) => {
		setUrl(url);
	};

	return (
		<section>
			<div className="flex items-center flex-wrap gap-5 justify-center pb-10">
				{data?.results.map((pokemon) => (
					<PokemonCard key={pokemon.name} url={pokemon.url} />
				))}
			</div>
			<Pagination
				nextUrl={data?.next ?? null}
				previousUrl={data?.previous ?? null}
				handleUpdateUrl={handleUpdateUrl}
			/>
		</section>
	);
};

export default PokemonList;
