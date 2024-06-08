import {useDispatch} from "react-redux";
import {addTask} from "../../features/boardsSlice";
import {closeModal} from "../../features/modalSlice";
import TaskForm from "../forms/TaskForm";
import ModalTitle from "./partials/modalTitle.jsx";

const AddTask = ({onClose}) => {
	const dispatch = useDispatch();
	
	const onSubmitHandler = (data, e) => {
		dispatch(addTask(data));
		dispatch(closeModal());
	};
	
	return (
		<>
			<ModalTitle text="Add new task"/>
			<TaskForm onSubmit={onSubmitHandler} onCancel={onClose}></TaskForm>
		</>
	);
};

export default AddTask;
