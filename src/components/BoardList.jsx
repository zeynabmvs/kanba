import {
    Paper,
    Stack
} from "@mui/material";
import { useDispatch } from "react-redux";
import {closeModal, openModal} from "../features/modalSlice";
import OptionsMenu from "./OptionsMenu";
import BoardListCard from "./BoardListCard"
import { deleteList } from "../features/boardsSlice";
import {Draggable, Droppable} from "@hello-pangea/dnd";
import Box from "@mui/material/Box";

const BoardList = ({ list, index }) => {
    const dispatch = useDispatch();

    const onDelete =()=> {
        dispatch(deleteList({ list: list}));
    }

    const onDeleteListHandler = () => {
        dispatch(closeModal())
        dispatch(openModal({ type: "confirmDelete", detail:
                {type: "list", onDelete: onDelete, message: `Are you sure you want to delete list ${list.title} and all of its tasks?`}
        }))
    };
    const onEditListHandler = () => {
      dispatch(openModal({ type: "editList", detail: list }));
    };

  // TODO: change lightblue color, use mui color
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided, snapshot) => (
                <Paper elevation={3}
                       sx={{ padding: 1, margin: 1, width: "200px", backgroundColor: snapshot.isDragging ? 'lightblue' : 'white', alignSelf: "flex-start"}}
                       className={`${snapshot.isDragging && "is-dragging " }`}
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                >
                    <Stack direction="row" justifyContent="space-between" {...provided.dragHandleProps} sx={{ '&:hover': { bgcolor: 'lightblue' } }}>
                        <h3>{list.title} - {list.id + '-' + index.toString()}</h3>
                        <OptionsMenu
                            text="list"
                            onEdit={onEditListHandler}
                            onDelete={onDeleteListHandler}
                        ></OptionsMenu>
                    </Stack>

                        <Droppable droppableId={`${list.id}-${index.toString()}`} type={"CARD"}>
                            {(provided) => (
                                <Box ref={provided.innerRef} {...provided.droppableProps} sx={{minHeight: "50px"}}>

                                    {list.tasks?.map((item, index) => (
                                        <BoardListCard key={item.id} task={item} index={index}/>
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                </Paper>
            ) }

        </Draggable>
    );
  };
  

  export default BoardList