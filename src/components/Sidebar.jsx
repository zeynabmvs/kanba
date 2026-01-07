import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCurrentBoard,
  selectBoards,
  selectCurrentBoardId,
} from 'features/boards/boardsSlice.js';
import { openModal } from 'features/modalSlice';
import SwitchTheme from 'components/SwitchTheme';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { drawerWidth, headerHeights } from 'src/configs/constants';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: 'none',
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8),
      },
    }),
  },
}));

const Sidebar = ({ open }) => {
  const theme = useTheme();
  const boards = useSelector(selectBoards);
  const currentBoardId = useSelector(selectCurrentBoardId);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const sidebarMenuItemStyles = { fontSize: '16px', fontWeight: '500' };

  const onChangeBoardHandler = (board) => {
    dispatch(changeCurrentBoard(board.id));
  };

  const onAddBoardHandler = () => {
    dispatch(openModal({ type: 'addBoard' }));
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{ marginTop: isSmallScreen ? `${headerHeights.xs}px` : `${headerHeights.md}px` }}
    >
      <List component="nav">
        {boards?.map((item) => (
          <Fragment key={item.id}>
            <ListItemButton
              selected={currentBoardId === item.id}
              onClick={() => onChangeBoardHandler(item)}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} primaryTypographyProps={sidebarMenuItemStyles} />
            </ListItemButton>
          </Fragment>
        ))}
        <Fragment key="createBoardBtn">
          <ListItemButton onClick={onAddBoardHandler}>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Create New Board"
              primaryTypographyProps={{
                ...sidebarMenuItemStyles,
                color: 'primary',
              }}
            />
          </ListItemButton>
        </Fragment>
        <Divider sx={{ my: 1 }} />
      </List>
      <SwitchTheme />
    </Drawer>
  );
};

export default Sidebar;
