import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.value = !state.value ;
      document.documentElement.setAttribute("data-theme", state.value==false?"light":"dark");
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
