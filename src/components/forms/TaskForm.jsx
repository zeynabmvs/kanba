import {Box, Button, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {closeModal} from "../../features/modalSlice.js";
import {selectCurrentBoard} from "../../features/boards/boardsSlice.js";

const TaskForm = ({onSubmit, onCancel, defaultValues = {priority: 'low', list: '0'}}) => {
	const dispatch = useDispatch()
	const currentBoard = useSelector(selectCurrentBoard)
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
				<div style={{marginBottom: "24px", display: "flex", flexDirection: "column", gap: {xs: "16px", md: "32px"}}}>
					
					<div>
						<InputLabel id="title-label">title</InputLabel>
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
							labelId="title-label"
							variant="outlined"
							type="text"
							helperText={
								errors?.title && errors?.title?.message
							}
						/>
					</div>
					
					<div>
						<InputLabel id="description-label">description</InputLabel>
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
							labelId="description-label"
							helperText={
								errors?.description && errors?.description?.message
							}
						/>
					</div>
					
					<div>
						<InputLabel id="list-label">List</InputLabel>
						<Controller
							name="list"
							control={control}
							render={({field}) => (
								<Select
									{...field}
									labelId="list-label"
									displayEmpty
									fullWidth
								>
									{currentBoard.lists?.map((item, index) => <MenuItem value={index} sx={{fontSize: "0.875rem"}}
																																			key={index}>{item.title}</MenuItem>)}
								</Select>
							)}
						/>
					</div>
					
					<div>
						<InputLabel id="priority-label">Priority</InputLabel>
						<Controller
							name="priority"
							control={control}
							render={({field}) => (
								<Select
									{...field}
									labelId="priority-label"
									displayEmpty
									fullWidth
								>
									<MenuItem value="" sx={{fontSize: "0.875rem"}} key="none">--</MenuItem>
									<MenuItem value="low" sx={{fontSize: "0.875rem"}} key="low">Low</MenuItem>
									<MenuItem value="medium" sx={{fontSize: "0.875rem"}} key="medium">Medium</MenuItem>
									<MenuItem value="high" sx={{fontSize: "0.875rem"}} key="high">High</MenuItem>
								</Select>
							)}
						/>
					</div>
					
					<div>
						<InputLabel id="subtasks-label">Subtasks</InputLabel>
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
