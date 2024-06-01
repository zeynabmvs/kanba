import { Box, Checkbox, Stack, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editSubtask } from "../../features/boardsSlice";
import { openModal } from "../../features/modalSlice";
import OptionsMenu from "../OptionsMenu";

const TaskDetail = ({ detail }) => {
  const dispatch = useDispatch();
  const task = detail;
  console.log(detail);
  const initialCheckboxes = task?.subtasks.map((i) => i.status === "completed");
  const [subtasksStatus, setSubtasksStatus] = useState(initialCheckboxes);

  const onDeleteHandler = () => {
    dispatch(openModal({ type: "deleteTask", detail: task }));
  };

  const onEditHandler = () => {
    dispatch(openModal({ type: "editTask", detail: task }));
  };

  const changeSubtaskStatus = (subtask, index) => {
    const cpy = subtasksStatus;
    cpy[index] = !subtasksStatus[index];
    setSubtasksStatus({ ...subtasksStatus, cpy });

    console.log(subtasksStatus[index]);
    dispatch(
      editSubtask({
        task: task,
        subtask: {
          ...subtask,
          status: subtasksStatus[index] ? "completed" : "notCompleted",
        },
      })
    );
  };

  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3">{task.title}</Typography>
          <OptionsMenu
            text="task"
            onEdit={onEditHandler}
            onelete={onDeleteHandler}
          ></OptionsMenu>
        </Stack>
        <Typography variant="body">{task.description}</Typography>

        {task?.subtasks.length > 0 && (
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {task?.subtasks.map((subtask, index) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                  // <ListItem disablePadding key={index}>
                  //   <ListItemButton>
                  //   <Checkbox
                  //       onChange={() => changeSubtaskStatus(subtask, index)}
                  //       name={subtask.id}
                  //       checked={subtasksStatus[index]}
                  //     />
                  //     <ListItemText primary="Inbox" />
                  //   </ListItemButton>
                  // </ListItem>

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
                          inputProps={{ "aria-labelledby": labelId }}
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
      </Box>
    </>
  );
};

export default TaskDetail;
