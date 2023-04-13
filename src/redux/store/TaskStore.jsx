import taskReducer from "../reducer/TaskReducer";
import filterSlice from "../reducer/FilterSlice";
import { configureStore } from "@reduxjs/toolkit";

const taskStore = configureStore({
  reducer: { task: taskReducer, filter: filterSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default taskStore;
