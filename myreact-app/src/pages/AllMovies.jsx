import React from "react";
import Navbar from "../components/Navbar";
import "../css/allMovies.css";

const AllMovies = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h3 className="mt-3">All Movies</h3>
        <div className="movie-container">
          <div className="movie my-3">
            <h4>Avatar</h4>
            <p>
              <b>Release Date: </b>2009-02-21
            </p>
            <button className="btn btn-primary">Review this movie</button>
          </div>
          <div className="movie my-3">
            <h4>Avatar</h4>
            <p>
              <b>Release Date: </b>2009-02-21
            </p>
            <button className="btn btn-primary">Review this movie</button>
          </div>
          <div className="movie my-3">
            <h4>Avatar</h4>
            <p>
              <b>Release Date: </b>2009-02-21
            </p>
            <button className="btn btn-primary">Review this movie</button>
          </div>
          <div className="movie my-3">
            <h4>Avatar</h4>
            <p>
              <b>Release Date: </b>2009-02-21
            </p>
            <button className="btn btn-primary">Review this movie</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
