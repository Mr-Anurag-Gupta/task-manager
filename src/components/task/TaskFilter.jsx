import { useDispatch, useSelector } from "react-redux";
import classes from "./TaskFilter.module.css";

import { filterActions } from "../../redux/reducer/FilterSlice";

export default function TaskFilter() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <div className={classes.tab__container}>
      <div className={classes.tab}>
        <button
          className={classes.tab__button}
          onClick={() => dispatch(filterActions.filterAll(tasks))}>
          all
        </button>
      </div>
      <div className={classes.tab}>
        <button
          className={classes.tab__button}
          onClick={() => dispatch(filterActions.filterPending(tasks))}>
          pending
        </button>
      </div>
      <div className={classes.tab}>
        <button
          className={classes.tab__button}
          onClick={() => dispatch(filterActions.filterCompleted(tasks))}>
          completed
        </button>
      </div>
    </div>
  );
}
