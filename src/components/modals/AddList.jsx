import { useDispatch, useSelector } from "react-redux";
import { addList, selectCurrentBoard } from "../../features/boardsSlice";
import { closeModal } from "../../features/modalSlice";
import ListFrom from "../forms/ListFrom";

const AddList = ({ onClose }) => {
    const currentBoard = useSelector(selectCurrentBoard);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(addList({ board: currentBoard, list: { title: data.title } }));
        dispatch(closeModal());
    };

    return (
        <>
            <h1>Add New List</h1>
            <ListFrom onClose={onClose} onSubmit={onSubmit} />

        </>
    );
};
export default AddList;
