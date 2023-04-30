import { useContext, useEffect } from "react";
import { StyledNavbar } from "./ui/navbar/Navbar";
import { StyledLogin } from "./ui/auth/Login";
import { StyledTaskDashboard } from "./components/task/TaskDashboard";
import AuthContext from "./context/auth-context";
import { useDispatch } from "react-redux";
import { getAllTasks } from "./redux/action/taskActions";

import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import ThemeContext from "./context/theme-context";

const AppContainer = styled.div`
  height: 100%;
  margin: auto;
  background-color: ${(props) => props.theme.body.background};
`;

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  });

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <StyledNavbar />
        {isLoggedIn ? <StyledTaskDashboard /> : <StyledLogin />}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
