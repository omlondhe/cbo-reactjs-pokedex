import { usePokemonListUrl } from "../../context/PokemonListContext/hooks";
import { PokemonListContextActionType } from "../../context/PokemonListContext/types";
import Header from "./Header";
import PokemonCard from "./PokemonCard";
import useFetchPaginatedPokemon from "./hooks/useFetchPaginatedPokemon";

const PokemonList = () => {
	const [{ url }, dispatch] = usePokemonListUrl();
	const { data, isLoading } = useFetchPaginatedPokemon(url);

	const handleUpdateUrl = (url: string) => {
		dispatch({
			url,
			type: PokemonListContextActionType.SET_URL,
		});
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
