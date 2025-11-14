import { Link } from "react-router-dom";
import "../css/signin.css";

const Signup = () => {
  return (
    <div className="container">
      <h1>Sign up</h1>
      <form>
        <div style={{ display: "flex", gap: 10 }}>
          <div>
            <label htmlFor="">First Name</label>
            <input className="form-control" type="text" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div>
          <label htmlFor="">Email address</label>
          <input className="form-control" type="email" />
        </div>
        <div>
          <label htmlFor="">Mobile Number</label>
          <input className="form-control" type="number" />
        </div>
        <div>
          <label htmlFor="">Date of birth</label>
          <input className="form-control" type="date" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input className="form-control" type="password" />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input className="form-control" type="password" />
        </div>
        <button className="btn btn-success w-100 mt-3">Sign up</button>
        <p>
          Already have an account?{" "}
          <span>
            <Link to={"/"}>Sign in</Link>{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
