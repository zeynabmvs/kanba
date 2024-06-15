import MoreVertIcon from "@mui/icons-material/MoreVert";
import {IconButton, Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import {useTheme} from "@mui/material/styles";

const OptionsMenu = ({text, onEdit, onDelete, sx}) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const theme = useTheme()
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	const onEditHandler = () => {
		onEdit();
		handleClose();
	};
	
	const onDeleteHandler = () => {
		onDelete();
		handleClose();
	};
	
	return (
		<>
			<IconButton
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				sx={{...sx, p: 0, '&:hover': {background: "none"}}}
			>
				<MoreVertIcon sx={{color: '#fff', '&:hover': {color: theme.palette.primary.main}}}/>
			</IconButton>
			
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={onEditHandler}>Edit {text}</MenuItem>
				<MenuItem sx={{color: "red"}} onClick={onDeleteHandler}>
					Delete {text}
				</MenuItem>
			</Menu>
		</>
	);
};

export default OptionsMenu;
