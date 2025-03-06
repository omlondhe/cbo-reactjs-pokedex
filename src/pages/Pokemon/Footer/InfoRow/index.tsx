import type { InfoRowProps } from "./types";

const InfoRow = ({ label, value, children }: InfoRowProps) => {
	return (
		<div className="flex items-center justify-between gap-2">
			<p className="text-lg font-medium text-gray-900">{label}</p>
			{children ? (
				children
			) : (
				<p className="text-lg font-medium text-gray-900">{value}</p>
			)}
		</div>
	);
};

export default InfoRow;
