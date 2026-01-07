import { useDispatch, useSelector } from 'react-redux';
import { editBoard, selectCurrentBoard } from 'features/boards/boardsSlice.js';
import { closeModal } from 'features/modalSlice';
import BoardForm from 'components/forms/BoardForm';
import ModalTitle from 'components/modals/partials/modalTitle.jsx';

const EditBoard = ({ onClose }) => {
  const currentBoard = useSelector(selectCurrentBoard);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(editBoard({ id: currentBoard.id, title: data.title }));
    dispatch(closeModal());
  };

  const defaultValues = {
    title: currentBoard.title,
  };

  return (
    <>
      <ModalTitle text={`Edit Board ${currentBoard.title}`} />
      <BoardForm onClose={onClose} onSubmit={onSubmit} defaultValues={defaultValues} />
    </>
  );
};
export default EditBoard;
