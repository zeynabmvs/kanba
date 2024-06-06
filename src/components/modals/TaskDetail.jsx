import {Box, Checkbox, Stack, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editSubtask} from "../../features/boardsSlice";
import {openModal} from "../../features/modalSlice";
import OptionsMenu from "../OptionsMenu";
import PriorityChip from "../PriorityChip.jsx";

const TaskDetail = ({detail}) => {
	const dispatch = useDispatch();
	const task = detail;
	
	const initialCheckboxes = task?.subtasks.map((i) => i.status === "completed");
	const [subtasksStatus, setSubtasksStatus] = useState(initialCheckboxes);
	
	// const onDelete = () => {
	//   dispatch(deleteTask({task: detail}));
	// };
	
	const onDeleteHandler = () => {
		dispatch(openModal({
			type: "confirmDelete", detail:
				{type: "task", obj: task, message: `Are you sure you want to delete task ${task.title}?`}
		}))
	};
	
	const onEditHandler = () => {
		dispatch(openModal({type: "editTask", detail: task}));
	};
	
	const changeSubtaskStatus = (subtask, index) => {
		const cpy = subtasksStatus;
		cpy[index] = !subtasksStatus[index];
		setSubtasksStatus({...subtasksStatus, cpy});
		
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
				<Stack direction="row" justifyContent="space-between" alignItems='flex-start' sx={{mb: "16px",}}>
					<Typography variant="h5" component="h3">{task.title}</Typography>
					<OptionsMenu
						text="task"
						onEdit={onEditHandler}
						onDelete={onDeleteHandler}
					></OptionsMenu>
				</Stack>
				<Typography variant="body1" sx={{mb: "16px"}}>{task.description}</Typography>
				
				{task?.subtasks.length > 0 && (
					<Box
						// sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
					>
						<Typography variant="body2">Subtasks: </Typography>
						
						<List
							sx={{mb: "32px"}}
							// sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
						>
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
													inputProps={{"aria-labelledby": labelId}}
												/>
											</ListItemIcon>
											<ListItemText id={labelId} primary={subtask.title}/>
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
						
						<Stack direction="row" alignItems="center">
							<Typography variant="body2" sx={{mr: "16px"}}>Priority: </Typography>
							<PriorityChip priority={detail?.priority}/>
						
						</Stack>
					
					</Box>
				)}
			</Box>
		</>
	);
};

export default TaskDetail;
