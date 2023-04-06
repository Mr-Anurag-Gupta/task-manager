import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";
import "./index.css";
import TodoStore from "./redux/store/TodoStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={TodoStore}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
