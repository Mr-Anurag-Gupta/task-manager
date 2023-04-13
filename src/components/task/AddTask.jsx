import styles from "./AddTask.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/action/taskActions";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.preventDefault();

    if (taskName !== "") {
      dispatch(createTask(taskName));
      setTaskName("");
    }
  };

  return (
    <div className={styles.addtask__container}>
      <input
        value={taskName}
        className={styles.addtask__input}
        onChange={(e) => setTaskName(e.target?.value)}
        placeholder='Add task here...'
      />
      <button
        type='button'
        className={styles.addtask__button}
        onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
