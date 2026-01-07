import { Draggable } from '@hello-pangea/dnd';
import { Card, Checkbox, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editTask } from 'features/boards/boardsSlice.js';
import { openModal } from 'features/modalSlice';
import { useMemo } from 'react';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import PriorityChip from 'components/PriorityChip';
import { useListIndex } from 'src/contexts/listIndexContext.jsx';
import useSound from 'use-sound';
import tickSound from '/tick.wav';
import { displayDate } from 'src/utils/index.js';
import TimelineIcon from '@mui/icons-material/Timeline';

const BoardListCard = ({ task, index }) => {
  const listIndex = useListIndex();
  const [play] = useSound(tickSound);
  const isCompleted = task.status === 'completed';

  const dispatch = useDispatch();

  const onShowTasksDetail = () => {
    dispatch(openModal({ type: 'taskDetail', detail: { ...task, list: listIndex } }));
  };

  const handleStatusChange = () => {
    const newStatus = isCompleted ? 'notCompleted' : 'completed';
    newStatus === 'completed' && play();

    dispatch(editTask({ newTask: { ...task, status: newStatus }, oldTask: task }));
  };

  const subtasksCount = task?.subtasks.length;
  const subtasksCompletedCount = useMemo(() => {
    return task?.subtasks.filter((i) => i.status === 'completed').length;
  }, [task.subtasks]);

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
            <Box
              {...provided.dragHandleProps}
              onClick={onShowTasksDetail}
              sx={{ cursor: 'pointer', width: '210px', overflow: 'hidden' }}
            >
              {/* Title */}
              {
                <Typography
                  component={'h4'}
                  variant={'body1'}
                  mb="4px"
                  color={isCompleted ? 'text.secondary' : 'text.primary'}
                  sx={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {task.title}
                </Typography>
              }

              {/* Description */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                {task.description}
              </Typography>

              {/* Subtasks status */}
              {subtasksCount > 0 && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'flex', gap: '2px' }}
                >
                  <TimelineIcon fontSize="small" />
                  {`${subtasksCompletedCount}/${subtasksCount}`}
                </Typography>
              )}
            </Box>

            <Checkbox checked={task.status === 'completed'} onChange={handleStatusChange} />
          </Stack>

          <CardActions>
            <PriorityChip priority={task?.priority} />
            <Typography variant="caption" color="text.secondary">
              {displayDate(task?.date)}
            </Typography>
          </CardActions>
        </Card>
      )}
    </Draggable>
  );
};

export default BoardListCard;
