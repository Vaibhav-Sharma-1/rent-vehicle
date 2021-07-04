import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <form className="mb-5">
            <h3 style={{ textAlign: "center" }}>Log in</h3>

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
              className="btn btn-primary btn-lg btn-block mt-4"
            >
              Sign in
            </button>
          </form>
          <h3 style={{ textAlign: "center" }}>Dont't Register Yet?</h3>
          <Link
            to="/signup"
            className="btn btn-outline-primary btn-lg btn-block mt-4 w-25 d-flex justify-content-center mx-auto mt-3 "
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
