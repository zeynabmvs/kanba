import { Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import PriorityChip from 'components/ui/PriorityChip';
import { displayDate } from 'src/utils/index.js';

const TaskMetadata = ({ task }) => {
  return (
    <CardActions>
      <PriorityChip priority={task?.priority} />
      <Typography variant="caption" color="text.secondary">
        {displayDate(task?.date)}
      </Typography>
    </CardActions>
  );
};

export default TaskMetadata;

