import type React from "react";
import { Button, Typography } from "antd";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
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
          We're on a mission to accelerate medical breakthroughs by making
          clinical trials more accessible to everyone. Through our platform,
          we're bridging the gap between innovative research and the people who
          need it most.
        </Paragraph>
        <Button type="primary" size="large" className="get-started-btn" onClick={() => navigate("/food")}>
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
};

export default HeroSection;
