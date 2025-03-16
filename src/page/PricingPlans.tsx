import type React from "react";
import { useState, useEffect } from "react";
import { Typography, Card, Button, List } from "antd";
import { CheckCircleFilled, AppstoreOutlined } from "@ant-design/icons";
import FooterComponent from "../components/Footer";
import { Spin } from "antd";
import "./PricingPlans.css";
import HeaderComponent from "../components/HeaderComponent";
const { Title, Text, Paragraph } = Typography;

interface PricingPlan {
  tier: string;
  icon: React.ReactNode;
  title: string;
  label: string;
  description: string;
  monthlyPrice: number;
  features: string[];
  action: {
    text: string;
    type: "" | "default" | "primary";
  };
}

export default function PricingPlans() {
  // const [isAnnual, setIsAnnual] = useState(false);
  const [loading, setLoading] = useState(true);

  const plans: PricingPlan[] = [
    {
      tier: "Tier 1",
      icon: <AppstoreOutlined />,
      title: "Basic",
      label: "Started Plan",
      description: "Start with the basics and experience LostBag at no cost.",
      monthlyPrice: 2000,
      features: [
        "Full access to basic features for 30 days",
        "Basic analytics & reporting",
        "Email Support",
        "Limited to 10 nutrition consultations",
      ],
      action: {
        text: "Select Plan",
        type: "default",
      },
    },
    {
      tier: "Tier 2",
      icon: <AppstoreOutlined />,
      title: "Standard",
      label: "Popular Plan",
      description:
        "Unlock advanced tools and premium support for seamless event management.",
      monthlyPrice: 3500,
      features: [
        "Full feature access for 90 days",
        "AI-powered insights & recommendations",
        "Email and phone support",
        "Limited to 30 nutrition consultations",
        "Export health report",
      ],
      action: {
        text: "Select Plan",
        type: "primary",
      },
    },
    {
      tier: "Tier 3",
      icon: <AppstoreOutlined />,
      title: "High-class",
      label: "Company Plan",
      description:
        "For teams that need custom solutions and dedicated support. Contact us for more info.",
      monthlyPrice: 5000,
      features: [
        "Full feature access for 150 days",
        "24/7 Priority Support",
        "Unlimited nutrition advice",
        "Export health report",
        "Consult directly with experts",
      ],
      action: {
        text: "Select Plan",
        type: "default",
      },
    },
  ];
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 100); // Adjust the delay as needed
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>

      <div className="pricing-section">
        <div className="pricing-header">
          <Title level={1}>
            Flexible pricing plans
            <br />
            for every need
          </Title>
          <Paragraph className="subtitle">
            Find the perfect plan—whether you're starting out or
            <br />
            scaling up with advanced tools and premium support.
          </Paragraph>
          {/* <div className="billing-toggle">
            <Text>Billed monthly</Text>
            <Switch
              checked={isAnnual}
              onChange={setIsAnnual}
              className="billing-switch"
            />
            <Text>Billed annually</Text>
            <Text className="save-tag">Save 10%</Text>
          </div> */}
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <Card key={index} className="pricing-card">
              <div className="plan-icon">{plan.icon}</div>
              <Title level={3} className="plan-title">
                {plan.title}
              </Title>
              <Text className="plan-label">{plan.label}</Text>
              <Paragraph className="plan-description">
                {plan.description}
              </Paragraph>

              <div className="price-container">
                <Text className="price-amount">
                  {Intl.NumberFormat().format(plan.monthlyPrice)}
                </Text>
                <Text className="price-period">/ $BTO</Text>
              </div>

              <Text className="cancel-text">Pause and cancel anytime.</Text>

              <Button
                type={plan.action.type || "default"}
                block
                size="large"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#5fb763",
                  color: "#5fb763",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => (
                  (e.currentTarget.style.backgroundColor = "#52c41a"),
                  (e.currentTarget.style.color = "#FFFFFF")
                )}
                onMouseLeave={(e) => (
                  (e.currentTarget.style.backgroundColor = "#FFFFFF"),
                  (e.currentTarget.style.color = "#5fb763")
                )}
              >
                {plan.action.text}
              </Button>

              <div className="features-section">
                <Text strong>{plan.tier} plan includes : </Text>
                <List
                  itemLayout="horizontal"
                  dataSource={plan.features}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<CheckCircleFilled className="feature-check" />}
                        title={item}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Card>
          ))}
        </div>
        {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button type="primary" size="large" className="get-started-button">
            Connect Wallet
          </Button>
        </div> */}
      </div>
      <div className="bg-footer">
        <FooterComponent />
      </div>
    </div>
  );
}
