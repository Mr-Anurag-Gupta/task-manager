import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../redux/reducer/FilterSlice";
import classes from "./TaskFilter.module.css";
import Button from "../../ui/button/Button";
import styled from "styled-components";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "all":
      return {
        ...state,
        isAllActive: true,
        isPendingActive: false,
        isCompletedActive: false,
      };
    case "pending":
      return {
        ...state,
        isAllActive: false,
        isPendingActive: true,
        isCompletedActive: false,
      };
    case "completed":
      return {
        ...state,
        isAllActive: false,
        isPendingActive: false,
        isCompletedActive: true,
      };
  }
};

export default function TaskFilter({ className }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    isAllActive: true,
    isPendingActive: false,
    isCompletedActive: false,
  });
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    const type = event.target?.value;
    filterDispatch({ type });

    switch (type) {
      case "all":
        dispatch(filterActions.filterAll(tasks));
        break;
      case "pending":
        dispatch(filterActions.filterPending(tasks));
        break;
      case "completed":
        dispatch(filterActions.filterCompleted(tasks));
        break;
    }
  };

  return (
    <div className={`${classes.tab__container} ${className}`}>
      <div className={classes.tab}>
        <StyledButton
          extraClasses={`${classes.tab__button} ${
            filterState.isAllActive ? classes.tab__active : ""
          }`}
          onClick={handleClick}
          value='all'>
          All
        </StyledButton>
      </div>
      <div className={classes.tab}>
        <StyledButton
          extraClasses={`${classes.tab__button} ${
            filterState.isPendingActive ? classes.tab__active : ""
          }`}
          onClick={handleClick}
          value='pending'>
          Pending
        </StyledButton>
      </div>
      <div className={classes.tab}>
        <StyledButton
          extraClasses={`${classes.tab__button} ${
            filterState.isCompletedActive ? classes.tab__active : ""
          }`}
          onClick={handleClick}
          value='completed'>
          Completed
        </StyledButton>
      </div>
    </div>
  );
}

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.main.filter.button.background};
  color: ${(props) => props.theme.main.filter.button.text};
  &:hover {
    background-color: ${(props) =>
      props.theme.main.filter.button.hover.background};
    border-color: ${(props) => props.theme.main.filter.button.hover.border};
    color: ${(props) => props.theme.main.filter.button.hover.text};
  }
`;
