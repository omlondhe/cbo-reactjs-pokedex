import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../utils";

const useFetchPokemonData = (url: string) => {
	return useQuery({
		queryKey: ["pokemon", url],
		queryFn: () => fetchPokemonData(url),
	});
};

export default useFetchPokemonData;
