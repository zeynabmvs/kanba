import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editTask } from 'features/boards/boardsSlice.js';
import useSound from 'use-sound';
import tickSound from '/tick.wav';

const TaskCheckbox = ({ task }) => {
  const dispatch = useDispatch();
  const [play] = useSound(tickSound);
  const isCompleted = task.status === 'completed';

  const handleStatusChange = () => {
    const newStatus = isCompleted ? 'notCompleted' : 'completed';
    newStatus === 'completed' && play();

    dispatch(editTask({ newTask: { ...task, status: newStatus }, oldTask: task }));
  };

  return <Checkbox checked={isCompleted} onChange={handleStatusChange} />;
};

export default TaskCheckbox;

