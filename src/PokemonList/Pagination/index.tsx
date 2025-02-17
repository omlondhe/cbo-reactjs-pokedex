import Button from "../../components/Button";

import type { PaginationProps } from "./types";

const Pagination = ({
	nextUrl,
	previousUrl,
	handleUpdateUrl,
}: PaginationProps) => {
	return (
		<footer className="flex items-center justify-center mt-5 gap-5 fixed bottom-0 left-0 right-0 bg-white py-2.5 border-t border-gray-300">
			<Button
				disabled={!previousUrl}
				onClick={() => handleUpdateUrl(previousUrl ?? "")}
			>
				Prev
			</Button>
			<Button
				disabled={!nextUrl}
				onClick={() => handleUpdateUrl(nextUrl ?? "")}
			>
				Next
			</Button>
		</footer>
	);
};

export default Pagination;
