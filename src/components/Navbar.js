import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbox">
      <div className="leftside">
        <img src={logo} alt="logo" />
      </div>

      <div className="rightside">
        <Link to="/signup" className="navlinks">
          SIGN UP
        </Link>

        <Link to="/login" className="navlinks">
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
