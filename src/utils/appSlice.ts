import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface appState {
  isSidebarVisible: boolean;
}

const initialState: appState = {
  isSidebarVisible: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
  },
});


export const {toggleMenu} = appSlice.actions
export default appSlice.reducer