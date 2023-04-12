import { createSlice, current } from "@reduxjs/toolkit";
import {
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
} from "../action/todoActions";

const initialState = {
  filteredTasks: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterAll: {
      reducer: (state, action) => {
        const { tasks } = action.payload;
        state.filteredTasks = tasks?.filter((t) => t);
      },
      prepare: (tasks) => {
        return {
          payload: { tasks },
        };
      },
    },
    filterPending: {
      reducer: (state, action) => {
        const { tasks } = action.payload;
        state.filteredTasks = tasks?.filter((t) => t.completed === false);
      },
      prepare: (tasks) => {
        return {
          payload: { tasks },
        };
      },
    },
    filterCompleted: {
      reducer: (state, action) => {
        const { tasks } = action.payload;
        state.filteredTasks = tasks?.filter((t) => t.completed === true);
      },
      prepare: (tasks) => {
        return {
          payload: { tasks },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTaskAction, (state, action) => {
      state.filteredTasks = state.filteredTasks?.concat(action.payload);
    });
    builder.addCase(updateTaskAction, (state, action) => {
      const { task } = action.payload;
      let updatedTasks = state.filteredTasks?.map((t) => {
        if (t.taskId !== task.taskId) return t;
        t.completed = task.completed;
        return t;
      });
      state.tasks = updatedTasks;
    });
    builder.addCase(deleteTaskAction, (state, action) => {
      state.filteredTasks = state.filteredTasks?.filter(
        (t) => t.taskId !== action.payload.taskId
      );
    });
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
