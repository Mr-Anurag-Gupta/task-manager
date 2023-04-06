import { nanoid } from "nanoid";
import TaskActionType from "./types/TaskActionType";

export const createTask = (taskName) => async (dispatch) => {
  try {
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

    if (!response.ok) throw new Error(response.text());

    const data = await response.json();

    dispatch({
      type: TaskActionType.CREATE,
      payload: { keyName: data.name, ...newTask },
    });
  } catch (err) {
    throw err;
  }
};
