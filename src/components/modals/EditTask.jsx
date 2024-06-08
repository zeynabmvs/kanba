import {Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {editTask} from "../../features/boardsSlice.js";
import {closeModal} from "../../features/modalSlice";
import TaskForm from "../forms/TaskForm.jsx";

const EditTask = ({onClose, detail}) => {
	const dispatch = useDispatch();
	const task = detail;
	
	const onSubmitHandler = (data, e) => {
		if (data === task) return null;
		dispatch(editTask({newTask: data, oldTask: task}));
		dispatch(closeModal());
	};
	
	const defaultValues = {
		id: task.id,
		title: task.title,
		description: task.description,
		color: task.color,
		status: task.status,
		priority: task.priority,
		subtasks: task?.subtasks.map((item) => ({
			title: item.title,
			status: item.status,
		})),
	};
	
	return (
		<>
			<Typography variant="h6">Edit Task {task.title}</Typography>
			
			<TaskForm
				onSubmit={onSubmitHandler}
				onCancel={onClose}
				defaultValues={defaultValues}
			></TaskForm>
		</>
	);
};

export default EditTask;
