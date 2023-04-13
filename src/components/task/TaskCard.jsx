import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../redux/action/taskActions"

import styles from "./TaskCard.module.css";

export default function TaskCard(props) {
  const dispatch = useDispatch();
  const { task } = props;

  return (
    <div className={styles.taskcard__container}>
      <div>{task.taskName}</div>
      <div className={styles.btn_grp}>
        <button
          disabled={task.completed}
          onClick={() => dispatch(updateTask(task))}
          className={styles.btn_done}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(deleteTask(task))}
          className={styles.btn_remove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
