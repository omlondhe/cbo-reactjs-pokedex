import Chip from "../../../components/Chip";
import type { ChipVariant } from "../../../components/Chip/types";
import { capitalize } from "../../../utils/common";

import InfoRow from "./InfoRow";
import type { FooterProps } from "./types";

const Footer = ({ pokemon }: FooterProps) => {
	const { types, stats, height, weight, base_experience } = pokemon;

	return (
		<footer className="flex gap-5">
			<section className="flex-1 bg-white/20 border-white border rounded-md p-5">
				<InfoRow
					label="Type"
					children={
						<div className="text-base font-medium text-gray-900 flex items-center gap-2">
							{types.map((type) => (
								<Chip
									key={type.type.name}
									variant={type.type.name as ChipVariant}
									label={capitalize(type.type.name)}
								/>
							))}
						</div>
					}
				/>
				<InfoRow label="Experience" value={base_experience} />
				<InfoRow label="Height" value={height} />
				<InfoRow label="Weight" value={weight} />
			</section>
			<section className="flex-1 bg-white/20 border-white border rounded-md p-5">
				{stats.map((stat) => (
					<InfoRow
						key={stat.stat.name}
						label={capitalize(stat.stat.name.replace("-", " "))}
						children={
							<span className="flex items-center gap-1">
								{stat.base_stat}
								<sup>
									{stat.effort ? `+${stat.effort}` : ""}
								</sup>
							</span>
						}
					/>
				))}
			</section>
		</footer>
	);
};

export default Footer;
