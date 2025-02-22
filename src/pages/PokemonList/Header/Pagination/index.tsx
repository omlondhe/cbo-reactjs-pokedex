import Button from "../../../../components/Button";

import type { PaginationProps } from "./types";

const Pagination = ({
	nextUrl,
	isLoading,
	previousUrl,
	handleUpdateUrl,
}: PaginationProps) => {
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
