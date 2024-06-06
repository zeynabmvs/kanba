import CloseIcon from "@mui/icons-material/Close";
import {Button, IconButton} from "@mui/material";
import {useFieldArray, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {selectCurrentBoard} from "../../features/boardsSlice.js";

const TaskForm = ({onSubmit, onCancel, defaultValues = {}}) => {
	const currentBoard = useSelector(selectCurrentBoard);
	
	const {
		register,
		handleSubmit,
		control,
		formState: {errors},
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
		e.target.reset();
		onSubmit(data);
	};
	
	return (
		<form onSubmit={handleSubmit(onSubmithandle)} className="form-basic">
			<label htmlFor="title">
				Title
				{errors?.title && (
					<span className="form-basic-err">{errors?.title.message}</span>
				)}
				<input
					{...register("title", {
						required: "Required",
						maxLength: {
							value: 100,
							message: "Max length is 100",
						},
					})}
					className={`form-input form-basic-input ${
						errors.title && "border border-red"
					}`}
				/>
			</label>
			
			<label htmlFor="description">
				Description
				{errors?.description && (
					<span className="form-basic-err">{errors?.description.message}</span>
				)}
				<textarea
					{...register("description", {
						maxLength: {
							value: 300,
							message: "Max length is 300",
						},
					})}
					className="form-textarea form-basic-input"
					rows={4}
				/>
			</label>
			
			{/* <label htmlFor="color">
        color
        <input {...register("color")} className="form-input form-basic-input" />
      </label> */}
			
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
									<CloseIcon/>
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
			
			<div>
				<label htmlFor="list">
					List
					<select {...register("list", {required: true})}>
						{currentBoard.lists?.map((list, index) => (
							<option value={index} key={index}>
								{list.title}
							</option>
						))}
					</select>
				</label>
			</div>
			
			<div className="flex gap-4">
				<Button variant="contained" type="submit">
					Save
				</Button>
				<Button variant="outlined" onClick={onCancel} color="error">
					Cancel
				</Button>
			</div>
		</form>
	);
};

export default TaskForm;
