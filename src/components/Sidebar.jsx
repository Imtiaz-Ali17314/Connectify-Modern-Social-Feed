import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../store/ThemeContext";

export default function Sidebar() {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    if (theme === "dark") {
      return `nav-link text-white ${isActive ? "active bg-primary" : ""}`;
    }
    return `nav-link ${isActive ? "active text-white bg-primary" : "text-dark"}`;
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 shadow-sm border-end"
      style={{
        width: "240px",
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#f8f9fa",
        height: "100vh",
        position: "sticky",
        top: 0
      }}
    >
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <span className={`fs-5 fw-bold ${theme === "dark" ? "text-white" : "text-dark"}`}>Menu</span>
      </div>
      <hr style={{ borderColor: theme === "dark" ? "gray" : "#dee2e6" }} />

      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <Link to="/" className={getLinkClass("/")} aria-current="page">
            🏠 Home Feed
          </Link>
        </li>
        <li>
          <Link to="/create-post" className={getLinkClass("/create-post")}>
            ✍️ Create Post
          </Link>
        </li>
        <li>
          <Link to="/profile" className={getLinkClass("/profile")}>
            👤 Profile
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClass("/about")}>
            ℹ️ About App
          </Link>
        </li>
      </ul>

      <hr style={{ borderColor: theme === "dark" ? "gray" : "#dee2e6" }} />

      <div className="dropdown mt-auto">
        <Link
          to="/profile"
          className={`d-flex align-items-center text-decoration-none ${theme === "dark" ? "text-white" : "text-dark"}`}
        >
          <img
            src="./images/demo-user.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Demo User</strong>
        </Link>
      </div>
    </div>
  );
}
