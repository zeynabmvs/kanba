import MenuIcon from "@mui/icons-material/Menu";
import { Button, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBoard } from "../features/boards/boardsSlice.js";
import { openModal } from "../features/modalSlice";
import Board from "./Board";
import OptionsMenu from "./OptionsMenu.jsx";
import Sidebar from "./Sidebar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "@mui/material/styles";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);

  const onAddListHandler = () => {
    dispatch(openModal({ type: "addList" }));
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
    dispatch(openModal({ type: "editBoard" }));
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ paddingRight: "16px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: { xs: "4px", md: "36px" },
            }}
          >
            <MenuIcon />
            {/*{open ? <Close/> : <MenuIcon/>}*/}
          </IconButton>
          <Typography
            component="h1"
            variant={isSmallScreen ? "h6" : "h5"}
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {board?.title}
          </Typography>
          {isSmallScreen ? (
            <IconButton onClick={onAddListHandler} color="secondary">
              <AddCircleIcon />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={onAddListHandler}
              disabled={board?.lists.length > 5}
            >
              + new List
            </Button>
          )}

          <OptionsMenu
            text="board"
            onEdit={onEditBoardHandler}
            onDelete={onDeleteBoardHandler}
            sx={{
              ml: { xs: "4px", md: "16px" },
              "& :hover": { color: theme.palette.primary.contrastText },
            }}
          ></OptionsMenu>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.customGrey.light
              : theme.palette.customGrey.darker,
          flexGrow: 1,
          overflowY: "auto",
          height: isSmallScreen ? "calc(100vh - 48px)" : "calc(100vh - 65px)",
          mt: isSmallScreen ? "48px" : "65px",
        }}
      >
        <Board />
      </Box>
    </Box>
  );
}
