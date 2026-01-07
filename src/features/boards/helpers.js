import {v4 as uuidv4} from "uuid";

export const findTaskIndexById = (state, taskId) => {
	for (
		let targetBoardIndex = 0;
		targetBoardIndex < state.boards.length;
		targetBoardIndex++
	) {
		const board = state.boards[targetBoardIndex];
		for (
			let targetListIndex = 0;
			targetListIndex < board.lists.length;
			targetListIndex++
		) {
			const list = board.lists[targetListIndex];
			const taskIndex = list.tasks.findIndex((item) => item.id === taskId);
			
			if (taskIndex > -1) {
				return [targetBoardIndex, targetListIndex, taskIndex];
			}
		}
	}
	return null;
};

export const findSubtaskIndexes = (state, subtask, task) => {
	const taskIndexes = findTaskIndexById(state, task.id);
	
	if (taskIndexes) {
		const subtaskIndex = task.subtasks.findIndex(
			(item) => item.id === subtask.id
		);
		return [...taskIndexes, subtaskIndex];
	}
};

// Helper function to create a new task
export const createTask = (taskData) => ({
	id: uuidv4(),
	title: taskData?.title,
	description: taskData?.description,
	color: taskData?.color || "#FFFFFF",
	status: taskData?.status || 'notCompleted',
	priority: taskData?.priority,
	date: new Date(),
	subtasks: taskData?.subtasks.map((item) => ({
		id: uuidv4(),
		title: item.title,
		status: item.status,
	})),
});


export const getCurrentBoardIndex = (state) => {
	return state.boards.findIndex(
		(item) => item.id === state.currentBoardId
	);
}

