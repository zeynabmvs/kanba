import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderLists,
  reorderTask,
  selectCurrentBoard,
} from "../features/boards/boardsSlice.js";
import BoardList from "./BoardList";
import { ListIndexProvider } from "../contexts/listIndexContext.jsx";

const Board = () => {
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  const onDragEnd = (dropResult) => {
    const { destination, source } = dropResult;

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
        <Container sx={{ py: "64px" }}>
          <Typography component="p" variant="h6" textAlign="center">
            There is no board yet, create one from sidebar
          </Typography>
        </Container>
      )}

      {currentBoard?.lists?.length < 1 && (
        <Container sx={{ py: "64px" }}>
          <Typography component="p" variant="h6" textAlign="center">
            This Board is empty, create a new List to get started
          </Typography>
        </Container>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <Stack
          id="xyz"
          direction="row"
          alignItems={"flex-start"}
          // sx={{ margin: "16px" }}
        >
          <Droppable
            droppableId="lists-container"
            direction={"horizontal"}
            type={"LIST"}
            sx={{ overflow: "hidden"}}
          >
            {(provided) => (
              <Stack
                sx={{ overflow: "auto", px: {xs: "8px", md: "16px"}, pt: {xs: "8px", md: "16px"} }}
                // component={"ul"}
                direction={"row"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {currentBoard?.lists?.map((list, index) => (
                    <ListIndexProvider listIndex={index} key={list.id}>
                      <BoardList list={list} index={index} />
                    </ListIndexProvider>
                ))}
                {provided.placeholder}
              </Stack>
            )}
          </Droppable>
        </Stack>
      </DragDropContext>
    </>
  );
};

export default Board;
