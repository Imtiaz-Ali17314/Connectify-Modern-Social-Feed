import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../store/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer 
      className={`footer w-100 py-3 mt-auto border-top shadow-sm ${theme === "dark" ? "text-white" : "text-dark"}`}
      style={{ backgroundColor: theme === "dark" ? "#1e1e1e" : "#f8f9fa" }}
    >
      {/* <ul className={`nav justify-content-center border-bottom pb-3 mb-3 ${theme === "dark" ? "border-secondary" : "border-gray"}`}>
        <li className="nav-item">
          <Link to="/" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "text-muted"}`}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className={`nav-link px-2 ${theme === "dark" ? "text-white" : "text-muted"}`}>
            About
          </Link>
        </li>
      </ul> */}
      <p className={`text-center mb-0 ${theme === "dark" ? "text-white-50" : "text-muted"}`}>
        © {new Date().getFullYear()} Connectify, Inc
      </p>
    </footer>
  );
};

export default Footer;
