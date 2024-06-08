import {Box, Button, TextField} from "@mui/material";
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
	
	const onSubmithandle = (data, e) => {
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
					"& .MuiTextField-root": {m: 1, width: "25ch"},
				}}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit(onSubmithandle)}
			>
				<div>
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
							errors?.title ? errors?.title?.message : "Max. length is 50"
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
						// variant="outlined"
						// type="text"
						helperText={
							errors?.description && errors?.description?.message
						}
					/>
					
					<label htmlFor="status">
						Completed
						<input
							type="checkbox"
							value="completed"
							{...register("status")}
							className="form-checkbox form-basic-checkbox"
						/>
					</label>
					
					<div>
						<label htmlFor="subtasks">Subtasks</label>
						<ul className="flex flex-col gap-1 my-1">
							{fields.map((item, index) => {
								return (
									<li key={index} className="flex items-center">
										<label className="w-full">
											{errors?.subtasks?.[index]?.title && (
												<span className="form-basic-err">
                      {errors?.subtasks?.[index]?.title.message}
                    </span>
											)}
											<input
												type="text"
												className={`form-input form-basic-input ${
													errors?.subtasks?.[index]?.title && "border border-red"
												} `}
												defaultValue={`${item.title}`}
												{...register(`subtasks.${index}.title`, {
													required: "Required",
												})}
											></input>
										</label>
										<IconButton onClick={() => remove(index)} aria-label="close">
											<Close/>
										</IconButton>
									</li>
								);
							})}
						</ul>
						{fields.length < 7 && (
							<Button variant="secondary" onClick={handleAddNewSubTask}>
								+ Add New Subtask
							</Button>
						)}
					</div>
					
					{/*<div>*/}
					{/*	<label htmlFor="list">*/}
					{/*		List*/}
					{/*		<select {...register("list", {required: true})}>*/}
					{/*			{currentBoard.lists?.map((list, index) => (*/}
					{/*				<option value={index} key={index}>*/}
					{/*					{list.title}*/}
					{/*				</option>*/}
					{/*			))}*/}
					{/*		</select>*/}
					{/*	</label>*/}
					{/*</div>*/}
					
					<label htmlFor="priority">
						priority
						<select {...register("priority")}>
							
							<option value='' key='-'>-</option>
							<option value='low' key='low'>Low</option>
							<option value='medium' key='medium'>Medium</option>
							<option value='high' key='high'>High</option>
						
						</select>
					</label>
				
				</div>
				<div>
					<Button variant="contained" type="submit">
						Save
					</Button>
					<Button variant="outlined" onClick={onCancel} color="error">
						Cancel
					</Button>
				</div>
			</Box>
		
		
		</>
	
	);
};

export default TaskForm;
