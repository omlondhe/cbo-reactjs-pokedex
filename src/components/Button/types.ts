export interface ButtonProps {
	disabled?: boolean;
	fullHeight?: boolean;
	children: React.ReactNode;
	variant?: "primary" | "transparent";
	onClick: () => void;
}
