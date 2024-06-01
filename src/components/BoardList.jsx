import {
    Paper,
    Stack
} from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modalSlice";
import OptionsMenu from "./OptionsMenu";
import BoardListCard from "./BoardListCard"

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
      <Paper elevation={3} sx={{ padding: 1, margin: 1, width: "200px" }}>
        <Stack direction="row" justifyContent="space-between">
          <h3>{list.title}</h3>
          <OptionsMenu
            text="list"
            onEdit={onEditListHandler}
            onelete={onDeleteListHandler}
          ></OptionsMenu>
        </Stack>
  
        {list.tasks?.map((item) => (
          <BoardListCard key={item.id} task={item}></BoardListCard>
        ))}
      </Paper>
    );
  };
  

  export default BoardList