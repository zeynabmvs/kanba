import { useDispatch } from "react-redux";
import { addTask } from "../../features/boardsSlice";
import { closeModal } from "../../features/modalSlice";
import TaskForm from "../forms/TaskForm";
import {Typography} from "@mui/material";

const AddTask = ({ onClose }) => {
    const dispatch = useDispatch();

    const onSubmitHandler = (data, e) => {
        dispatch(addTask(data));
        dispatch(closeModal());
    };

    return (
        <>
            <Typography variant="h6">Add New Task</Typography>
            <TaskForm onSubmit={onSubmitHandler} onCancel={onClose}></TaskForm>
        </>
    );
};

export default AddTask;
