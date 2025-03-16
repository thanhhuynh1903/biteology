import { useState, useEffect } from "react";
import { ConfigProvider, Spin } from "antd";
import HeaderComponent from "../components/HeaderComponent";
import HowItWork from "../components/HowItWork";
import FeaturedResources from "../components/FeaturedResources";
import ResourceSection from "../components/ResourceSection";
import FooterComponent from "../components/Footer";
import HeroSection from "../components/HeroSection";
import "./LandingPage.css";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4CAF50",
        },
      }}
    >
      <div>
        <HeaderComponent />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#7ac142",
            },
          }}
        >
          <div>
            <HeroSection />
          </div>
        </ConfigProvider>
        <div>
          <HowItWork />
        </div>
        <div className="feature-bg">
          <FeaturedResources />
        </div>
        <div>
          <ResourceSection />
        </div>
        <div>
          <FooterComponent />
        </div>
      </div>
    </ConfigProvider>
  );
}
