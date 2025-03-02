import Button from "../../../../components/Button";
import { usePokemonListUrl } from "../../../../context/PokemonListContext/hooks";
import { PokemonListContextActionType } from "../../../../context/PokemonListContext/types";

import type { PaginationProps } from "./types";

const Pagination = ({ nextUrl, isLoading, previousUrl }: PaginationProps) => {
	const [, dispatch] = usePokemonListUrl();

	const handleUpdateUrl = (url: string) => {
		dispatch({
			url,
			type: PokemonListContextActionType.SET_URL,
		});
	};

	return (
		<div className="flex items-center gap-2">
			<Button
				disabled={!previousUrl || isLoading}
				onClick={() => handleUpdateUrl(previousUrl ?? "")}
			>
				Previous
			</Button>
			<Button
				disabled={!nextUrl || isLoading}
				onClick={() => handleUpdateUrl(nextUrl ?? "")}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
