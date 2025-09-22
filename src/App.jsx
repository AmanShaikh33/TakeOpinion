import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TakeOpinionFixed from "./pages/TakeOpinion";
import DoctorListing from "./pages/DoctorListing";
import TreatmentOptions from "./pages/TreatmentOptions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TakeOpinionFixed />} />
        <Route path="/doctors" element={<DoctorListing />} />
        <Route path="/treatments" element={<TreatmentOptions />} />
      </Routes>
    </Router>
  );
}

export default App;
