import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import "./signup.scss"

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
            <h3 className="register__heading">Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <label>Mobile </label>
              <input
                type="number"
                className="form-control"
                placeholder="+91-XXXXXXXXXX"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
            <label className="gender__label">Gender:</label>
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
            <button type="submit" className="register__color btn btn-primary btn-lg btn-block mt-4">
              Register
            </button>
            <h4 className="forgot-password text-right text-center">
              Already registered? <Link className="login__link" to="/login" >Log in</Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
