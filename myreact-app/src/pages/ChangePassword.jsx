import React from "react";
import Navbar from "../components/Navbar";

const ChangePassword = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          <h3 className="mt-3">Change Password</h3>
          <form action="">
            <div>
              <label htmlFor="">Current password</label>
              <input className="form-control" type="password" />
            </div>
            <div>
              <label htmlFor="">New password</label>
              <input className="form-control" type="password" />
            </div>
            <div>
              <label htmlFor="">Confirm new password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn btn-primary mt-3">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
