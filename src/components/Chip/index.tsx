import clsx from "clsx";
import type { ChipProps } from "./types";
import { CHIP_VARIANTS } from "./constants";

const Chip = ({ label, variant = "normal" }: ChipProps) => {
	return (
		<div
			className={clsx(
				"rounded-full px-2.5 py-0.5",
				CHIP_VARIANTS[variant]
			)}
		>
			<p>{label}</p>
		</div>
	);
};

export default Chip;
