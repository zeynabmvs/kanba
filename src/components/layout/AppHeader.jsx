import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { headerHeights } from 'src/configs/constants';
import HeaderActions from './HeaderActions';

const AppHeader = ({ isOpen, onToggleDrawer, board }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="absolute" open={isOpen}>
      <Toolbar
        sx={{
          paddingRight: '16px',
          justifyContent: 'space-between',
          alignItems: 'center',
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
            onClick={onToggleDrawer}
            sx={{
              marginRight: { xs: '4px', md: '16px' },
            }}
          >
            <MenuIcon />
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

        <HeaderActions board={board} />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

