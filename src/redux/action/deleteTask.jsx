import { deleteTaskAction } from "./todoActions";

export const deleteTask = (task) => async (dispatch) => {
  try {
    const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(response.text());

    dispatch(deleteTaskAction(task.taskId));
  } catch (err) {
    throw err;
  }
};
