import { useDispatch } from "react-redux";
import { addBoard } from "../../features/boardsSlice";
import { closeModal } from "../../features/modalSlice";
import BoardFrom from "../forms/BoardFrom";
import {Typography} from "@mui/material";

const AddBoard = ({ onClose }) => {
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addBoard({ title: data.title }));
        dispatch(closeModal());
    };

    return (
        <>
            <Typography variant="h6">Add New Board</Typography>
            <BoardFrom onClose={onClose} onSubmit={onSubmit}/>
        </>
    );
};
export default AddBoard;
