import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Paper, Stack, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { openModal } from "features/modalSlice";
import BoardListCard from "components/BoardListCard";
import ListActions from "components/ListActions.jsx";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";

const BoardList = ({ list, index }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const onHoverBg =
    theme.palette.mode === "light"
      ? theme.palette.secondary.light
      : theme.palette.customGrey.darkest;

  const onAddTaskHandler = () => {
    dispatch(openModal({ type: "addTask", detail: index }));
  };

  const sortedTasks = useMemo(() => {

    const sorted = [...list.tasks];
    sorted.sort((a, b) => {
      let comparison = 0;
      if (list.sort === 'date') {
        comparison = new Date(a.date) - new Date(b.date);
      } else if (list.sort === 'priority') {
        const priorityOrder = { high: 1, medium: 2, low: 3, none: 4 };
        comparison = (priorityOrder[a.priority] || 5) - (priorityOrder[b.priority] || 5);
      } else if (list.sort === 'title') {
        comparison = a.title.localeCompare(b.title);
      }
      return list.direction === 'asc' ? comparison : -comparison;
    });
    return sorted;

  }, [list.tasks, list.sort, list.direction]);

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
              {list.title}-{list.sort}-{list.direction}
            </Typography>
            <ListActions list={list}></ListActions>
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
                {sortedTasks?.map((item, index) => (
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
