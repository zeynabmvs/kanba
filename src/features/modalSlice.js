import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
	name: "modal",
	initialState: {
		isOpen: false,
		type: "",
		detail: "",
	},
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
			state.type = action.payload.type;
			state.detail = action.payload?.detail;
		},
		closeModal: (state) => {
			state.isOpen = false;
		},
	},
});

export const {openModal, closeModal} = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
