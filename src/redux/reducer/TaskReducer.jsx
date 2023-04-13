import { createReducer } from "@reduxjs/toolkit";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../action/taskActions";

let initialState = {
  tasks: [],
  isLoading: false,
};

const taskReducer = createReducer(
  () => initialState, // Lasy initialization.
  (builder) => {
    builder.addCase(getAllTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      const { tasks, isLoading } = action.payload;
      state.tasks = tasks;
      state.isLoading = isLoading;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks = state.tasks?.concat(action.payload);
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const { task } = action.payload;
      let updatedTasks = state.tasks?.map((t) => {
        if (t.taskId !== task.taskId) return t;
        t.completed = task.completed;
        return t;
      });
      state.tasks = updatedTasks;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      const { taskId } = action.payload;
      state.tasks = state.tasks?.filter((t) => t.taskId !== taskId);
    });
    builder.addDefaultCase((state, action) => {});
  }
);

export default taskReducer;
