import { Draggable } from '@hello-pangea/dnd';
import { Card, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modalSlice';
import { useListIndex } from 'src/contexts/listIndexContext.jsx';
import TaskContent from './TaskContent';
import TaskCheckbox from './TaskCheckbox';
import TaskMetadata from './TaskMetadata';

const TaskCard = ({ task, index }) => {
  const listIndex = useListIndex();
  const isCompleted = task.status === 'completed';
  const dispatch = useDispatch();

  const onShowTasksDetail = () => {
    dispatch(openModal({ type: 'taskDetail', detail: { ...task, list: listIndex } }));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          sx={{ mb: '16px', borderRadius: '12px', boxShadow: 'none' }}
          variant="outlined"
          className={`${snapshot.isDragging && 'is-dragging-card '} card-${task.color}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            padding="8px"
          >
            <Box {...provided.dragHandleProps} sx={{ width: '210px', overflow: 'hidden' }}>
              <TaskContent
                task={task}
                isCompleted={isCompleted}
                onClick={onShowTasksDetail}
              />
            </Box>

            <TaskCheckbox task={task} />
          </Stack>

          <TaskMetadata task={task} />
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;

