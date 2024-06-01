import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    themeToggle: (state) => {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { themeToggle } = themeSlice.actions;
export const selectTheme = (state) => state.theme;
export default themeSlice.reducer;
