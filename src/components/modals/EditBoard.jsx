import { useDispatch, useSelector } from "react-redux";
import { editBoard, selectCurrentBoard } from "../../features/boardsSlice";
import { closeModal } from "../../features/modalSlice";
import BoardFrom from "../forms/BoardFrom";
import {Typography} from "@mui/material";

const EditBoard = ({ onClose }) => {
    const currentBoard = useSelector(selectCurrentBoard);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(editBoard({ id: currentBoard.id, title: data.title }));
        dispatch(closeModal());
    };

    const defaultValues = {
        title: currentBoard.title,
    };

    return (
        <>
            <Typography variant="h6">Edit Board {currentBoard.title}</Typography>
            <BoardFrom onClose={onClose} onSubmit={onSubmit} defaultValues={defaultValues} />
        </>
    );
};
export default EditBoard;
