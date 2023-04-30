import { useState, createContext, useEffect, useContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: (evt) => {},
  onLogout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (userIsLoggedIn == "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (evt, errors) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
