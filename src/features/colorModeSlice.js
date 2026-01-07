import { createSlice } from '@reduxjs/toolkit';

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState: 'dark',
  reducers: {
    toggleColorMode: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleColorMode } = colorModeSlice.actions;
export const selectColorMode = (state) => state.colorMode;
export default colorModeSlice.reducer;
