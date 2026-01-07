import MenuIcon from '@mui/icons-material/Menu';
import { Button, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBoard } from 'features/boards/boardsSlice.js';
import { openModal } from 'features/modalSlice';
import Board from 'components/Board';
import OptionsMenu from 'components/OptionsMenu';
import Sidebar from 'components/Sidebar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTheme } from '@mui/material/styles';
// import { selectDrawerState } from "src/features/appSettingsSlice";
// import { toggleDrawer } from "src/features/appSettingsSlice";
import { headerHeights } from 'src/configs/constants';

export default function Dashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(isSmallScreen ? false : true);
  // const isOpen = useSelector(selectDrawerState);
  const dispatch = useDispatch();
  const board = useSelector(selectCurrentBoard);

  const onAddListHandler = () => {
    dispatch(openModal({ type: 'addList' }));
  };

  const toggleDrawerState = () => {
    setIsOpen((prev) => !prev);
    // dispatch(toggleDrawer());
  };

  const onDeleteBoardHandler = () => {
    dispatch(
      openModal({
        type: 'confirmDelete',
        detail: {
          type: 'board',
          obj: board,
          message: `Are you sure you want to delete board ${board?.title} and all its data?`,
        },
      }),
    );
  };
  const onEditBoardHandler = () => {
    dispatch(openModal({ type: 'editBoard' }));
  };

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <AppBar position="absolute" open={isOpen}>
        <Toolbar
          sx={{
            paddingRight: '16px',
            justifyContent: 'space-between',
            alignItems: 'center',
            // height: isSmallScreen ? "56px" : "64px"
            // maxHeight: "60px",
            minHeight: isSmallScreen ? '56px !important' : '64px !important',
            height: isSmallScreen ? '56px' : '64px',
            maxHeight: isSmallScreen ? '56px' : '64px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawerState}
              sx={{
                marginRight: { xs: '4px', md: '16px' },
              }}
            >
              <MenuIcon />
              {/*{open ? <Close/> : <MenuIcon/>}*/}
            </IconButton>
            {/* Logo */}
            <Box
              component="img"
              sx={{
                height: 48,
                width: 176,
                maxHeight: { xs: 40, md: 48 },
                maxWidth: { xs: 150, md: 176 },
              }}
              alt="Logo"
              src="/logo.svg"
            />
          </Box>

          <Box>
            {isSmallScreen ? (
              <IconButton onClick={onAddListHandler} color="secondary" aria-label="add list">
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
                ml: { xs: '4px', md: '16px' },
                '& :hover': { color: theme.palette.primary.contrastText },
              }}
            ></OptionsMenu>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar open={isOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.customGrey.light
              : theme.palette.customGrey.darker,
          flexGrow: 1,
          overflowY: 'auto',
          height: isSmallScreen
            ? `calc(100vh - ${headerHeights.xs}px)`
            : `calc(100vh - ${headerHeights.md}px)`,
          mt: isSmallScreen ? `${headerHeights.xs}px` : `${headerHeights.md}px`,
        }}
      >
        <Board />
      </Box>
    </Box>
  );
}
