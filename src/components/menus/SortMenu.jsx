import { Menu, MenuItem } from '@mui/material';

const SortMenu = ({ anchorEl, open, onClose, onSort }) => {
  return (
    <Menu
      id="sortSubmenu"
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
      <MenuItem onClick={() => onSort('date')}>Date</MenuItem>
      <MenuItem onClick={() => onSort('priority')}>Priority</MenuItem>
      <MenuItem onClick={() => onSort('title')}>Title</MenuItem>
    </Menu>
  );
};

export default SortMenu;

