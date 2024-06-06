import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import {useTheme} from "@mui/material/styles";
import {toggleColorMode} from "../features/colorModeSlice";
import {useDispatch} from "react-redux";

const SwitchTheme = () => {
	const theme = useTheme()
	const dispatch = useDispatch()
	
	const onToggleTheme = () => {
		dispatch(toggleColorMode())
	}
	
	return (
		<>
			<IconButton
				sx={{ml: 1}}
				onClick={onToggleTheme}
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
