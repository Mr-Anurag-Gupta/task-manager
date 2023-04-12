import { createAction } from "@reduxjs/toolkit";

const getTasksAction = createAction("task/fetch", function (tasks) {
  return {
    payload: {
      tasks,
      isLoading: false,
    },
  };
});

const createTaskAction = createAction("task/create", function (keyName, task) {
  return {
    payload: {
      keyName,
      ...task,
    },
  };
});

const updateTaskAction = createAction("task/update", function (task) {
  return { payload: { task } };
});

const deleteTaskAction = createAction("task/delete", function (taskId) {
  return { payload: { taskId } };
});

export { getTasksAction, createTaskAction, updateTaskAction, deleteTaskAction };
