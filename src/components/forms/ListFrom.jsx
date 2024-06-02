import { useForm } from "react-hook-form";
import {Button, Box, TextField} from "@mui/material";

const ListFrom = ({ onSubmit, onClose, defaultValues = {} }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: defaultValues });

    return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div>
            <TextField
                {...register("title", {
                    required: "Required",
                    maxLength: {
                        value: 50,
                        message: "Max length is 50",
                    },
                })}
                error={errors?.title}
                id="outlined-helperText"
                label="Title"
                variant="outlined"
                type="text"
                helperText={errors?.title ? errors?.title?.message : "Max. length is 50"}
            />
        </div>
        <div>
            <Button variant="contained" type="submit" >Save</Button>
            <Button variant="outlined" onClick={onClose} color="error">Cancel</Button>
        </div>
    </Box>
    );
};

export default ListFrom;
