import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurrentBoard } from 'features/boards/boardsSlice.js';

const BoardList = ({ boards, currentBoardId }) => {
  const dispatch = useDispatch();
  const sidebarMenuItemStyles = { fontSize: '16px', fontWeight: '500' };

  const onChangeBoardHandler = (board) => {
    dispatch(changeCurrentBoard(board.id));
  };

  return (
    <>
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
    </>
  );
};

export default BoardList;

