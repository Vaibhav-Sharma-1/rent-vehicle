import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <form className="mb-5">
            <h3 className="login__heading">Log in</h3>

            <div className="form-group mt-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-2"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mt-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-2"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block mt-4 loginBtn"
            >
              Sign in
            </button>
          </form>
          <h3 style={{ textAlign: "center" }}>Don't Register Yet?</h3>
          <Link
            to="/signup"
            className="loginBtn btn btn-outline-primary btn-lg btn-block mt-4 w-25 d-flex justify-content-center mx-auto mt-3 "
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
