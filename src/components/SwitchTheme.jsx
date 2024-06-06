import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import {useTheme} from "@mui/material/styles";
import {useContext} from "react";
import {ColorModeContext} from "../app/App";

const SwitchTheme = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	
	return (
		<>
			<IconButton
				sx={{ml: 1}}
				onClick={colorMode.toggleColorMode}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon/>
				) : (
					<Brightness4Icon/>
				)}
			</IconButton>
		</>
	);
};

export default SwitchTheme;
