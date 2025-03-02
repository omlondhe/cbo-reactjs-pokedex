import { useQuery } from "@tanstack/react-query";

import { usePokemonListUrl } from "../../../context/PokemonListContext/hooks";
import { fetchPaginatedPokemon } from "../utils";

const useFetchPaginatedPokemon = () => {
	const { state } = usePokemonListUrl();
	const { url } = state;

	return useQuery({
		queryKey: ["pokemon-list", url],
		queryFn: () => fetchPaginatedPokemon(url),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
};

export default useFetchPaginatedPokemon;
