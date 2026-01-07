import { useDispatch } from 'react-redux';
import { addTask } from 'features/boards/boardsSlice.js';
import { closeModal } from 'features/modalSlice';
import TaskForm from 'components/forms/TaskForm';
import ModalTitle from 'components/modals/partials/modalTitle.jsx';

const AddTask = ({ onClose, detail }) => {
  const dispatch = useDispatch();

  const onSubmitHandler = (data) => {
    dispatch(addTask(data));
    dispatch(closeModal());
  };
  const defaultValues = {
    list: detail,
    priority: 'low',
  };
  return (
    <>
      <ModalTitle text="Add new task" />
      <TaskForm
        onSubmit={onSubmitHandler}
        onCancel={onClose}
        defaultValues={defaultValues}
      ></TaskForm>
    </>
  );
};

export default AddTask;
