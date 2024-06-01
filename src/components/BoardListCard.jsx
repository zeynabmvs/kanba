import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { editTask } from "../features/boardsSlice";
import { openModal } from "../features/modalSlice";

const BoardListCard = ({ task }) => {
  const dispatch = useDispatch();

  const onShowTaksDetail = () => {
    console.group("iii");
    dispatch(openModal({ type: "taskDetail", detail: task }));
  };

  const handleStatusChange = () => {
    const newStatus =
      task.status === "completed" ? "notCompleted" : "completed";
    dispatch(
      editTask({ newTask: { ...task, status: newStatus }, oldTask: task })
    );
  };

  return (
    <Paper
      style={{
        padding: 10,
        margin: 5,
        border: "1px solid #ddd",
        borderRadius: 4,
      }}
    >
      <Stack direction="row" alignItems="center">
        <Checkbox
          checked={task.status === "completed"}
          onChange={handleStatusChange}
        />
        <Typography
          variant="body1"
          className={`${task.status === "completed" ? "line-through" : ""}`}
          onClick={() => onShowTaksDetail()}
        >
          {task.title}
        </Typography>
      </Stack>
    </Paper>
  );
};


export default BoardListCard