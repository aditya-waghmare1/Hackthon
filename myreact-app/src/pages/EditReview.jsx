import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const EditReview = () => {
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate("/my-review");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">
          Edit review for "<i>Titanic</i>"
        </h3>
        <form className="mt-3">
          <div>
            <label htmlFor="">Rating 1 - 10</label>
            <input className="form-control" type="number" />
          </div>
          <div>
            <label htmlFor="">Your review</label>
            <textarea
              className="form-control"
              name=""
              id=""
              rows={5}
            ></textarea>
          </div>
          <div className="buttons mt-3">
            <button className="btn btn-primary">Update Review</button>
            <button onClick={cancelHandler} className="btn btn-secondary m-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
