import { useDispatch } from "react-redux";
import { editList } from "../../features/boardsSlice";
import { closeModal } from "../../features/modalSlice";

import { Typography } from "@mui/material";
import ListFrom from "../forms/ListFrom.jsx";

const EditList = ({ onClose, detail }) => {
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    dispatch(editList({ list: detail, title: data.title }));
    dispatch(closeModal());
    e.target.reset();
  };

  return (
    <>
      <Typography variant="body1">Edit List {detail.title}</Typography>
      <ListFrom
        onClose={onClose}
        onSubmit={onSubmit}
        defaultValues={{ title: detail.title }}
      />
    </>
  );
};
export default EditList;
