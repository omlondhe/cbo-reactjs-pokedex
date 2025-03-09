import { capitalize } from "../../../../utils/common";
import type { ImageInfoProps } from "./types";

const ImageInfo = ({ image }: ImageInfoProps) => {
	return (
		<div className="flex items-center gap-3 w-fit mx-auto bg-white border border-white/75 px-2 justify-center rounded-md text-base font-medium text-gray-900">
			{image.imageType && <p>{capitalize(image.imageType)}</p>}
			{image.imageSize && (
				<>
					<div className="w-1 h-1 rounded-full bg-gray-900" />
					<p>{capitalize(image.imageSize)}</p>
				</>
			)}
			{image.gender && (
				<>
					<div className="w-1 h-1 rounded-full bg-gray-900" />
					<p>{capitalize(image.gender)}</p>
				</>
			)}
		</div>
	);
};

export default ImageInfo;
