import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <div className="container-fluid nav-bg">
      <div className="row nav-top">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid px-0">
              <Link className="navbar-brand" to="/">
                Satos
              </Link>
              <div
                className="collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="activeClass"
                      to="/"
                      className="nav-link active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="activeClass"
                      to="/login"
                      className="nav-link active"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="activeClass"
                      to="/signup"
                      className="nav-link active"
                    >
                      SignUp
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
