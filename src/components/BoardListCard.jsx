import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { editTask } from "../features/boardsSlice";
import { openModal } from "../features/modalSlice";
import {Draggable} from "@hello-pangea/dnd";

const BoardListCard = ({ task, index }) => {
  const dispatch = useDispatch();

  const onShowTasksDetail = () => {
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

      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
            <Paper
                style={{
                  padding: 10,
                  margin: 5,
                  border: "1px solid #ddd",
                  borderRadius: 4,
                }}
                className={`${snapshot.isDragging && "is-dragging-card " }`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
              <Stack direction="row" alignItems="center">
                <Checkbox
                    checked={task.status === "completed"}
                    onChange={handleStatusChange}
                />
                <Typography
                    variant="body1"
                    className={`${task.status === "completed" ? "line-through" : ""}`}
                    onClick={() => onShowTasksDetail()}
                >
                  {task.title}
                </Typography>
              </Stack>
            </Paper>
        )}


      </Draggable>

  );
};


export default BoardListCard