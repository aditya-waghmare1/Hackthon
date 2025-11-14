import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="main">
      <div className="container signin">
        <h1 className="mb-3 mt-2">Sign in</h1>
        <form>
          <label htmlFor="email">Email address</label>
          <input
            className="form-control mt-2"
            type="email"
            placeholder="Enter email address"
          />
          <label className="mt-2" htmlFor="password">
            Password
          </label>
          <input
            className="form-control mt-2"
            type="password"
            placeholder="Enter password"
          />
        </form>
        <button className="btn btn-primary mt-3 w-100">Sign in</button>
        <p className="mt-3">
          Don't have an account?{" "}
          <span>
            <Link to={"/signup"}>Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
