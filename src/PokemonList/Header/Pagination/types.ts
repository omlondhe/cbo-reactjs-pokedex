export interface PaginationProps {
	nextUrl: string | null;
	previousUrl: string | null;
	handleUpdateUrl: (url: string) => void;
}
