export interface PokemonSprites {
	other: {
		dream_world: {
			front_default: string;
			front_female: string | null;
		};
		home: {
			front_default: string;
			front_female: string | null;
			front_shiny: string;
			front_shiny_female: string | null;
		};
		"official-artwork": {
			front_default: string;
			front_shiny: string;
		};
	};
}

export interface PokemonStat {
	effort: number;
	base_stat: number;
	stat: { name: string; url: string };
}

export interface PokemonType {
	slot: number;
	type: { name: string; url: string };
}

export interface Pokemon {
	id: number;
	height: number;
	name: string;
	order: number;
	weight: number;
	is_default: boolean;
	stats: PokemonStat[];
	types: PokemonType[];
	base_experience: number;
	sprites: PokemonSprites;
}

export interface PokemonImage {
	image: string;
	imageSize: "normal" | "shiny";
	gender: "male" | "female" | null;
	imageType: "home" | "official" | "dreamWorld";
}
