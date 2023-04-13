import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import styles from "./TaskList.module.css";

export default function TaskList(props) {
  const tasks = useSelector((state) => state.filter.filteredTasks || undefined);
  const isLoading = useSelector((state) => state.task.isLoading);

  const tasksList = tasks?.map((task) => {
    return <TaskCard key={task.taskId} task={task} />;
  });

  return (
    <div className={styles.tasklist__container}>
      {isLoading === true || tasks === undefined ? (
        <div className={styles.tasklist__message}>Loading...</div>
      ) : tasks && tasks.length === 0 ? (
        <div className={styles.tasklist__message}>
          No tasks found. Start adding some!
        </div>
      ) : (
        tasksList
      )}
    </div>
  );
}
