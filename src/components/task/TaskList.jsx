import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import styles from "./TaskList.module.css";
import { getTasks } from "../../redux/action/getTasks";
import TodoStore from "../../redux/store/TodoStore";

export default function TaskList(props) {
  const { tasks, isLoading } = TodoStore.getState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks);
  }, []);

  const tasksList = tasks?.map((task) => {
    return <TaskCard key={task.taskId} task={task} />;
  });

  return (
    <div className={styles.tasklist__container}>
      {isLoading === true ? (
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
