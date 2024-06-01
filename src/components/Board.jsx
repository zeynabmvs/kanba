// import { MdAdd } from "react-icons/md";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBoard } from "../features/boardsSlice";
import { openModal } from "../features/modalSlice";
// import BoardList from "./BoardList";
// import Button from "./standard/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Paper } from "@mui/material";
import { useState } from "react";

const BoardListCard = ({ title, description }) => {
  return (
    <div
      style={{
        padding: 10,
        margin: 5,
        border: "1px solid #ddd",
        borderRadius: 4,
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="caption">{description}</Typography>
    </div>
  );
};

const OptionsMenu = ({ text, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={onEdit}>Edit {text}</MenuItem>
        <MenuItem sx={{ color: 'red' }}  onClick={onDelete}>Delete {text}</MenuItem>
      </Menu>
    </>
  );
};

const BoardList = ({ list }) => {
  const dispatch = useDispatch();

  const onDeleteListHandler = () => {
    dispatch(openModal({ type: "deleteList", detail: list }));
  };
  const onEditListHandler = () => {
    // dispatch(closeModal())
    dispatch(openModal({ type: "editList", detail: list }));
  };

  return (
    <Paper elevation={3} sx={{ padding: 1, margin: 1, width: '200px'}} >
      <Stack direction="row" justifyContent="space-between">
      <h3>{list.title}</h3>
      <OptionsMenu
        text="list"
        onEdit={onEditListHandler}
        onelete={onDeleteListHandler}
      ></OptionsMenu>
      </Stack>

      {list.tasks?.map((item) => (
        <BoardListCard
          key={item.id}
          title={item.title}
          description={item.description}
        ></BoardListCard>
      ))}
    </Paper>
  );
};

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

      <Stack direction="row" >
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
