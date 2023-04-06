import TodoReducer from "../reducer/TodoReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const TodoStore = createStore(TodoReducer, {}, applyMiddleware(thunk));

export default TodoStore;
