import type React from "react";
import { useState } from "react";
import { Typography, Card, Switch, Button, List } from "antd";
import { CheckCircleFilled, AppstoreOutlined } from "@ant-design/icons";
import FooterComponent from "../components/Footer";
import "./PricingPlans.css";
import HeaderComponent from "../components/HeaderComponent";
const { Title, Text, Paragraph } = Typography;

interface PricingPlan {
  icon: React.ReactNode;
  title: string;
  label: string;
  description: string;
  monthlyPrice: number;
  features: string[];
  action: {
    text: string;
    type: "" | "default";
  };
}

export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      icon: <AppstoreOutlined />,
      title: "Free",
      label: "Started Plan",
      description: "Start with the basics and experience LostBag at no cost.",
      monthlyPrice: 0,
      features: [
        "Essential event management tools",
        "Basic analytics & reporting",
        "Up to 3 events per month",
        "Community Support",
      ],
      action: {
        text: "Select Plan",
        type: "default",
      },
    },
    {
      icon: <AppstoreOutlined />,
      title: "Seedling",
      label: "Popular Plan",
      description:
        "Unlock advanced tools and premium support for seamless event management.",
      monthlyPrice: 299,
      features: [
        "Unlimited events",
        "AI-powered insights & recommendations",
        "Advanced budget tracking",
        "Priority support",
        "Team collaboration tools",
      ],
      action: {
        text: "Select Plan",
        type: "primary",
      },
    },
    {
      icon: <AppstoreOutlined />,
      title: "Enterprise",
      label: "Company Plan",
      description:
        "For teams that need custom solutions and dedicated support. Contact us for more info.",
      monthlyPrice: 500,
      features: [
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security & compliance",
        "API access for automation",
        "VIP onboarding & training",
      ],
      action: {
        text: "Contact Us",
        type: "default",
      },
    },
  ];

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
          <div className="billing-toggle">
            <Text>Billed monthly</Text>
            <Switch
              checked={isAnnual}
              onChange={setIsAnnual}
              className="billing-switch"
            />
            <Text>Billed annually</Text>
            <Text className="save-tag">Save 10%</Text>
          </div>
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
                  $
                  {isAnnual
                    ? (plan.monthlyPrice * 0.9).toFixed(0)
                    : plan.monthlyPrice}
                </Text>
                <Text className="price-period">/ month</Text>
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
                <Text strong>{plan.title} plan includes;</Text>
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
      </div>
      <div className="bg-footer">
        <FooterComponent />
      </div>
    </div>
  );
}
