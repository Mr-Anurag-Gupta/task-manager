import TaskActionType from "./types/TaskActionType";

export const updateTask = (task) => async (dispatch) => {
  const apiUrl = `https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager/${task.keyName}.json`;
  const payload = { completed: true };
  const response = await fetch(apiUrl, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(response.text());

  const data = await response.json();
  task.completed = data.completed;
  dispatch({ type: TaskActionType.UPDATE, payload: { task: task } });
};
