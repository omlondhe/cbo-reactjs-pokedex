import type { ChipVariant } from "./types";

export const CHIP_VARIANTS: Record<ChipVariant, string> = {
	normal: "bg-neutral-100 text-neutral-600 border border-neutral-600",
	fighting: "bg-red-100 text-red-600 border border-red-600",
	flying: "bg-violet-100 text-violet-600 border border-violet-600",
	poison: "bg-purple-100 text-purple-600 border border-purple-600",
	ground: "bg-brown-100 text-brown-600 border border-brown-600",
	rock: "bg-stone-100 text-stone-600 border border-stone-600",
	bug: "bg-lime-100 text-lime-600 border border-lime-600",
	ghost: "bg-indigo-100 text-indigo-600 border border-indigo-600",
	steel: "bg-slate-100 text-slate-600 border border-slate-600",
	fire: "bg-orange-100 text-orange-600 border border-orange-600",
	water: "bg-blue-100 text-blue-600 border border-blue-600",
	grass: "bg-green-100 text-green-600 border border-green-600",
	electric: "bg-amber-100 text-amber-600 border border-amber-600",
	psychic: "bg-fuchsia-100 text-fuchsia-600 border border-fuchsia-600",
	ice: "bg-cyan-100 text-cyan-600 border border-cyan-600",
	dragon: "bg-teal-100 text-teal-600 border border-teal-600",
	dark: "bg-black/50 text-black border border-black",
	fairy: "bg-pink-100 text-pink-600 border border-pink-600",
	stellar:
		"bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white border border-white",
	unknown: "bg-stone-100 text-stone-600 border border-stone-600",
	shadow: "bg-zinc-100 text-zinc-600 border border-zinc-600",
};
