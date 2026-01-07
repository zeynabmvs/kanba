import { Typography, Box } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useMemo } from 'react';

const TaskContent = ({ task, isCompleted, onClick }) => {
  const subtasksCount = task?.subtasks.length;
  const subtasksCompletedCount = useMemo(() => {
    return task?.subtasks.filter((i) => i.status === 'completed').length;
  }, [task.subtasks]);

  return (
    <Box
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
    >
      {/* Title */}
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
  );
};

export default TaskContent;

