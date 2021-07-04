import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [gender, setGender] = React.useState("Select Gender");
  const [open, setOpen] = React.useState(false);
console.log(gender)
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <form>
            <h3 style={{ textAlign: "center" }}>Register</h3>

            <div className="form-group mt-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group mt-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Mobile </label>
              <input
                type="number"
                className="form-control"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mt-3">
            <label>Gender</label>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={gender}
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block mt-4">
              Register
            </button>
            <h4 className="forgot-password text-right text-center">
              Already registered? <Link to="/login" >Log in</Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
