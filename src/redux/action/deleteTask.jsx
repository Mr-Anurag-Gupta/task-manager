import TaskActionType from "./types/TaskActionType";

export const deleteTask = (task) => async (dispatch) => {
  const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
  const response = await fetch(apiUrl, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error(response.text());

  dispatch({ type: TaskActionType.DELETE, payload: { taskId: task.taskId } });
};
