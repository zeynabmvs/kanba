import { createSlice } from '@reduxjs/toolkit';

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState: {
    drawerIsOpen: true,
  },
  reducers: {
    toggleDrawer: (state) => {
      state.drawerIsOpen = !state.drawerIsOpen;
      return state;
    },
  },
});

export const { toggleDrawer } = appSettingsSlice.actions;
export const selectDrawerState = (state) => state.appSettings.drawerIsOpen;
export default appSettingsSlice.reducer;
