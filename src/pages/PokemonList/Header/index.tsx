import { CircularProgress } from "@mui/material";
import Pagination from "./Pagination";
import { PaginationProps } from "./Pagination/types";

const Header = ({
	nextUrl,
	previousUrl,
	isLoading,
	handleUpdateUrl,
}: PaginationProps) => {
	return (
		<header className="pt-3 px-1 mb-3 sticky top-0 left-0 z-50">
			<div className="flex justify-between items-center gap-2 w-full bg-[rgba(255, 255, 255, 0.9)] backdrop-blur-3xl border p-5 rounded-md border-gray-300">
				<div className="flex items-center gap-2">
					<h1 className="text-2xl font-bold">Pokédex</h1>
					{isLoading && (
						<CircularProgress size={20} sx={{ color: "black" }} />
					)}
				</div>
				<Pagination
					nextUrl={nextUrl}
					isLoading={isLoading}
					previousUrl={previousUrl}
					handleUpdateUrl={handleUpdateUrl}
				/>
			</div>
		</header>
	);
};

export default Header;
