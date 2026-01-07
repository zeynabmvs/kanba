import { Draggable } from '@hello-pangea/dnd';
import { Paper, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modalSlice';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { headerHeights } from 'src/configs/constants';
import { sortTasks } from 'src/utils/sorting';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

const ListColumn = ({ list, index }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onHoverBg =
    theme.palette.mode === 'light'
      ? theme.palette.secondary.light
      : theme.palette.customGrey.darkest;

  const onAddTaskHandler = () => {
    dispatch(openModal({ type: 'addTask', detail: index }));
  };

  const sortedTasks = useMemo(() => {
    return sortTasks(list.tasks, list.sort, list.direction);
  }, [list.tasks, list.sort, list.direction]);

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          sx={{
            borderRadius: '16px',
            margin: 1,
            width: '250px',
            minWidth: '250px',
            backgroundColor: snapshot.isDragging && onHoverBg,
            alignSelf: 'flex-start',
            listStyleType: 'none',
            boxShadow: 'none',
            maxHeight: isSmallScreen
              ? `calc(100vh - ${headerHeights.xs}px)`
              : `calc(100vh - ${headerHeights.md}px)`,
            overflow: 'auto',
          }}
          className={`${snapshot.isDragging && 'is-dragging '}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <ListHeader
            list={list}
            dragHandleProps={provided.dragHandleProps}
            onHoverBg={onHoverBg}
          />

          <ListContent listId={list.id} listIndex={index} sortedTasks={sortedTasks} />

          <Button
            onClick={onAddTaskHandler}
            sx={{
              mb: '16px',
              mx: '16px',
              width: 'calc(100% - 32px)',
              color: theme.palette.mode === 'dark' ? 'primary.contrastText' : undefined,
            }}
          >
            + Add Task
          </Button>
        </Paper>
      )}
    </Draggable>
  );
};

export default ListColumn;

