import { useContext } from "react";
import TodoContext from "../../context/todo-context";
import styles from "./TaskCard.module.css";

export default function TaskCard(props) {
  const context = useContext(TodoContext);
  const { task } = props;

  return (
    <div className={styles.taskcard__container}>
      <div>{task.taskName}</div>
      <div className={styles.btn_grp}>
        <button
          disabled={task.completed}
          onClick={() => context.onDone(task)}
          className={styles.btn_done}
        >
          Done
        </button>
        <button
          onClick={() => context.onRemove(task)}
          className={styles.btn_remove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
