import { useQuery } from "@tanstack/react-query";
import { fetchPaginatedPokemon } from "../utils";

const useFetchPaginatedPokemon = (url: string) => {
	return useQuery({
		queryKey: ["pokemon-list", url],
		queryFn: () => fetchPaginatedPokemon(url),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
};

export default useFetchPaginatedPokemon;
