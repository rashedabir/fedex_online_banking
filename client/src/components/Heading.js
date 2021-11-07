import axios from "axios";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import GlobalState from "../GlobalState";

function Heading() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;

  const logOut = async () => {
    await axios.get("https://fedex-bank.herokuapp.com/user/logout");
    setIsAdmin(false);
    setIsLogged(false);
    window.location.href = "/";
  };

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
          </ul>
          <div className="ms-auto d-flex align-items-center">
            {isAdmin ? (
              <NavLink className="nav-link" to="/customers">
                Lists
              </NavLink>
            ) : null}
            {isLogged ? (
              <button className="btn btn-outline-danger" onClick={logOut}>
                Log out
              </button>
            ) : (
              <>
                <Link to="/login" className="login_btn">
                  Log in
                </Link>
                <Link to="/register" className="btn register_btn">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Heading;
