import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
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

// ✅ YEH SAHI ROUTER CONFIGURATION HAI
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,  // Default route
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",  // Relative path (absolute nahi)
        element: <ProtectedRoute><PostList /></ProtectedRoute>
      },
      {
        path: "create-post",  // Relative path
        element: <ProtectedRoute><CreatePost /></ProtectedRoute>,
      },
      {
        path: "about",  // Relative path
        element: <About />
      },
      {
        path: "profile",  // Relative path
        element: <ProtectedRoute><Profile /></ProtectedRoute>
      },
      {
        path: "login",  // Relative path
        element: <Login />
      },
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