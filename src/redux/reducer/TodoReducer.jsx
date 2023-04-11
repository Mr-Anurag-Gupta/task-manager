import { createReducer, current } from "@reduxjs/toolkit";
import {
  getTasksAction,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction,
} from "../action/todoActions";

let initialState = {
  tasks: [],
  isLoading: false,
};

const todoReducer = createReducer(
  () => initialState, // Lasy initialization.
  (builder) => {
    builder.addCase(getTasksAction, (state, action) => {
      const { tasks, isLoading } = action.payload;
      state.tasks = tasks;
      state.isLoading = isLoading;
    });
    builder.addCase(createTaskAction, (state, action) => {
      state.tasks = state.tasks?.concat(action.payload);
    });
    builder.addCase(updateTaskAction, (state, action) => {
      const { task } = action.payload;
      let updatedTasks = state.tasks?.map((t) => {
        if (t.taskId !== task.taskId) return t;
        t.completed = task.completed;
        return t;
      });
      state.tasks = updatedTasks;
    });
    builder.addCase(deleteTaskAction, (state, action) => {
      const { taskId } = action.payload;
      state.tasks = state.tasks?.filter((t) => t.taskId !== taskId);
    });
    builder.addDefaultCase((state, action) => {});
  }
);

export default todoReducer;
