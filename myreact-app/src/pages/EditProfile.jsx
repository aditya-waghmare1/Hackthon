import React from "react";
import Navbar from "../components/Navbar";

const EditProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="mt-2">Edit profile</h3>
        <form action="">
          <div
            className="mt-3"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div>
              <label htmlFor="">First Name</label>
              <input className="form-control" type="text" />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="">Email address</label>
            <input className="form-control" type="email" />
          </div>
          <div className="mt-3">
            <label htmlFor="">Mobile number</label>
            <input className="form-control" type="email" />
          </div>
          <div className="mt-3">
            <label htmlFor="">Date of birth</label>
            <input className="form-control" type="date" />
          </div>
          <button className="btn btn-primary mt-3">Save changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
