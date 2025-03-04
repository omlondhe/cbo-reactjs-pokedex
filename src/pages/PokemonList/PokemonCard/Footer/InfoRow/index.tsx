import type { InfoRowProps } from "./types";

const InfoRow = ({ label, value }: InfoRowProps) => {
	return value ? (
		<div className="flex items-center justify-between gap-2 w-full">
			<p>{label}</p>
			<p className="font-medium">{value}</p>
		</div>
	) : null;
};

export default InfoRow;
