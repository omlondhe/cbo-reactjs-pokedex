import { useQuery } from "react-query";
import { fetchPokemonData } from "../utils";

const useFetchPokemonData = (id: string) => {
	return useQuery({
		queryKey: ["pokemon", id],
		queryFn: () => fetchPokemonData(id),
	});
};

export default useFetchPokemonData;
