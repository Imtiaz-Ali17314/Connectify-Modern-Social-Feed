import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white w-100">
        <ul className="nav justify-content-center border-bottom border-gray pb-1 ">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>
        <p className="text-center m-0">© 2025 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
