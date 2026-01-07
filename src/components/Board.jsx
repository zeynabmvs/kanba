import { Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  reorderLists,
  reorderTask,
  selectCurrentBoard,
  changeListSort,
} from 'features/boards/boardsSlice.js';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { headerHeights } from 'src/configs/constants';
import { extractListIndex } from 'src/utils/dragAndDrop';
import BoardEmptyState from 'components/board/BoardEmptyState';
import BoardDragContext from 'components/board/BoardDragContext';

const Board = () => {
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onDragEnd = (dropResult) => {
    const { destination, source } = dropResult;

    if (!destination) return;

    if (dropResult.type === 'LIST') {
      if (destination.droppableId === source.droppableId && destination.index === source.index)
        return;

      dispatch(
        reorderLists({
          sourceIndex: source.index,
          destinationIndex: destination.index,
          sourceList: currentBoard.lists[source.index],
        }),
      );
    } else if (dropResult.type === 'CARD') {
      const sourceListIndex = extractListIndex(source.droppableId);
      const destinationListIndex = extractListIndex(destination.droppableId);

      dispatch(
        changeListSort({
          sortBy: 'manualReorder',
          list: currentBoard.lists[destinationListIndex],
          direction: 'asc',
        }),
      );

      dispatch(
        reorderTask({
          sourceIndex: source.index,
          destinationIndex: destination.index,
          sourceListIndex: sourceListIndex,
          destinationListIndex: destinationListIndex,
          task: currentBoard.lists[sourceListIndex].tasks[source.index],
        }),
      );
    }
  };

  return (
    <Box
      id="board"
      sx={{
        height: isSmallScreen
          ? `calc(100vh - ${headerHeights.xs}px)`
          : `calc(100vh - ${headerHeights.md}px)`,
        display: 'flex',
        flexDirection: 'column',
        pt: '16px',
        pl: '8px',
        backgroundColor: theme.palette.mode === 'dark' ? '#1a1d2a' : 'transparent',
      }}
    >
      {/* Board Title */}
      <Typography variant="h4" component="h2" mb="8px" ml="8px">
        {currentBoard?.title}
      </Typography>

      {(!currentBoard || currentBoard?.lists?.length < 1) && (
        <BoardEmptyState hasBoard={!!currentBoard} boardTitle={currentBoard?.title} />
      )}

      {currentBoard?.lists?.length > 0 && (
        <BoardDragContext lists={currentBoard.lists} onDragEnd={onDragEnd} />
      )}
    </Box>
  );
};

export default Board;
