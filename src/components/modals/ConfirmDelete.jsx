import {Button, Stack, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteBoard, deleteList, deleteTask,} from "../../features/boards/boardsSlice.js";
import ModalTitle from "./partials/modalTitle.jsx";

const ConfirmDelete = ({type, obj, message, onClose}) => {
	console.log(obj);
	console.log(message);
	console.log(onClose);
	console.log(type);
	const dispatch = useDispatch();
	
	const onDeleteHandler = () => {
		switch (type) {
			case "task":
				dispatch(deleteTask({task: obj}));
				onClose();
				return;
			case "list":
				dispatch(deleteList({list: obj}));
				onClose();
				return;
			case "board":
				dispatch(deleteBoard({board: obj}));
				onClose();
				return;
			default:
				return null;
		}
	};
	
	return (
		<>
			<ModalTitle text="Delete Confirmation"/>
			<Typography variant="body1" sx={{mb: "32px"}}>{message}</Typography>
			
			<Stack direction="row" sx={{gap: "16px"}}>
				<Button color="error" variant="contained" onClick={onDeleteHandler} sx={{flexGrow: 1}}>
					Delete
				</Button>
				<Button variant="contained" onClick={onClose} color="secondary" sx={{flexGrow: 1}}>
					Cancel
				</Button>
			</Stack>
		
		</>
	);
};
export default ConfirmDelete;
