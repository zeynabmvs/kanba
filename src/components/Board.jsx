import {DragDropContext, Droppable} from "@hello-pangea/dnd";
import {Button, Container, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {reorderLists, reorderTask, selectCurrentBoard,} from "../features/boardsSlice";
import {openModal} from "../features/modalSlice";
import BoardList from "./BoardList";

const Board = () => {
	const currentBoard = useSelector(selectCurrentBoard);
	const dispatch = useDispatch();
	
	const onAddListHandler = () => {
		dispatch(openModal({type: "addList"}));
	};
	
	const onDragEnd = (dropResult) => {
		const {destination, source} = dropResult;
		
		if (!destination) return;
		
		if (dropResult.type === "LIST") {
			if (
				destination.droppableId === source.droppableId &&
				destination.index === source.index
			)
				return;
			dispatch(
				reorderLists({
					sourceIndex: source.index,
					destinationIndex: destination.index,
					sourceList: currentBoard.lists[source.index],
				})
			);
		} else if (dropResult.type === "CARD") {
			const sourceListIndex = parseInt(source.droppableId.split("-").pop(), 10);
			const destinationListIndex = parseInt(
				destination.droppableId.split("-").pop(),
				10
			);
			dispatch(
				reorderTask({
					sourceIndex: source.index,
					destinationIndex: destination.index,
					sourceListIndex: sourceListIndex,
					destinationListIndex: destinationListIndex,
					task: currentBoard.lists[sourceListIndex].tasks[source.index],
				})
			);
		}
	};
	return (
		<>
			{!currentBoard && (
				<Container>
					<Typography variant="h6" textAlign="center">
						There is no board yet, create one from sidebar
					</Typography>
				</Container>
			)}
			
			{currentBoard?.lists?.length < 1 && (
				<Container>
					<Typography variant="h6" textAlign="center">
						This Board is empty, create a new List to get started
					</Typography>
				</Container>
			)}
			<DragDropContext onDragEnd={onDragEnd}>
				<Stack direction="row" alignItems={"flex-start"} sx={{margin: "16px"}}>
					<Droppable
						droppableId="lists-container"
						direction={"horizontal"}
						type={"LIST"}
					>
						{(provided) => (
							<Stack
								// component={"ul"}
								direction={"row"}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{currentBoard?.lists?.map((list, index) => (
									<BoardList key={list.id} list={list} index={index}/>
								))}
								{provided.placeholder}
							</Stack>
						)}
					</Droppable>
					
					{currentBoard?.lists.length < 5 && (
						<Button onClick={() => onAddListHandler()} variant={"contained"} sx={{margin: "8px", width: "250px"}}>Add
							new List</Button>
					)}
				</Stack>
			</DragDropContext>
		</>
	);
};

export default Board;
