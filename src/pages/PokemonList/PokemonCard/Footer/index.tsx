import { capitalize } from "../../../../utils/common";
import InfoRow from "./InfoRow";

import type { FooterProps } from "./types";

const Footer = ({ pokemon }: FooterProps) => {
	const { id, name, height, weight, base_experience } = pokemon ?? {};

	return (
		<footer className="p-2 bg-white group-hover:bg-transparent z-10">
			<div className="flex items-center gap-2 font-bold mb-2.5">
				<div className="bg-black rounded-full px-2 py-1 grid place-items-center">
					<p className="text-white text-sm">
						#{id?.toLocaleString()}
					</p>
				</div>
				<h3 className="underline text-xl">{capitalize(name ?? "")}</h3>
			</div>
			<div className="flex items-center flex-col gap-2 justify-between">
				<InfoRow label="Experience" value={base_experience} />
				<InfoRow label="Height (decimetres)" value={height} />
				<InfoRow label="Weight (hectograms)" value={weight} />
			</div>
		</footer>
	);
};

export default Footer;
