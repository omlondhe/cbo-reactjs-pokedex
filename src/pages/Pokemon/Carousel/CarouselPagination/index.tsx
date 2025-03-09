import clsx from "clsx";
import { CarouselPaginationProps } from "./types";

const CarouselPagination = ({
	images,
	selectedImageIndex,
	onImageChange,
}: CarouselPaginationProps) => {
	const imageDots = Array(images.length).fill(1);

	return images.length ? (
		<div className="flex items-center gap-2 justify-center w-fit mx-auto">
			<div className="flex items-center gap-2 h-7 bg-white py-2 px-4 rounded-full">
				{imageDots.map((_, index) => (
					<button
						key={index}
						onClick={() => onImageChange(index)}
						className={clsx(
							"rounded-full transition-all duration-300 cursor-pointer",
							index === selectedImageIndex
								? "bg-black h-3 w-3"
								: "bg-gray-400 h-2 w-2"
						)}
					/>
				))}
			</div>
			<div className="py-2 px-4 h-7 bg-white rounded-full w-fit grid place-items-center">
				<p className="text-sm font-medium -mt-1">
					{`${selectedImageIndex + 1} of ${images.length}`}
				</p>
			</div>
		</div>
	) : null;
};

export default CarouselPagination;
