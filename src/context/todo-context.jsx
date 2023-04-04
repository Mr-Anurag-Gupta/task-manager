import { createContext, useEffect, useState } from "react";
import fetchService from "../services/base/FetchService";

const TodoContext = createContext({
  tasks: [],
  onAdd: (taskName) => {},
  onDone: (taskId) => {},
  onRemove: (taskId) => {},
});

export const TodoContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const _tasks = await fetchService.fetchTasks();
      setTasks(_tasks);
    }
    fetchData();
  }, []);

  const handleAdd = async (taskName) => {
    const task = await fetchService.createTask(taskName);
    setTasks([...tasks, task]);
  };

  const handleDone = async (task) => {
    const { completed } = await fetchService.updateTask(task.keyName);
    tasks.forEach((t) => {
      if (t.taskId === task.taskId) t.completed = completed;
    });

    setTasks(tasks);
  };

  const handleRemove = async (task) => {
    await fetchService.deleteTask(task.keyName);
    let _tasks = tasks.filter((t) => {
      if (t.taskId !== task.taskId) return task;
    });
    setTasks([..._tasks]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        onAdd: handleAdd,
        onDone: handleDone,
        onRemove: handleRemove,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
