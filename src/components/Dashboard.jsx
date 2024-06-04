import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import {Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {deleteBoard, selectCurrentBoard} from "../features/boardsSlice.js";
import { openModal } from "../features/modalSlice";
import OptionsMenu from "./OptionsMenu.jsx";
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
    const dispatch = useDispatch();
    const board = useSelector(selectCurrentBoard);

    const onAddTaskHandler = () => {
        dispatch(openModal({ type: "addTask" }));
    };
    // const onDelete=()=>{
    //     dispatch(deleteBoard({board: board}));
    //
    // }

    const onDeleteBoardHandler = () => {
        dispatch(openModal({ type: "confirmDelete", detail: {
            type: "board", obj: board, message: `Are you sure you want to delete board ${board?.title} and all its data?`
            } }));


    };
    const onEditBoardHandler = () => {
        dispatch(openModal({ type: "editBoard" }));
    };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
              {board?.title}
          </Typography>
            <Button variant="primary" onClick={onAddTaskHandler} disabled={!board || board?.lists.length === 0}>Add Task</Button>
            <OptionsMenu
                text="board"
                onEdit={onEditBoardHandler}
                onDelete={onDeleteBoardHandler}
            ></OptionsMenu>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Board></Board>
        </Container>
      </Box>
    </Box>
  );
}
