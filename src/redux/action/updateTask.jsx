import { updateTaskAction } from "./todoActions";

export const updateTask = (task) => async (dispatch) => {
  try {
    const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
    const payload = { completed: true };
    const response = await fetch(apiUrl, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(response.text());

    const data = await response.json();
    dispatch(updateTaskAction({...task, completed: data.completed}));
  } catch (err) {
    throw err;
  }
};
