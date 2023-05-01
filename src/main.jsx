import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskStore from "./redux/store/TaskStore";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/auth-context";
import { ThemeProvider } from "./context/theme-context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={TaskStore}>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
