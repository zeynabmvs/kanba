/**
 * Utility functions for sorting tasks
 */

/**
 * Priority order mapping for sorting
 */
const PRIORITY_ORDER = { high: 1, medium: 2, low: 3, none: 4 };

/**
 * Compares two tasks by date
 * @param {Object} a - First task
 * @param {Object} b - Second task
 * @returns {number} Comparison result
 */
export const compareByDate = (a, b) => {
  return new Date(a.date) - new Date(b.date);
};

/**
 * Compares two tasks by priority
 * @param {Object} a - First task
 * @param {Object} b - Second task
 * @returns {number} Comparison result
 */
export const compareByPriority = (a, b) => {
  const priorityA = PRIORITY_ORDER[a.priority] || 5;
  const priorityB = PRIORITY_ORDER[b.priority] || 5;
  return priorityA - priorityB;
};

/**
 * Compares two tasks by title
 * @param {Object} a - First task
 * @param {Object} b - Second task
 * @returns {number} Comparison result
 */
export const compareByTitle = (a, b) => {
  return a.title.localeCompare(b.title);
};

/**
 * Sorts tasks based on sort type and direction
 * @param {Array} tasks - Array of tasks to sort
 * @param {string} sortType - Type of sort ('date', 'priority', 'title', 'manualReorder')
 * @param {string} direction - Sort direction ('asc' or 'desc')
 * @returns {Array} Sorted array of tasks
 */
export const sortTasks = (tasks, sortType, direction) => {
  const sorted = [...tasks];
  
  if (sortType === 'manualReorder') {
    return sorted;
  }

  let comparison = 0;
  if (sortType === 'date') {
    sorted.sort((a, b) => {
      comparison = compareByDate(a, b);
      return direction === 'asc' ? comparison : -comparison;
    });
  } else if (sortType === 'priority') {
    sorted.sort((a, b) => {
      comparison = compareByPriority(a, b);
      return direction === 'asc' ? comparison : -comparison;
    });
  } else if (sortType === 'title') {
    sorted.sort((a, b) => {
      comparison = compareByTitle(a, b);
      return direction === 'asc' ? comparison : -comparison;
    });
  }

  return sorted;
};

