import todoReducer from "../reducer/TodoReducer";
import filterSlice from "../reducer/FilterSlice";
import { configureStore } from "@reduxjs/toolkit";

const todoStore = configureStore({
  reducer: { todo: todoReducer, filter: filterSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default todoStore;
