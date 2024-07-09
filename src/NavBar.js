import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="ccntr">
        <div className="navlogoimg">
          <img src="images/logo.png" style={{ width: "6rem" }} />
        </div>

        <ul>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            {" "}
            <li> Home</li>
          </Link>
          <Link to="/course" style={{textDecoration:"none", color:"black"}}>
            {" "}
            <li> New Courses</li>
          </Link>
          <li>My Batches</li>
          <li>Sign out</li>
        </ul>
      </div>
    </>
  );
};
