import { createContext, useEffect, useState } from "react";
import fetchService from "../services/base/FetchService";

const TaskContext = createContext({
  tasks: [],
  isLoading: undefined,
  onAdd: (taskName) => {},
  onDone: (taskId) => {},
  onRemove: (taskId) => {},
});

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const _tasks = await fetchService.fetchTasks();
      setTasks(_tasks);
      setIsLoading(false);
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
    setTasks([...tasks]);
  };

  const handleRemove = async (task) => {
    await fetchService.deleteTask(task.keyName);
    let _tasks = tasks.filter((t) => {
      if (t.taskId !== task.taskId) return task;
    });
    setTasks([..._tasks]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        isLoading: isLoading,
        onAdd: handleAdd,
        onDone: handleDone,
        onRemove: handleRemove,
      }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
