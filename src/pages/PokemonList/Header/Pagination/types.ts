export interface PaginationProps {
	isLoading: boolean;
	nextUrl: string | null;
	previousUrl: string | null;
	handleUpdateUrl: (url: string) => void;
}
