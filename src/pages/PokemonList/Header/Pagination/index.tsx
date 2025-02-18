import Button from "../../../../components/Button";

import type { PaginationProps } from "./types";

const Pagination = ({
	nextUrl,
	previousUrl,
	handleUpdateUrl,
}: PaginationProps) => {
	return (
		<div className="flex items-center gap-2">
			<Button
				disabled={!previousUrl}
				onClick={() => handleUpdateUrl(previousUrl ?? "")}
			>
				Previous
			</Button>
			<Button
				disabled={!nextUrl}
				onClick={() => handleUpdateUrl(nextUrl ?? "")}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
