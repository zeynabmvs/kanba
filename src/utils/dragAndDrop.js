/**
 * Utility functions for drag and drop operations
 */

/**
 * Extracts list index from droppable ID
 * @param {string} droppableId - The droppable ID (format: "listId-index")
 * @returns {number} The list index
 */
export const extractListIndex = (droppableId) => {
  return parseInt(droppableId.split('-').pop(), 10);
};

/**
 * Checks if a drag operation is valid (has destination and moved position)
 * @param {Object} dropResult - The drag drop result
 * @returns {boolean} True if the drag is valid
 */
export const isValidDrag = (dropResult) => {
  const { destination, source } = dropResult;
  if (!destination) return false;
  
  if (dropResult.type === 'LIST') {
    return !(destination.droppableId === source.droppableId && destination.index === source.index);
  }
  
  return true;
};

