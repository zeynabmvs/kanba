import {createSlice} from "@reduxjs/toolkit";
import {produce} from "immer";
import {v4 as uuidv4} from "uuid";
import {initialData} from "../../configs/data.js";
import {createTask, findSubtaskIndexes, findTaskIndexById} from "./halpers.js";


export const boardsSlice = createSlice({
	name: "boards",
	initialState: {
		currentBoardId: initialData.boards.length ? initialData.boards[0].id : null,
		boards: initialData.boards,
	},
	reducers: {
		addBoard: (state, action) => {
			state.boards.push({
				id: uuidv4(),
				title: action.payload.title,
				lists: [],
			});
		},
		editBoard: (state, action) => {
			const exists = state.boards.find(
				(board) => board.id === action.payload.id
			);
			if (exists) {
				exists.title = action.payload.title;
			}
		},
		deleteBoard: (state, action) => {
			const {board} = action.payload;
			const newBoards = state.boards.filter((item) => item.id !== board.id);
			return {
				boards: newBoards,
				currentBoardId: newBoards[0].id,
			};
		},
		changeCurrentBoard: (state, action) => {
			state.currentBoardId = action.payload;
		},
		addList: (state, action) => {
			const {board, list} = action.payload;
			const targetBoardIndex = state.boards.findIndex(
				(item) => item.id === board.id
			);
			
			const newState = produce(state.boards, (draftState) => {
				draftState[targetBoardIndex].lists.push({
					id: uuidv4(),
					title: list.title,
					tasks: [],
				});
			});
			
			return {
				...state,
				boards: newState,
				currentBoard: state.boards[state.currentBoardId],
			};
		},
		editList: (state, action) => {
			const {list, title} = action.payload;
			const currentBoardIndex = state.boards.findIndex(
				(item) => item.id === state.currentBoardId
			);
			const listIndex = state.boards[currentBoardIndex].lists.findIndex(
				(item) => item.id === list.id
			);
			const newList = {...list, title: title};
			const newState = produce(state.boards, (draftState) => {
				draftState[currentBoardIndex].lists.splice(listIndex, 1, newList);
			});
			
			return {...state, boards: newState};
		},
		deleteList: (state, action) => {
			const {list} = action.payload;
			const currentBoardIndex = state.boards.findIndex(
				(item) => item.id === state.currentBoardId
			);
			const listIndex = state.boards[currentBoardIndex].lists.findIndex(
				(item) => item.id === list.id
			);
			const newState = produce(state.boards, (draftState) => {
				draftState[currentBoardIndex].lists.splice(listIndex, 1);
			});
			return {...state, boards: newState};
		},
		deleteTask: (state, action) => {
			const {task} = action.payload;
			const taskIndexes = findTaskIndexById(state, task.id);
			if (taskIndexes) {
				const [targetBoardIndex, targetListIndex, targetTaskIndex] =
					taskIndexes;
				const newState = produce(state.boards, (draftState) => {
					draftState[targetBoardIndex].lists[targetListIndex].tasks.splice(
						targetTaskIndex,
						1
					);
				});
				return {...state, boards: newState};
			}
			throw console.error("on delete task err");
		},
		editTask: (state, action) => {
			const {newTask, oldTask} = action.payload;
			const taskIndexes = findTaskIndexById(state, oldTask.id);
			
			const updatedTask = createTask(newTask)
			updatedTask.id = oldTask.id
			
			if (taskIndexes) {
				const [targetBoardIndex, targetListIndex, targetTaskIndex] =
					taskIndexes;
				
				const newState = produce(state.boards, (draftState) => {
					
					// TODO: remove list stuff
					if (!newTask.list) {
						draftState[targetBoardIndex].lists[targetListIndex].tasks.splice(
							targetTaskIndex,
							1,
							updatedTask
						);
					} else {
						draftState[targetBoardIndex].lists[targetListIndex].tasks.splice(
							targetTaskIndex,
							1
						);
						draftState[targetBoardIndex].lists[newTask.list].tasks.push(updatedTask);
					}
				});
				return {...state, boards: newState};
			}
			throw console.error("on edit task err");
		},
		editSubtask: (state, action) => {
			const {task, subtask} = action.payload;
			const [
				targetBoardIndex,
				targetListIndex,
				targetTaskIndex,
				targetSubtaskIndex,
			] = findSubtaskIndexes(state, subtask, task);
			
			const newState = produce(state.boards, (draftState) => {
				draftState[targetBoardIndex].lists[targetListIndex].tasks[
					targetTaskIndex
					].subtasks.splice(targetSubtaskIndex, 1, subtask);
			});
			
			return {...state, boards: newState};
		},
		
		addTask: (state, action) => {
			const taskData = action.payload;
			const listIndex = taskData?.list || 0;
			
			const task = createTask(taskData)
			
			const currentBoardIndex = state.boards.findIndex(
				(item) => item.id === state.currentBoardId
			);
			const newState = produce(state.boards, (draftState) => {
				draftState[currentBoardIndex].lists[listIndex].tasks.push(task);
			});
			
			return {...state, boards: newState};
		},
		reorderLists: (state, action) => {
			const {sourceIndex, destinationIndex, sourceList} = action.payload;
			const currentBoardIndex = state.boards.findIndex(
				(item) => item.id === state.currentBoardId
			);
			const nextState = produce(state.boards, (draftState) => {
				draftState[currentBoardIndex].lists.splice(sourceIndex, 1);
				draftState[currentBoardIndex].lists.splice(
					destinationIndex,
					0,
					sourceList
				);
			});
			
			return {...state, boards: nextState};
		},
		reorderTask: (state, action) => {
			const {
				sourceIndex,
				destinationIndex,
				sourceListIndex,
				destinationListIndex,
				task,
			} = action.payload;
			const currentBoardIndex = state.boards.findIndex(
				(item) => item.id === state.currentBoardId
			);
			const nextState = produce(state.boards, (draftState) => {
				draftState[currentBoardIndex].lists[sourceListIndex].tasks.splice(
					sourceIndex,
					1
				);
				draftState[currentBoardIndex].lists[destinationListIndex].tasks.splice(
					destinationIndex,
					0,
					task
				);
			});
			
			return {...state, boards: nextState};
		},
	},
});

export const selectBoards = (state) => state.boards.boards;
export const selectCurrentBoardId = (state) => state.boards.currentBoardId;
export const selectCurrentBoard = (state) =>
	state.boards.boards.find((item) => item.id === state.boards.currentBoardId);

export const {
	deleteBoard,
	changeCurrentBoard,
	addBoard,
	editBoard,
	addList,
	editList,
	deleteList,
	deleteTask,
	editTask,
	addTask,
	editSubtask,
	reorderLists,
	reorderTask,
} = boardsSlice.actions;

export default boardsSlice.reducer;
