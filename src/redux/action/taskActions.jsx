import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (arg = undefined, thunkAPI) => {
    let apiUrl =
      "https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager.json";
    let response = await fetch(apiUrl);
    if (!response.ok) return Promise.reject(new Error(response.statusText));

    let data = await response.json();

    let tasks = [];
    for (let key in data) {
      const { taskId, taskName, completed } = data[key];
      tasks = [...tasks, { keyName: key, taskId, taskName, completed }];
    }

    return Promise.resolve({ tasks, isLoading: false });
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskName, thunkAPI) => {
    const apiUrl =
      "https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager.json";
    const newTask = {
      taskId: nanoid(),
      taskName: taskName,
      completed: false,
    };
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) return Promise.reject(new Error(response.statusText));

    const data = await response.json();

    return Promise.resolve({ keyName: data.name, ...newTask });
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task, thunkAPI) => {
    const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
    const payload = { completed: true };
    const response = await fetch(apiUrl, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    if (!response.ok) return Promise.reject(new Error(response.statusText));

    const data = await response.json();
    return Promise.resolve({ task: { ...task, completed: data.completed } });
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (task, thunkAPI) => {
    const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
    });

    if (!response.ok) return Promise.reject(new Error(response.statusText));

    return Promise.resolve({ taskId: task.taskId });
  }
);
