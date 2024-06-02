import {
    Paper,
    Stack
} from "@mui/material";
import { useDispatch } from "react-redux";
import {closeModal, openModal} from "../features/modalSlice";
import OptionsMenu from "./OptionsMenu";
import BoardListCard from "./BoardListCard"
import { deleteList } from "../features/boardsSlice";

const BoardList = ({ list }) => {
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
  
    return (
      <Paper elevation={3} sx={{ padding: 1, margin: 1, width: "200px" }}>
        <Stack direction="row" justifyContent="space-between">
          <h3>{list.title}</h3>
          <OptionsMenu
            text="list"
            onEdit={onEditListHandler}
            onDelete={onDeleteListHandler}
          ></OptionsMenu>
        </Stack>
  
        {list.tasks?.map((item) => (
          <BoardListCard key={item.id} task={item}></BoardListCard>
        ))}
      </Paper>
    );
  };
  

  export default BoardList