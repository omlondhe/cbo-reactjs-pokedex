import { Link } from "react-router";
import { capitalize } from "../../../utils/common";
import PokemonCardShimmer from "../PokemonCardShimmer";

import useFetchPokemonData from "./hooks/useFetchPokemonData";
import { PokemonCardProps } from "./types";

const PokemonCard = ({ url }: PokemonCardProps) => {
	const { data, isLoading } = useFetchPokemonData(url);
	const { id, name, base_experience, height, weight, sprites } = data ?? {};

	return isLoading ? (
		<PokemonCardShimmer />
	) : (
		<Link
			to={`/pokemon/${id}`}
			className="relative bg-gray-50 cursor-pointer flex-none overflow-hidden rounded-lg h-fit border border-gray-300 w-96 group"
		>
			<img
				alt={name}
				src={sprites?.front_shiny}
				className="w-full blur-sm h-full object-cover opacity-0 group-hover:opacity-15 absolute top-0 left-0 scale-200 z-0 transition-all duration-500"
			/>
			<header className="p-2 h-60 group-hover:p-0 transition-all duration-500 relative">
				<img
					alt={name}
					src={sprites?.front_shiny}
					className="w-full h-full object-contain border border-gray-300 bg-white group-hover:bg-transparent group-hover:rounded-none rounded-lg group-hover:border-transparent transition-all duration-500"
				/>
			</header>
			<footer className="p-2 bg-white group-hover:bg-transparent z-10">
				<div className="flex items-center gap-2 font-bold mb-2.5">
					<div className="bg-black rounded-full px-2 py-1 grid place-items-center">
						<p className="text-white text-sm">
							#{id?.toLocaleString()}
						</p>
					</div>
					<h3 className="underline text-xl">
						{capitalize(name ?? "")}
					</h3>
				</div>
				<div className="flex items-center flex-col gap-2 justify-between">
					<div className="flex items-center justify-between gap-2 w-full">
						<p>Experience</p>
						<p className="font-medium">{base_experience}</p>
					</div>
					<div className="flex items-center justify-between gap-2 w-full">
						<p>Height (decimetres)</p>
						<p className="font-medium">{height}</p>
					</div>
					<div className="flex items-center justify-between gap-2 w-full">
						<p>Weight (hectograms)</p>
						<p className="font-medium">{weight}</p>
					</div>
				</div>
			</footer>
		</Link>
	);
};

export default PokemonCard;
