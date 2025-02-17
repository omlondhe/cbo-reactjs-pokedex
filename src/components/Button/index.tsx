import type { ButtonProps } from "./types";

const Button = ({ children, disabled, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="border rounded-sm px-2 py-1 cursor-pointer bg-white border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{children}
		</button>
	);
};

export default Button;
