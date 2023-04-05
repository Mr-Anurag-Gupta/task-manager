import { nanoid } from "nanoid";

class FetchService {
  taskManagerAPI =
    "https://task-manager-29388-default-rtdb.firebaseio.com/taskmanager";
  taskManagerJsonAPI = `${this.taskManagerAPI}.json`;

  fetchTaskByName = async (name) => {
    try {
      let apiUrl = `${this.taskManagerAPI}/${name}.json`;
      let response = await fetch(apiUrl);
      if (!response.ok) throw new Error(response.text());
      const task = await response.json();
      return { keyName: name, ...task };
    } catch (err) {
      throw err;
    }
  };

  fetchTasks = async () => {
    try {
      let response = await fetch(this.taskManagerJsonAPI);
      if (!response.ok) throw new Error(response.text());

      let data = await response.json();

      let tasks = [];
      for (let key in data) {
        const { taskId, taskName, completed } = data[key];
        tasks = [...tasks, { keyName: key, taskId, taskName, completed }];
      }

      return tasks;
    } catch (err) {
      throw err;
    }
  };

  createTask = async (taskName) => {
    try {
      const newTask = {
        taskId: nanoid(),
        taskName: taskName,
        completed: false,
      };
      const response = await fetch(this.taskManagerJsonAPI, {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(response.text());

      const data = await response.json();
      return this.fetchTaskByName(data.name);
    } catch (err) {
      throw err;
    }
  };

  updateTask = async (name) => {
    const apiUrl = `${this.taskManagerAPI}/${name}.json`;
    const payload = { completed: true };
    const response = await fetch(apiUrl, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(response.text());

    const data = await response.json();
    return data;
  };

  deleteTask = async (name) => {
    const apiUrl = `${this.taskManagerAPI}/${name}.json`;
    const response = await fetch(apiUrl, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(response.text());
  };
}

const fetchService = new FetchService();
export default fetchService;
