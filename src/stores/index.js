import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../stores/theme";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
