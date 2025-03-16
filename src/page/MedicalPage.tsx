import MedicalUpload from "../components/MedicalUpload";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/Footer";
import { Spin } from "antd";
import { useState,useEffect } from "react";
import "./LandingPage.css";

export default function MedicalPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }
  
  return (
    <>
      <HeaderComponent />
      <div>
      <MedicalUpload />
      </div>
      <FooterComponent />
    </>
  );
}
