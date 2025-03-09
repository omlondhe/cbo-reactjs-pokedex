import Button from "../../../../components/Button";
import { CarouselButtonProps } from "./types";

const CarouselButton = ({ icon, onClick }: CarouselButtonProps) => {
	return (
		<div className="border bg-white/20 border-white rounded-md self-stretch flex">
			<Button fullHeight={true} variant="transparent" onClick={onClick}>
				&nbsp;
				{icon}
				&nbsp;
			</Button>
		</div>
	);
};

export default CarouselButton;
