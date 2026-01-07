import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import {
  selectBoards,
  selectCurrentBoardId,
} from 'features/boards/boardsSlice.js';
import SwitchTheme from 'components/ui/SwitchTheme';
import StyledDrawer from 'components/sidebar/StyledDrawer';
import BoardList from 'components/sidebar/BoardList';
import SidebarActions from 'components/sidebar/SidebarActions';

const Sidebar = ({ open }) => {
  const boards = useSelector(selectBoards);
  const currentBoardId = useSelector(selectCurrentBoardId);

  return (
    <StyledDrawer open={open}>
      <List component="nav">
        <SidebarActions />
        <BoardList boards={boards} currentBoardId={currentBoardId} />
        <Divider sx={{ my: 1 }} />
      </List>
      <SwitchTheme />
    </StyledDrawer>
  );
};

export default Sidebar;
