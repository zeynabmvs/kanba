import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  reorderLists,
  reorderTask,
  selectCurrentBoard,
  changeListSort
} from "features/boards/boardsSlice.js";
import BoardList from "components/BoardList";
import { ListIndexProvider } from "src/contexts/listIndexContext.jsx";
import { Box } from "@mui/material";

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

      dispatch(changeListSort({
        sortBy: "manualReorder",
        list: currentBoard.lists[destinationListIndex],
        direction: "asc"
      }))

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
      {/* Board Title */}
      <Box m="16px">
        <Typography variant="h4" component="h2" mb="8px" ml="8px">
          {currentBoard?.title}
        </Typography>

        {!currentBoard && (
          <Container sx={{ py: "64px" }}>
            <Typography component="p" variant="h6" textAlign="center">
              There is no board yet, create one from sidebar
            </Typography>
          </Container>
        )}

        {currentBoard?.lists?.length < 1 && (
          <Container
            sx={{
              py: "64px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: { xs: 150, md: 300 },
                width: { xs: 150, md: 300 },
                marginBottom: "24px",
              }}
              alt=""
              src="src/assets/images/empty-state.svg"
            />
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
            sx={{ height: "100%" }}
          >
            <Droppable
              droppableId="lists-container"
              direction={"horizontal"}
              type={"LIST"}
              sx={{ overflow: "hidden" }}
            >
              {(provided) => (
                <Stack
                  sx={{
                    overflow: "auto",
                    height: "100%",
                    width: "100%",
                  }}
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
      </Box>
    </>
  );
};

export default Board;
