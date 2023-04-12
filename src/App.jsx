import { useContext } from "react";
import AddTask from "./components/task/AddTask";
import TaskList from "./components/task/TaskList";
import Navbar from "./ui/navbar/Navbar";
import Login from "./ui/auth/Login";

import styled from "styled-components";
import "./App.css";
import AuthContext from "./context/auth-context";
import TaskFilter from "./components/task/TaskFilter";

const Div = styled.div`
  margin: 10px;
`;

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Div>
        {isLoggedIn ? (
          <div>
            <AddTask />
            <TaskFilter />
            <TaskList />
          </div>
        ) : (
          <Login />
        )}
      </Div>
    </>
  );
}

export default App;
