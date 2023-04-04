import TaskCard from "./TaskCard";
import styles from "./TaskList.module.css";
import { useContext, useMemo } from "react";
import TodoContext from "../../context/todo-context";

export default function TaskList(props) {
  const { tasks } = useContext(TodoContext);

  const tasksList = tasks.map((task) => {
    return <TaskCard key={task.taskId} task={task} />;
  });

  return (
    <div className={styles.tasklist__container}>
      {tasks.length > 0 && tasksList}
    </div>
  );
}
