import { Menu, MenuItem } from '@mui/material';

const DirectionMenu = ({ anchorEl, open, onClose, onDirection }) => {
  return (
    <Menu
      id="directionSubmenu"
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={onClose}
    >
      <MenuItem onClick={() => onDirection('asc')}>Ascending</MenuItem>
      <MenuItem onClick={() => onDirection('desc')}>Descending</MenuItem>
    </Menu>
  );
};

export default DirectionMenu;

