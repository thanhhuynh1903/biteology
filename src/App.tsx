import type React from "react";
import LandingPage from "./page/LandingPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PricingPlans from "./page/PricingPlans";
import MedicalPage from "./page/MedicalPage";
import ComingSoonPage from "./page/ComingSoonPage";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/payment" element={<PricingPlans />} />
      <Route path="/medical" element={<MedicalPage   />} />
      <Route path="/undefined" element={<ComingSoonPage   />} />
    </Routes>
  );
};

export default App;
