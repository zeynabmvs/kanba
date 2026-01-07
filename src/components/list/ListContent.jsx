import { Droppable } from '@hello-pangea/dnd';
import Box from '@mui/material/Box';
import TaskCard from 'components/task/TaskCard';

const ListContent = ({ listId, listIndex, sortedTasks }) => {
  return (
    <Droppable droppableId={`${listId}-${listIndex.toString()}`} type={'CARD'}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{
            minHeight: '60px',
            mx: '12px',
          }}
        >
          {sortedTasks?.map((item, index) => (
            <TaskCard key={item.id} task={item} index={index} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default ListContent;

