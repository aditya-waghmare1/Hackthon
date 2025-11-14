import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllReviews from "./pages/AllReviews";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-reviews" element={<AllReviews />} />
      </Routes>
    </div>
  );
};

export default App;
