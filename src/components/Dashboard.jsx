import MenuIcon from "@mui/icons-material/Menu";
import {Close} from "@mui/icons-material"
import {Button, useMediaQuery} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentBoard} from "../features/boards/boardsSlice.js";
import {openModal} from "../features/modalSlice";
import Board from "./Board";
import OptionsMenu from "./OptionsMenu.jsx";
import Sidebar from "./Sidebar";
import AddCircleIcon from "@mui/icons-material/AddCircle";


export default function Dashboard() {
	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	const dispatch = useDispatch();
	const board = useSelector(selectCurrentBoard);
	
	const onAddTaskHandler = () => {
		dispatch(openModal({type: "addTask"}));
	};
	
	const onDeleteBoardHandler = () => {
		dispatch(
			openModal({
				type: "confirmDelete",
				detail: {
					type: "board",
					obj: board,
					message: `Are you sure you want to delete board ${board?.title} and all its data?`,
				},
			})
		);
	};
	const onEditBoardHandler = () => {
		dispatch(openModal({type: "editBoard"}));
	};
	
	const isSmallScreen = useMediaQuery('(max-width:600px)');
	
	return (
		<Box sx={{display: "flex", overflow: "hidden"}}>
			<AppBar position="absolute" open={open}>
				<Toolbar sx={{paddingRight: {xs: 0, md: "16px"}}}
				>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						sx={{
							marginRight: {xs: "4px", md: "36px"},
						}}
					>
						{open ? <Close/> : <MenuIcon/>}
					</IconButton>
					<Typography
						component="h1"
						variant={isSmallScreen ? "h6" : "h5"}
						color="inherit"
						noWrap
						sx={{flexGrow: 1}}
					>
						{board?.title}
					</Typography>
					{isSmallScreen ?
						<IconButton onClick={onAddTaskHandler} disabled={!board || board?.lists.length === 0}
												color="secondary"><AddCircleIcon/></IconButton> : <Button
							variant="contained"
							color="secondary"
							onClick={onAddTaskHandler}
							disabled={!board || board?.lists.length === 0}
						>
							+ Add Task
						</Button>}
					
					<OptionsMenu
						text="board"
						onEdit={onEditBoardHandler}
						onDelete={onDeleteBoardHandler}
					></OptionsMenu>
				</Toolbar>
			</AppBar>
			<Sidebar open={open}/>
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.customGrey.light
							: theme.palette.customGrey.darker,
					flexGrow: 1,
					height: isSmallScreen ? "calc(100vh - 48px)" : "calc(100vh - 65px)",
					mt: isSmallScreen ? "48px" : "65px",
				}}
			>
				<Board/>
			</Box>
		</Box>
	);
}
