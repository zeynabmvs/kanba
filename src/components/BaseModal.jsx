import Modal from "@mui/material/Modal";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, selectModal} from "../features/modalSlice";
import {AddBoard, AddList, AddTask, ConfirmDelete, EditBoard, EditList, EditTask, TaskDetail,} from "./modals";
import {Paper} from "@mui/material";

const ModalContent = ({type, onClose, detail}) => {
	switch (type) {
		case "addBoard":
			return <AddBoard onClose={onClose}/>;
		case "editBoard":
			return <EditBoard onClose={onClose}/>;
		case "addList":
			return <AddList onClose={onClose}/>;
		case "editList":
			return <EditList onClose={onClose} detail={detail}/>;
		case "addTask":
			return <AddTask onClose={onClose}/>;
		case "editTask":
			return <EditTask onClose={onClose} detail={detail}/>;
		case "confirmDelete":
			return (
				<ConfirmDelete
					onClose={onClose}
					message={detail.message}
					obj={detail.obj}
					type={detail.type}
				/>
			);
		case "taskDetail":
			return <TaskDetail detail={detail}/>;
		default:
			return null;
	}
};

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: {xs: "80%", md: "600px"},
	borderRadius: "16px",
	boxShadow: 24,
	p: {xs: 2, md: 4},
	maxHeight: "80%",
	overflow: "auto",
};

export default function BaseModal() {
	const {isOpen, type, detail} = useSelector(selectModal);
	const dispatch = useDispatch();
	
	const onHandleClose = () => {
		isOpen && dispatch(closeModal());
	};
	
	return (
		<Modal
			open={isOpen}
			onClose={onHandleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Paper sx={modalStyle}>
				<ModalContent
					detail={detail}
					onClose={onHandleClose}
					type={type}
				></ModalContent>
			</Paper>
		</Modal>
	);
}
