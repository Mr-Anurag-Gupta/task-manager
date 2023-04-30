import { StyledAddTask } from "./AddTask";
import TaskFilter from "./TaskFilter";
import { StyledTaskList } from "./TaskList";

import classes from "./TaskDashboard.module.css";
import styled from "styled-components";

export default function TaskDashboard({ className }) {
  return (
    <div className={`${classes.taskdashboard__container} ${className}`}>
      <StyledAddTask />
      <TaskFilter />
      <StyledTaskList />
    </div>
  );
}

export const StyledTaskDashboard = styled(TaskDashboard)`
  padding-top: 70px;
  background-color: ${(props) => props.theme.main.background};
`;
