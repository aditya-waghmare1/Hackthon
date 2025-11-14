import React from "react";
import Navbar from "../components/Navbar";

const DeleteReview = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="delete-container">
          <h3>Delete Review</h3>
          <p>
            Review for: <i>Titanic</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteReview;
