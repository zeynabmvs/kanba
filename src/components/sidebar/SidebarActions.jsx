import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modalSlice';

const SidebarActions = () => {
  const dispatch = useDispatch();
  const sidebarMenuItemStyles = { fontSize: '16px', fontWeight: '500' };

  const onAddBoardHandler = () => {
    dispatch(openModal({ type: 'addBoard' }));
  };

  const onSearchHandler = () => {
    dispatch(openModal({ type: 'search' }));
  };

  return (
    <>
      <Fragment key="searchBtn">
        <ListItemButton onClick={onSearchHandler}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" slotProps={{ primary: sidebarMenuItemStyles }} />
        </ListItemButton>
      </Fragment>

      <Fragment key="createBoardBtn">
        <ListItemButton onClick={onAddBoardHandler}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText
            primary="Create New Board"
            slotProps={{ primary: sidebarMenuItemStyles }}
          />
        </ListItemButton>
      </Fragment>
    </>
  );
};

export default SidebarActions;

