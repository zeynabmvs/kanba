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
import { styled } from "@mui/material/styles";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCurrentBoard,
  selectBoards,
  selectCurrentBoardId,
} from "../features/boardsSlice";
import openModal from "../features/modalSlice";
import SwitchTheme from "./SwitchTheme";
import {mainListItems} from "./listItems"
import { Button } from "@mui/material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

const Sidebar = ({ open, toggleDrawer }) => {
  const boards = useSelector(selectBoards);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const dispatch = useDispatch();

  const onChangeBoardHandler = (board) => {
    dispatch(changeCurrentBoard(board.id));
  };

  const onCreateBoardHandler = () => {
    dispatch(openModal({ type: "createBoard" }));
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
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {boards.map((item) => (
          <Fragment key={item.id}>
            <ListItemButton selected={currentBoardId === item.id} onClick={() => onChangeBoardHandler(item)}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </Fragment>
        ))}

        <Button onClick={() => onCreateBoardHandler()} variant="contained" size="large" sx={{mx: [2]}}>Create New Board</Button>
        <Divider sx={{ my: 1 }} />
        <SwitchTheme />

        {/* {secondaryListItems} */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
