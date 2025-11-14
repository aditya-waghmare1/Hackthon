import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <ul>
          <h3>Movie Reviews</h3>
          <li>
            <Link to={"/all-movies"}>All Movies</Link>{" "}
          </li>
          <li>
            <Link to={"/my-review"}>My Reviews</Link>{" "}
          </li>
          <li>
            <Link>Reviews Shared with me</Link>{" "}
          </li>
          <li>
            <Link to={"/all-reviews"}>All reviews</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to={"/edit-profile"}>Edit profile</Link>
          </li>
          <li>
            <Link to={"/change-password"}>Change Password</Link>{" "}
          </li>
          <li className="logout">
            <Link to={"/"}>Logout</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
