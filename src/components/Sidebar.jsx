import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import {styled} from "@mui/material/styles";
import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentBoard, selectBoards, selectCurrentBoardId,} from "../features/boards/boardsSlice.js";
import {openModal} from "../features/modalSlice";
import SwitchTheme from "./SwitchTheme";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {drawerWidth} from "../configs/constants";

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxShadow: "none",
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));


const Sidebar = ({open, toggleDrawer}) => {
	const boards = useSelector(selectBoards);
	const currentBoardId = useSelector(selectCurrentBoardId);
	const dispatch = useDispatch();
	
	const sidebarMenuItemStyles = {fontSize: '16px', fontWeight: '600'}
	
	const onChangeBoardHandler = (board) => {
		dispatch(changeCurrentBoard(board.id));
	};
	
	const onAddBoardHandler = () => {
		dispatch(openModal({type: "addBoard"}));
	};
	
	return (
		<Drawer variant="permanent" open={open}>
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					px: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon/>
				</IconButton>
			</Toolbar>
			<Divider/>
			<List component="nav">
				{boards?.map((item) => (
					<Fragment key={item.id}>
						<ListItemButton
							selected={currentBoardId === item.id}
							onClick={() => onChangeBoardHandler(item)}
						>
							<ListItemIcon>
								<DashboardIcon/>
							</ListItemIcon>
							<ListItemText primary={item.title} primaryTypographyProps={sidebarMenuItemStyles}/>
						</ListItemButton>
					</Fragment>
				))}
				<Fragment key="createBoardBtn">
					<ListItemButton
						onClick={onAddBoardHandler}
					>
						<ListItemIcon>
							<AddCircleIcon/>
						</ListItemIcon>
						<ListItemText primary="Create New Board"
													primaryTypographyProps={{...sidebarMenuItemStyles, color: "primary"}}/>
					</ListItemButton>
				</Fragment>
				<Divider sx={{my: 1}}/>
			</List>
			<SwitchTheme/>
		</Drawer>
	);
};

export default Sidebar;
