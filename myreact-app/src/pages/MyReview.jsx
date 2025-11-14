import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const MyReview = () => {
  const navigate = useNavigate();

  const editHandler = () => {
    navigate("/edit-review");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">My reviews</h3>
        <div className="review-container">
          <div className="review-box">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <h6 className="movie-title">Titanic</h6>
              <p className="rating">9/10</p>
            </div>
            <p className="reviewer-name">Reviewd by: John Doe</p>
            <p className="review">
              An emotionally charged masterpiece. Beautiful cinematography!
            </p>
            <p className="last-updated">Last Updated: 2023:05:15 </p>
            <div className="actions">
              <button onClick={editHandler} className="btn btn-primary">
                Edit
              </button>
              <button className="btn btn-success mx-2">Share</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
          <div className="review-box">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <h6 className="movie-title">Titanic</h6>
              <p className="rating">9/10</p>
            </div>
            <p className="reviewer-name">Reviewd by: John Doe</p>
            <p className="review">
              An emotionally charged masterpiece. Beautiful cinematography!
            </p>
            <p className="last-updated">Last Updated: 2023:05:15 </p>
            <div className="actions">
              <button
                type="button"
                onClick={editHandler}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button className="btn btn-success mx-2">Share</button>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
