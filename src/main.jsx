import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";
import "./index.css";
import TaskStore from "./redux/store/TaskStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={TaskStore}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
