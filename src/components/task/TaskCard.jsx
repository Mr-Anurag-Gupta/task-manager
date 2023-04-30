import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../../redux/action/taskActions";

import classes from "./TaskCard.module.css";
import styled from "styled-components";

export default function TaskCard({ className, task }) {
  const dispatch = useDispatch();

  return (
    <div className={`${classes.taskcard__container} ${className}`}>
      <div className={classes.taskcard__heading}>{task.taskName}</div>
      <div className={classes.taskcard__button_group}>
        <button
          disabled={task.completed}
          onClick={() => dispatch(updateTask(task))}
          className={classes.taskcard__button_done}>
          Done
        </button>
        <button
          onClick={() => dispatch(deleteTask(task))}
          className={classes.taskcard__button_remove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export const StyledTaskCard = styled(TaskCard)`
  background-color: ${(props) => props.theme.main.card.background};
  border-color: ${(props) => props.theme.main.card.border};
  color: ${(props) => props.theme.main.card.text};
  button {
    background-color: ${(props) => props.theme.main.card.button.background};
    border-color: ${(props) => props.theme.main.card.button.border};
    color: ${(props) => props.theme.main.card.button.text};
  }
  button:hover {
    background-color: ${(props) =>
      props.theme.main.card.button.hover.background};
    border-color: ${(props) => props.theme.main.card.button.hover.border};
    color: ${(props) => props.theme.main.card.button.hover.text};
  }
  button:disabled {
    background-color: ${(props) =>
      props.theme.main.card.button.disabled.background};
    color: ${(props) => props.theme.main.card.button.disabled.text};
  }
`;
