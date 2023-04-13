import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../action/taskActions";

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
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.filteredTasks = action.payload?.tasks;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.filteredTasks = state.filteredTasks?.concat(action.payload);
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const { task } = action.payload;
      let updatedTasks = state.filteredTasks?.map((t) => {
        if (t.taskId !== task.taskId) return t;
        t.completed = task.completed;
        return t;
      });
      state.tasks = updatedTasks;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.filteredTasks = state.filteredTasks?.filter(
        (t) => t.taskId !== action.payload.taskId
      );
    });
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
