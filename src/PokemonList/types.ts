export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}

interface PokemonListItem {
	name: string;
	url: string;
}
