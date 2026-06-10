import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("connectify_auth") === "true";
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("connectify_auth", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("connectify_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
