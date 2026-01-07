import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentBoard } from 'features/boards/boardsSlice.js';
import Board from 'components/Board';
import Sidebar from 'components/Sidebar';
import { useTheme } from '@mui/material/styles';
import { headerHeights } from 'src/configs/constants';
import AppHeader from 'components/layout/AppHeader';

export default function Dashboard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(isSmallScreen ? false : true);
  const board = useSelector(selectCurrentBoard);

  const toggleDrawerState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <AppHeader isOpen={isOpen} onToggleDrawer={toggleDrawerState} board={board} />
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
