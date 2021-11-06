import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Heading() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Fedex Bank" width="200px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/benefits">
                Benefits
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/accounts">
                Accounts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                Who we are
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/help">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/faqs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/onlinebanking">
                    Online Banking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mobilebanking">
                    Mobile Banking
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="ms-auto">
            <Link to="/login" className="login_btn">
              Log in
            </Link>
            <Link to="/register" className="btn register_btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Heading;
