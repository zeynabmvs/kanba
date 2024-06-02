import {Button, Typography} from "@mui/material";

const ConfirmDelete = ({ message, onClose, onDelete }) => {
    const onDeleteHandler =()=>{
        onDelete()
        onClose()
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
