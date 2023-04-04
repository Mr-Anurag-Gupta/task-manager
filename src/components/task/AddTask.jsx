import styles from "./AddTask.module.css";
import { useContext, useState } from "react";
import TodoContext from "../../context/todo-context";

export default function AddTask(props) {
  const [taskName, setTaskName] = useState("");
  const context = useContext(TodoContext);

  const handleAdd = () => {
    context.onAdd(taskName);
    setTaskName("");
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
