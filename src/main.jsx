import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import Login from "./routes/Login.jsx";
import About from "./routes/About.jsx";
import Profile from "./routes/Profile.jsx";
import NotFound from "./routes/NotFound.jsx";
import AuthProvider, { AuthContext } from "./store/AuthContext.jsx";
import ThemeProvider from "./store/ThemeContext.jsx";

const ProtectedRoute = ({ children }) => {
  return (
    <AuthContext.Consumer>
      {({ isAuthenticated }) => (isAuthenticated ? children : <Navigate to="/home" />)}
    </AuthContext.Consumer>
  );
};

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/home", element: <ProtectedRoute><PostList /></ProtectedRoute> },
      {
        path: "/create-post",
        element: <ProtectedRoute><CreatePost /></ProtectedRoute>,
      },
      { path: "/about", element: <About /> },
      { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
