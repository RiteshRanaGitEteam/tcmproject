import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark  mb-4"
      style={{ backgroundColor: "#02009C" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          TCM
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
          aria-controls="mobile-nav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle mobile nav"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="mobile-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
