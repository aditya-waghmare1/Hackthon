import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllReviews from "./pages/AllReviews";
import MyReview from "./pages/MyReview";
import AllMovies from "./pages/AllMovies";
import EditReview from "./pages/EditReview";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import CreateReview from "./pages/CreateReview";
import DeleteReview from "./pages/DeleteReview";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-reviews" element={<AllReviews />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/all-movies" element={<AllMovies />} />
        <Route path="/edit-review" element={<EditReview />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/delete-review" element={<DeleteReview />} />
      </Routes>
    </div>
  );
};

export default App;
