import type React from "react";
import { Button, Typography } from "antd";
import "./HeroSection.css";

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Title className="hero-title">
          We Care for Your Health
          <br />
          Every Moment
        </Title>
        <Paragraph className="hero-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Button type="primary" size="large" className="get-started-btn">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
