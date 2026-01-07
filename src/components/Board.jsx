import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  reorderLists,
  reorderTask,
  selectCurrentBoard,
  changeListSort,
} from 'features/boards/boardsSlice.js';
import BoardList from 'components/BoardList';
import { ListIndexProvider } from 'src/contexts/listIndexContext';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { headerHeights } from 'src/configs/constants';

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
      const sourceListIndex = parseInt(source.droppableId.split('-').pop(), 10);
      const destinationListIndex = parseInt(destination.droppableId.split('-').pop(), 10);

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
      sx={{
        height: isSmallScreen
          ? `calc(100vh - ${headerHeights.xs}px)`
          : `calc(100vh - ${headerHeights.md}px)`, // Adjust based on your header height
        display: 'flex',
        flexDirection: 'column',
        pt: '16px',
        pl: '8px',
      }}
    >
      {/* Board Title */}
      <Typography variant="h4" component="h2" mb="8px" ml="8px">
        {currentBoard?.title}
      </Typography>

      {!currentBoard && (
        <Container sx={{ py: '64px' }}>
          <Typography component="p" variant="h6" textAlign="center">
            There is no board yet, create one from sidebar
          </Typography>
        </Container>
      )}

      {currentBoard?.lists?.length < 1 && (
        <Container
          sx={{
            py: '64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 150, md: 300 },
              width: { xs: 150, md: 300 },
              marginBottom: '24px',
            }}
            alt=""
            src="/empty-state.svg"
          />
          <Typography component="p" variant="h6" textAlign="center">
            This Board is empty, create a new List to get started
          </Typography>
        </Container>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          direction="row"
          alignItems="flex-start"
          sx={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          <Droppable droppableId="lists-container" direction="horizontal" type="LIST">
            {(provided) => (
              <Stack
                sx={{
                  overflowX: 'auto',
                  overflowY: 'auto',
                  width: '100%',
                  height: '100%',
                  pb: 2, // Add padding to show scrollbar
                  '&::-webkit-scrollbar': {
                    height: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0,0,0,0.05)',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: '4px',
                  },
                }}
                direction="row"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {currentBoard?.lists?.map((list, index) => (
                  <ListIndexProvider listIndex={index} key={list.id}>
                    <BoardList list={list} index={index} />
                  </ListIndexProvider>
                ))}
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </Stack>
      </DragDropContext>
    </Box>
  );
};

export default Board;
