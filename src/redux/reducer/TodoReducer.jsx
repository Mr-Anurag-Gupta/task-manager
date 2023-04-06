import { nanoid } from "nanoid";
import TaskActionType from "../action/types/TaskActionType";

let initialState = {
  tasks: [
    {
      keyName: "SomeKeyName",
      taskId: nanoid(),
      taskName: "A new task from redux store.",
      completed: false,
    },
  ],
  isLoading: false,
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TaskActionType.FETCH:
      console.log("Performing FETCH in Reducer!");
      const { tasks } = action.payload;
      return {
        tasks: tasks,
        isLoading: false,
      };
    case TaskActionType.CREATE:
      console.log("Performing CREATE in Reducer!");
      return {
        ...state,
        tasks: state.tasks?.concat(action.payload),
      };
    case TaskActionType.UPDATE:
      console.log("Performing UPDATE in Reducer!");
      const { task } = action.payload;
      let updatedTasks = state.tasks?.map((t) => {
        if (t.taskId !== task.taskId) return t;
        t.completed = task.completed;
        return t;
      });
      return { ...state, tasks: updatedTasks };
    case TaskActionType.DELETE:
      console.log("Performing DELETE in Reducer!");
      const { taskId } = action.payload;
      return {
        ...state,
        tasks: state.tasks?.filter((t) => t.taskId !== taskId),
      };
    default:
      return state;
  }
};

export default TodoReducer;
