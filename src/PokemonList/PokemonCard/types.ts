export interface PokemonCardProps {
	url: string;
}

export interface PokemonData {
	id: number;
	name: string;
	height: number;
	weight: number;
	base_experience: number;
	sprites: {
		back_shiny: string;
		front_shiny: string;
		back_default: string;
		front_default: string;
	};
}
