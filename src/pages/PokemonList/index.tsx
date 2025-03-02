import Header from "./Header";
import PokemonCard from "./PokemonCard";
import useFetchPaginatedPokemon from "./hooks/useFetchPaginatedPokemon";

const PokemonList = () => {
	const { data, isLoading } = useFetchPaginatedPokemon();

	return (
		<section>
			<Header
				isLoading={isLoading}
				nextUrl={data?.next ?? null}
				previousUrl={data?.previous ?? null}
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
