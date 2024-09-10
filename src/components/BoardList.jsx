import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { openModal } from "features/modalSlice";
import BoardListCard from "components/BoardListCard";
import OptionsMenu from "components/OptionsMenu.jsx";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const BoardList = ({ list, index }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const onHoverBg =
    theme.palette.mode === "light"
      ? theme.palette.secondary.light
      : theme.palette.customGrey.darkest;

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
    dispatch(openModal({ type: "editList", detail: list }));
  };
  const onAddTaskHandler = () => {
    dispatch(openModal({ type: "addTask", detail: index }));
  };
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided, snapshot) => (
        <Paper
          sx={{
            borderRadius: "16px",
            margin: 1,
            width: "250px",
            minWidth: "250px",
            backgroundColor: snapshot.isDragging && onHoverBg,
            alignSelf: "flex-start",
            listStyleType: "none",
            boxShadow: "none",
            maxHeight: isSmallScreen
              ? "calc(100vh - 48px)"
              : "calc(100vh - 65px)",
            overflow: "auto",
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
              px: "12px",
              mb: "8px",
              // transition: "all 300ms ease-in-out",
              alignItems: "center",
              "&:hover": {
                bgcolor: onHoverBg,
              },
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          >
            <Typography
              component="h3"
              variant={"h6"}
              sx={{
                "&:hover": { color: "primary" },
                width: "100%",
                fontWeight: "600",
              }}
              {...provided.dragHandleProps}
            >
              {list.title}
            </Typography>
            <OptionsMenu
              text="list"
              onEdit={onEditListHandler}
              onDelete={onDeleteListHandler}
              sx={{
                "& .MuiSvgIcon-root": {
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.customGrey.main
                      : theme.palette.customGrey.light,
                },
              }}
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
                  mx: "12px",
                }}
              >
                {list.tasks?.map((item, index) => (
                  <BoardListCard key={item.id} task={item} index={index} />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>

          <Button
            onClick={onAddTaskHandler}
            sx={{ mb: "16px", mx: "16px", width: "calc(100% - 32px)" }}
          >
            + Add Task
          </Button>
        </Paper>
      )}
    </Draggable>
  );
};

export default BoardList;
