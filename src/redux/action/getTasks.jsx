import TaskActionType from "./types/TaskActionType";

export const getTasks = async (dispatch) => {
  try {
    let apiUrl =
      "https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager.json";
    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error(response.statusText);

    let data = await response.json();

    let tasks = [];
    for (let key in data) {
      const { taskId, taskName, completed } = data[key];
      tasks = [...tasks, { keyName: key, taskId, taskName, completed }];
    }

    dispatch({ type: TaskActionType.FETCH, payload: { tasks: tasks } });
  } catch (err) {
    throw err;
  }
};
