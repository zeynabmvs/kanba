import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { Stack } from '@mui/material';
import ListColumn from 'components/list/ListColumn';
import { ListIndexProvider } from 'src/contexts/listIndexContext';

const BoardDragContext = ({ lists, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack
        direction="row"
        alignItems="flex-start"
        sx={{
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        <Droppable droppableId="lists-container" direction="horizontal" type="LIST">
          {(provided) => (
            <Stack
              sx={{
                overflowX: 'auto',
                overflowY: 'auto',
                width: '100%',
                height: '100%',
                pb: 2,
                '&::-webkit-scrollbar': {
                  height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: '4px',
                },
              }}
              direction="row"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists?.map((list, index) => (
                <ListIndexProvider listIndex={index} key={list.id}>
                  <ListColumn list={list} index={index} />
                </ListIndexProvider>
              ))}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </Stack>
    </DragDropContext>
  );
};

export default BoardDragContext;

