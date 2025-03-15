import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import PricingPlans from "./page/PricingPlans";
import MedicalPage from "./page/MedicalPage";
import ComingSoonPage from "./page/ComingSoonPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/payment" element={<PricingPlans />} />
      <Route path="/medical" element={<MedicalPage />} />
      <Route path="/undefined" element={<ComingSoonPage />} />
      {/* Default route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
