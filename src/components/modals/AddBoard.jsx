import {useDispatch} from "react-redux";
import {addBoard} from "features/boards/boardsSlice.js";
import {closeModal} from "features/modalSlice";
import BoardFrom from "components/forms/BoardFrom";
import ModalTitle from "components/modals/partials/modalTitle.jsx";

const AddBoard = ({onClose}) => {
	const dispatch = useDispatch();
	
	const onSubmit = (data) => {
		dispatch(addBoard({title: data.title}));
		dispatch(closeModal());
	};
	
	return (
		<>
			<ModalTitle text="Add New Board"/>
			<BoardFrom onClose={onClose} onSubmit={onSubmit}/>
		</>
	);
};
export default AddBoard;
