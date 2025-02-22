import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../utils";

const useFetchPokemonData = (id: string) => {
	return useQuery({
		queryKey: ["pokemon", id],
		queryFn: () => fetchPokemonData(id),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
};

export default useFetchPokemonData;
