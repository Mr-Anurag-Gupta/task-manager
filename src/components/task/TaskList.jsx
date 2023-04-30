import { memo } from "react";
import { useSelector } from "react-redux";
import { StyledTaskCard } from "./TaskCard";
import styled from "styled-components";
import classes from "./TaskList.module.css";

const TaskList = memo(({ className }) => {
  const tasks = useSelector((state) => state.filter.filteredTasks || undefined);
  const isLoading = useSelector((state) => state.task.isLoading);

  const tasksList = tasks?.map((task) => {
    return <StyledTaskCard key={task.taskId} task={task} />;
  });

  return (
    <div className={`${classes.tasklist__wrapper}  ${className}`}>
      <div className={`${classes.tasklist__container}`}>
        {isLoading === true || tasks === undefined ? (
          <div className={classes.tasklist__message}>Loading...</div>
        ) : tasks && tasks.length === 0 ? (
          <div className={classes.tasklist__message}>
            No tasks found. Start adding some!
          </div>
        ) : (
          tasksList
        )}
      </div>
    </div>
  );
});

export const StyledTaskList = styled(TaskList)`
  color: ${(props) => props.theme.body.text};
`;

export default TaskList;
