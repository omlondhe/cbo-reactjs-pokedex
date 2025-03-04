import { Link } from "react-router";
import useFetchPokemonData from "../../Pokemon/hooks/useFetchPokemonData";
import { getPokemonImages } from "../../Pokemon/utils";
import PokemonCardShimmer from "../PokemonCardShimmer";

import { PokemonCardProps } from "./types";
import Header from "./Header";
import { POKEBALL } from "./Header/constants";
import Footer from "./Footer";

const PokemonCard = ({ url }: PokemonCardProps) => {
	const id = url.slice(0, -1).split("/").pop();
	const { data, isLoading } = useFetchPokemonData(id ?? "1");
	const images = getPokemonImages(data);

	return isLoading ? (
		<PokemonCardShimmer />
	) : (
		<Link
			to={`/pokemon/${id}`}
			className="relative bg-gray-50 cursor-pointer flex-none overflow-hidden rounded-lg h-fit border border-gray-300 w-96 group"
		>
			<Header
				name={data?.name ?? ""}
				image={images[0]?.image ?? POKEBALL}
			/>
			<Footer pokemon={data} />
		</Link>
	);
};

export default PokemonCard;
