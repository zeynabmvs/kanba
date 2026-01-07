import { useDispatch } from 'react-redux';
import { addList } from 'features/boards/boardsSlice.js';
import { closeModal } from 'features/modalSlice';
import ListForm from 'components/forms/ListForm';
import ModalTitle from 'components/modals/partials/modalTitle.jsx';

const AddList = ({ onClose }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addList({ listData: { title: data.title } }));
    dispatch(closeModal());
  };

  return (
    <>
      <ModalTitle text="Add New List" />
      <ListForm onClose={onClose} onSubmit={onSubmit} />
    </>
  );
};
export default AddList;
