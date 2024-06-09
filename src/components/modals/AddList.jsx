import {useDispatch, useSelector} from "react-redux";
import {addList, selectCurrentBoard} from "../../features/boards/boardsSlice.js";
import {closeModal} from "../../features/modalSlice";
import ListFrom from "../forms/ListFrom";
import ModalTitle from "./partials/modalTitle.jsx";

const AddList = ({onClose}) => {
	const currentBoard = useSelector(selectCurrentBoard);
	const dispatch = useDispatch();
	
	const onSubmit = (data) => {
		dispatch(addList({board: currentBoard, list: {title: data.title}}));
		dispatch(closeModal());
	};
	
	return (
		<>
			<ModalTitle text="Add New List"/>
			<ListFrom onClose={onClose} onSubmit={onSubmit}/>
		</>
	);
};
export default AddList;
