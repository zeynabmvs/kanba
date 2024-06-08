import {Draggable, Droppable} from "@hello-pangea/dnd";
import {Paper, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {openModal} from "../features/modalSlice";
import BoardListCard from "./BoardListCard";
import OptionsMenu from "./OptionsMenu.jsx";
import {useTheme} from '@mui/material/styles';

const BoardList = ({list, index}) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	
	const onHoverBg = theme.palette.mode === "light"
		? theme.palette.secondary.light
		: theme.palette.primary.dark
	
	const onDeleteListHandler = () => {
		dispatch(
			openModal({
				type: "confirmDelete",
				detail: {
					type: "list",
					obj: list,
					message: `Are you sure you want to delete list ${list.title} and all of its tasks?`,
				},
			})
		);
	};
	const onEditListHandler = () => {
		dispatch(openModal({type: "editList", detail: list}));
	};
	
	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided, snapshot) => (
				<Paper
					sx={{
						borderRadius: "8px",
						margin: 1,
						width: "250px",
						backgroundColor: snapshot.isDragging && onHoverBg,
						alignSelf: "flex-start",
						listStyleType: "none",
					}}
					className={`${snapshot.isDragging && "is-dragging "}`}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					{/*list's title box*/}
					<Stack
						direction="row"
						justifyContent="space-between"
						sx={{
							pt: "16px",
							pl: "16px",
							mb: "8px",
							// transition: "all 300ms ease-in-out",
							alignItems: "center",
							"&:hover": {
								bgcolor: onHoverBg
							},
							borderTopRightRadius: "8px",
							borderTopLeftRadius: "8px"
						}}
					>
						<Typography component="h3" variant={"h6"}
												sx={{'&:hover': {color: 'primary'}, width: "100%"}} {...provided.dragHandleProps}>
							{list.title}
						</Typography>
						<OptionsMenu
							text="list"
							onEdit={onEditListHandler}
							onDelete={onDeleteListHandler}
						></OptionsMenu>
					</Stack>
					
					<Droppable
						droppableId={`${list.id}-${index.toString()}`}
						type={"CARD"}
					>
						{(provided) => (
							// list's content box
							<Box
								ref={provided.innerRef}
								{...provided.droppableProps}
								sx={{
									minHeight: "60px",
									mx: "16px",
								}}
							>
								{list.tasks?.map((item, index) => (
									<BoardListCard key={item.id} task={item} index={index}/>
								))}
								{provided.placeholder}
							</Box>
						)}
					</Droppable>
				</Paper>
			)}
		</Draggable>
	);
};

export default BoardList;
