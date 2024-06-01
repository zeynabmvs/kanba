import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBoard } from "../features/boardsSlice";
import { openModal } from "../features/modalSlice";
import BoardList from "./BoardList";

const Board = () => {
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  const onAddListHandler = () => {
    dispatch(openModal({ type: "addList" }));
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

      <Stack direction="row">
        {currentBoard?.lists?.map((list) => (
          <BoardList key={list.id} list={list} />
        ))}
        {currentBoard?.lists.length < 5 && (
          <Button onClick={() => onAddListHandler()}>Add new List</Button>
        )}
      </Stack>
    </>
  );
};

export default Board;
