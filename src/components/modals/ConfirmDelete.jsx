import {Button, Typography} from "@mui/material";
import {deleteList, deleteBoard, deleteTask} from "../../features/boardsSlice.js";
import {useDispatch} from "react-redux";

const ConfirmDelete = ({ type, obj, message, onClose }) => {
    console.log(obj)
    console.log(message)
    console.log(onClose)
    console.log(type)
    const dispatch = useDispatch()

    const onDeleteHandler = ()=> {
        switch (type) {
            case "task":
                dispatch(deleteTask({task: obj}))
                onClose()
                return
            case "list":
                dispatch(deleteList({list: obj}))
                onClose()
                return
            case "board":
                dispatch(deleteBoard({board: obj}))
                onClose()
                return
            default:
                return null
        }
    }

    return (
<>
    <Typography variant="h6">Delete Confirmation</Typography>
    <Typography variant="body1">{message}</Typography>
            <div>
                <Button variant="contained" color="error" onClick={onDeleteHandler}>Delete</Button>
                <Button variant="outlined" onClick={onClose} color="secondary">Cancel</Button>
            </div>
        </>
    );
};
export default ConfirmDelete;
