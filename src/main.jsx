import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";
import { TodoContextProvider } from "./context/todo-context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
