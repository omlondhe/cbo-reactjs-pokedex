import clsx from "clsx";
import type { ButtonProps } from "./types";

const Button = ({
	children,
	fullHeight,
	disabled,
	variant = "primary",
	onClick,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={clsx(
				"border rounded-sm px-2 py-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
				fullHeight && "h-full",
				variant === "primary" && "bg-white border-gray-300",
				variant === "transparent" && "bg-transparent border-none"
			)}
		>
			{children}
		</button>
	);
};

export default Button;
