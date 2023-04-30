import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/action/taskActions";

import styles from "./AddTask.module.css";
import styled from "styled-components";

export default function AddTask({ className }) {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTaskName(event.target?.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (taskName !== "") {
        dispatch(createTask(taskName));
        setTaskName("");
      }
    }
  };

  return (
    <div className={`${styles.addtask__container} ${className}`}>
      <input
        value={taskName}
        className={styles.addtask__input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Add task here...'
      />
    </div>
  );
}

export const StyledAddTask = styled(AddTask)`
  input {
    background-color: ${(props) => props.theme.main.input.background};
    border-color: ${(props) => props.theme.main.input.border};
    color: ${(props) => props.theme.main.input.text};

    ::placeholder {
      color: ${(props) => props.theme.main.input.text};
    }
  }
`;
