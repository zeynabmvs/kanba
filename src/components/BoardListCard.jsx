import {Draggable} from "@hello-pangea/dnd";
import {Checkbox, Paper, Stack, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {editTask} from "../features/boardsSlice";
import {openModal} from "../features/modalSlice";

const BoardListCard = ({task, index}) => {
	const dispatch = useDispatch();
	
	const onShowTasksDetail = () => {
		dispatch(openModal({type: "taskDetail", detail: task}));
	};
	
	const handleStatusChange = () => {
		const newStatus =
			task.status === "completed" ? "notCompleted" : "completed";
		dispatch(
			editTask({newTask: {...task, status: newStatus}, oldTask: task})
		);
	};
	
	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<Paper
					elevation={1}
					sx={{
						padding: 1,
						// margin: 5,
						border: "1px solid #ddd",
						borderRadius: 2,
						minHeight: "100px",
						mb: "8px",
					}}
					className={`${snapshot.isDragging && "is-dragging-card "}`}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<Stack direction="row" alignItems="flex-start">
						<Checkbox
							checked={task.status === "completed"}
							onChange={handleStatusChange}
						/>
						<Typography
							variant="body1"
							className={`${task.status === "completed" ? "line-through" : ""}`}
							onClick={() => onShowTasksDetail()}
							sx={{paddingTop: "9px"}}
						>
							{task.title} - {index}
						</Typography>
					</Stack>
				</Paper>
			)}
		</Draggable>
	);
};

export default BoardListCard;
