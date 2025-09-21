import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TakeOpinionFixed from "./pages/TakeOpinion";
import DoctorListing from "./pages/DoctorListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TakeOpinionFixed />} />
        <Route path="/doctors" element={<DoctorListing />} />
      </Routes>
    </Router>
  );
}

export default App;
