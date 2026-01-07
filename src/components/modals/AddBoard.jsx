import { useDispatch } from 'react-redux';
import { addBoard } from 'features/boards/boardsSlice.js';
import { closeModal } from 'features/modalSlice';
import BoardForm from 'components/forms/BoardForm';
import ModalTitle from 'components/modals/partials/modalTitle.jsx';

const AddBoard = ({ onClose }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addBoard({ title: data.title }));
    dispatch(closeModal());
  };

  return (
    <>
      <ModalTitle text="Add New Board" />
      <BoardForm onClose={onClose} onSubmit={onSubmit} />
    </>
  );
};
export default AddBoard;
