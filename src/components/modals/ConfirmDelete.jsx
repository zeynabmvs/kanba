import {Button} from "@mui/material";

const ConfirmDelete = ({ message, onClose, onDelete }) => {
    const onDeleteHandler =()=>{
        onDelete()
        onClose()
    }

    return (
        <>
            <h1 className="text-red">Delete Confirmation</h1>
            <p>
                {message}
            </p>

            <div>
                <Button variant="contained" color="error" onClick={onDeleteHandler}>Delete</Button>
                <Button variant="outlined" onClick={onClose} color="secondary">Cancel</Button>
            </div>
        </>
    );
};
export default ConfirmDelete;
