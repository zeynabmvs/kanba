import {Draggable} from "@hello-pangea/dnd";
import {Checkbox, Paper, Stack, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {editTask} from "../features/boardsSlice";
import {openModal} from "../features/modalSlice";
import Box from "@mui/material/Box";
import {useMemo} from "react";

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
	
	const subtasksCount = task?.subtasks.length
	const subtasksCompletedCount = useMemo(() => {
		return task?.subtasks.filter(i => i.status === 'completed').length
	}, [task.subtasks])
	
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
						mb: "8px",
						cursor: "pointer"
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
						
						<Box onClick={() => onShowTasksDetail()} sx={{flexGrow: 1, minHeight: "70px",}}>
							<Typography
								variant="body1"
								className={`${task.status === "completed" ? "line-through" : ""}`}
								sx={{paddingTop: "9px"}}
							>
								{task.title}
							</Typography>
							<Box>
								<Typography variant={"body2"}>
									{`${subtasksCompletedCount} of ${subtasksCount} is completed`}
								</Typography>
							</Box>
						</Box>
					
					</Stack>
				</Paper>
			)}
		</Draggable>
	);
};

export default BoardListCard;
