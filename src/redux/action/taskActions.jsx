import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (arg = undefined, thunkAPI) => {}
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (arg = undefined, thunkAPI) => {}
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (arg = undefined, thunkAPI) => {}
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (arg = undefined, thunkAPI) => {}
);
