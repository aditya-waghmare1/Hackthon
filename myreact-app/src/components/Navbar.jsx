import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <ul>
          <li>All Movies</li>
          <li>My Reviews</li>
          <li>Reviews Shared with me</li>
          <li>All reviews</li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>Edit profile</li>
          <li>Change Password</li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
