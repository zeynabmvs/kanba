import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModal } from "../features/modalSlice";
import { TaskDetail } from "./modals";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { isOpen, type, detail } = useSelector(selectModal);
  const dispatch = useDispatch();

  const onhandleClose = () => {
    isOpen && dispatch(closeModal());
  };

  console.log(detail)

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onhandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TaskDetail detail={detail}></TaskDetail>
        </Box>
      </Modal>
    </div>
  );
}
