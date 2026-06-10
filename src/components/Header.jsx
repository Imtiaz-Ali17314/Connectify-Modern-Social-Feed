import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/ThemeContext";
import { AuthContext } from "../store/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div>
      <header
        className="w-100 d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3 px-4 border-bottom shadow-sm"
        style={{ width: "100%", backgroundColor: theme === "dark" ? "#1e1e1e" : "#f8f9fa", color: theme === "dark" ? "white" : "black" }}
      >
        <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
          <Link
            to="/"
            className={`d-inline-flex link-body-emphasis text-decoration-none fs-4 fw-bold ${theme === "dark" ? "text-white" : "text-dark"}`}
          >
            <span className="text-primary me-2">🌐</span> Connectify
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-none d-md-flex">
          <li>
            <Link to="/" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "text-dark"}`}>
              Feed
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "text-dark"}`}>
              About Project
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end d-flex align-items-center justify-content-end gap-3">
          <button 
            onClick={toggleTheme} 
            className={`btn btn-sm ${theme === "dark" ? "btn-light" : "btn-dark"} rounded-circle p-2 d-flex align-items-center`}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          
          {isAuthenticated ? (
            <Link to="/profile" className="btn btn-outline-primary rounded-pill px-4">Profile</Link>
          ) : (
            <Link to="/login" className="btn btn-primary rounded-pill px-4">Login</Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
