import {Box, Button, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {useFieldArray, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {closeModal} from "../../features/modalSlice.js";

const TaskForm = ({onSubmit, onCancel, defaultValues = {}}) => {
	// const currentBoard = useSelector(selectCurrentBoard);
	const dispatch = useDispatch()
	
	const {
		register,
		handleSubmit,
		control,
		formState: {errors, isDirty},
	} = useForm({defaultValues: defaultValues});
	const {fields, append, remove} = useFieldArray({
		control,
		name: "subtasks",
	});
	
	const handleAddNewSubTask = () => {
		if (fields.length > 6) return;
		append({title: "", status: "notCompleted"});
	};
	
	const onSubmitHandle = (data, e) => {
		if (isDirty) {
			onSubmit(data);
		} else {
			e.target.reset()
			dispatch(closeModal())
		}
	};
	
	return (
		<>
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": {width: "100%"},
				}}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit(onSubmitHandle)}
			>
				<div style={{marginBottom: "24px", display: "flex", flexDirection: "column", gap: "32px"}}>
					<TextField
						{...register("title", {
							required: "Required",
							maxLength: {
								value: 100,
								message: "Max length is 100",
							},
						})}
						error={errors?.title}
						id="outlined-helperText"
						label="Title"
						variant="outlined"
						type="text"
						helperText={
							errors?.title && errors?.title?.message
						}
					/>
					
					<TextField
						{...register("description", {
							maxLength: {
								value: 300,
								message: "Max length is 300",
							},
						})}
						multiline
						minRows={3}
						maxRows={7}
						error={errors?.description}
						id="outlined-helperText"
						label="Description"
						helperText={
							errors?.description && errors?.description?.message
						}
					/>
					
					<div>
						<InputLabel id="subtasks-label" sx={{mb: "16px"}}>Subtasks</InputLabel>
						<div style={{display: "flex", gap: "16px", flexDirection: "column"}} aria-label={"subtasks-label"}>
							{fields.map((item, index) => {
								return (
									<div style={{display: "flex", alignItems: "center"}} key={index}>
										<TextField
											{...register(`subtasks.${index}.title`, {
												required: "Required",
											})}
											error={errors?.title}
											id="outlined-helperText"
											variant="outlined"
											type="text"
											label={`Subtask ${index + 1}`}
											helperText={
												errors?.subtasks?.[index]?.title && errors?.subtasks?.[index]?.title.message
											}
										
										/>
										<IconButton onClick={() => remove(index)} aria-label="close">
											<Close/>
										</IconButton>
									</div>
								
								);
							})}
							
							{fields.length < 7 && (
								<Button color="secondary" variant="contained" onClick={handleAddNewSubTask} sx={{width: "100%"}}>
									+ Add New Subtask
								</Button>
							)}
						
						</div>
					
					</div>
					
					<div>
						{/*TODO it's not getting default value */}
						<InputLabel id="priority-label" sx={{mb: "16px"}}>Priority</InputLabel>
						<Select
							{...register("priority")}
							labelId="priority-label"
							displayEmpty
							defaultValue=""
							fullWidth
						>
							<MenuItem value="" sx={{fontSize: "0.875rem"}} key="none">--</MenuItem>
							<MenuItem value="low" sx={{fontSize: "0.875rem"}} key={"low"}>Low</MenuItem>
							<MenuItem value="medium" sx={{fontSize: "0.875rem"}} key={"medium"}>Medium</MenuItem>
							<MenuItem value="high" sx={{fontSize: "0.875rem"}} key={"high"}>High</MenuItem>
						</Select>
					</div>
				
				</div>
				
				<Stack direction="row" sx={{gap: "16px"}}>
					<Button variant="contained" type="submit" sx={{flexGrow: 1}}>
						Save
					</Button>
					<Button variant="outlined" onClick={onCancel} color="error" sx={{flexGrow: 1}}>
						Cancel
					</Button>
				</Stack>
			
			</Box>
		
		
		</>
	
	);
};

export default TaskForm;
