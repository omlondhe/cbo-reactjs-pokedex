import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";

import { capitalize } from "../../../utils/common";
import type { HeaderProps } from "./types";

const Header = ({ name, order }: HeaderProps) => {
	const navigate = useNavigate();

	return (
		<header className="flex items-center justify-between border bg-white/20 border-white rounded-md p-5">
			<IconButton onClick={() => navigate(-1)}>
				<ArrowBackIosNewRoundedIcon className="h-4 w-4 text-gray-900" />
			</IconButton>
			<h1 className="text-5xl font-extrabold text-gray-900">
				{capitalize(name)}
			</h1>
			<div className="bg-black p-2 rounded-full">
				<h2 className="text-2xl font-bold text-white">#{order}</h2>
			</div>
		</header>
	);
};

export default Header;
