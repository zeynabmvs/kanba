import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
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

const StyledDrawer = ({ open, children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{ marginTop: isSmallScreen ? `${headerHeights.xs}px` : `${headerHeights.md}px` }}
    >
      {children}
    </Drawer>
  );
};

export default StyledDrawer;

