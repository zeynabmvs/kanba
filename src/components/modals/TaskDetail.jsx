import { Box, Checkbox, Stack, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSubtask } from 'features/boards/boardsSlice.js';
import { openModal } from 'features/modalSlice';
import OptionsMenu from 'components/OptionsMenu';
import PriorityChip from 'components/PriorityChip.jsx';
import { useTheme } from '@mui/material/styles';

const TaskDetail = ({ detail }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const task = detail;

  const initialCheckboxes = task?.subtasks.map((i) => i.status === 'completed');
  const [subtasksStatus, setSubtasksStatus] = useState(initialCheckboxes);

  const onDeleteHandler = () => {
    dispatch(
      openModal({
        type: 'confirmDelete',
        detail: {
          type: 'task',
          obj: task,
          message: `Are you sure you want to delete task ${task.title}?`,
        },
      }),
    );
  };

  const onEditHandler = () => {
    dispatch(openModal({ type: 'editTask', detail: task }));
  };

  const changeSubtaskStatus = (subtask, index) => {
    const cpy = subtasksStatus;
    cpy[index] = !subtasksStatus[index];
    setSubtasksStatus({ ...subtasksStatus, cpy });

    dispatch(
      editSubtask({
        task: task,
        subtask: {
          ...subtask,
          status: subtasksStatus[index] ? 'completed' : 'notCompleted',
        },
      }),
    );
  };

  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ mb: '16px' }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}
          >
            {task.title}
          </Typography>
          <OptionsMenu
            text="task"
            onEdit={onEditHandler}
            onDelete={onDeleteHandler}
            sx={{
              '& .MuiSvgIcon-root': {
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.customGrey.main
                    : theme.palette.customGrey.light,
              },
            }}
          ></OptionsMenu>
        </Stack>
        <Typography variant="body1" color="text.secondary" sx={{ mb: '16px' }}>
          {task.description}
        </Typography>

        {task?.subtasks.length > 0 && (
          <Box>
            <Typography variant="body2">Subtasks: </Typography>

            <List sx={{ mb: '32px' }}>
              {task?.subtasks.map((subtask, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={() => changeSubtaskStatus(subtask, index)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={subtasksStatus[index]}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={subtask.title} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}

        {/* <Stack direction="row" alignItems="center" sx={{mb: "8px"}}>
					<Typography variant="body2"
											sx={{mr: "16px"}}>Status: {detail.status === 'completed' ? 'Completed' : 'Not completed'}</Typography>
				</Stack> */}

        {detail?.priority !== 'none' ? (
          <Stack direction="row" alignItems="center">
            <Typography variant="body2" sx={{ mr: '16px' }}>
              Priority:{' '}
            </Typography>
            <PriorityChip priority={detail?.priority} />
          </Stack>
        ) : null}
      </Box>
    </>
  );
};

export default TaskDetail;
