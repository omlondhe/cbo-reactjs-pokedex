import type { ChipProps } from "./types";

const Chip = ({ label }: ChipProps) => {
	return (
		<div className="border border-white rounded-full px-2.5 py-0.5 bg-white">
			<p>{label}</p>
		</div>
	);
};

export default Chip;
