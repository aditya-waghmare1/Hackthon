import React from "react";
import "../css/allReviews.css";

const AllReviews = () => {
  return (
    <div className="container">
      <h1>All reviews</h1>
      <div className="review-container">
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <h6 className="movie-title">Titanic</h6>
          <p className="rating">9/10</p>
        </div>
        <p className="reviewer-name">Reviewd by: John Doe</p>
        <p className="review">
          An emotionally charged masterpiece. Beautiful cinematography!
        </p>
        <p className="last-updated">Last Updated: 2023:05:15 </p>
      </div>
    </div>
  );
};

export default AllReviews;
