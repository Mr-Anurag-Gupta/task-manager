import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TaskStore from "./redux/store/TaskStore";
import { Provider } from "react-redux";
import { AuthContextProvider } from "./context/auth-context";
import { ThemeContextProvider } from "./context/theme-context";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={TaskStore}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
