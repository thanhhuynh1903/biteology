import type React from "react"
import { Row, Col, Card, Progress,Typography, Space } from "antd"
import {  CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons"
import FoodUpload from "./FoodUpload";


const {  Text } = Typography

const MedicalUpload: React.FC = () => {
  const statusCards = [
    {
      title: "Nutrient Tracking 📊",
      progress: 50,
      description: "🥦 Monitor your meals and track calories, macronutrients, and vitamins with AI-powered insights",
      status: "success",
    },
    {
      title: "Personalized Meal Plans 🍽️",
      progress: 50,
      description: "🔹 Tailored meal recommendations based on your health goals, dietary preferences, and nutritional needs.",
      status: "active",
    },
    {
      title: "AI Health Alerts ⚠️",
      progress: 100,
      description:
        "🚀 Get real-time warnings about potential nutritional imbalances and optimize your diet proactively.",
      status: "success",
    },
  ]

  return (
    <div style={{ width: "100%", overflow: "auto", padding: 20 }}>
      <div
        style={{
          padding: "24px",
          width: "70%",
          alignItems: "center",
          margin: "0 auto",
          gap: "20",
          display: "block",
        }}
      >
        {/* Status Cards */}
        <Row gutter={[16, 16]}>
          {statusCards.map((card, index) => (
            <Col xs={24} md={8} key={index}>
              <Card bodyStyle={{ padding: 16, height: "180px", minHeight: "100%", maxHeight: "100%" }}>
                <Space direction="vertical" style={{ width: "100%" }} size={12}>
                  <Space align="center" style={{ width: "100%", justifyContent: "space-between" }}>
                    <Text strong>{card.title}</Text>
                    {card.status === "success" ? (
                      <CheckCircleOutlined style={{ color: "#52c41a" }} />
                    ) : (
                      <LoadingOutlined style={{ color: "#1890ff" }} />
                    )}
                  </Space>
                  <Progress percent={card.progress} status={card.status as "success" | "active"} />
                  <Text type="secondary" style={{ fontSize: 14 }}>
                    {card.description}
                  </Text>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: 24 }}>
          <FoodUpload />
        </div>

      </div>
    </div>
  )
}

export default MedicalUpload

