import type React from "react"
import { Row, Col, Card, Typography } from "antd"
import { QuestionCircleOutlined, BookOutlined, FileOutlined, EditOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

// Define the props interface for the ResourceCard component
interface ResourceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

// ResourceCard component
const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description }) => {
  return (
    <Card
      style={{
        width: "250px",
        minWidth:"100%",
        height: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
      }}
      bodyStyle={{ padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            backgroundColor: "#4CAF50", // Purple background for the icon
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            color: "#FFFFFF",
            fontSize: 32,
          }}
        >
          {icon}
        </div>
      </div>
      <Title level={1} style={{ marginBottom: 8, textAlign: "center", fontSize: "20px" }}>
        {title}
      </Title>
      <Text style={{ margin: "auto 0", display: "block", fontSize: "16px" }}>{description}</Text>
    </Card>
  )
}

// ResourceSection component
const ResourceSection: React.FC = () => {
  // Define the resources data
  const resources: ResourceCardProps[] = [
    {
      icon: <QuestionCircleOutlined />,
      title: "FAQs",
      description: "Find answers to common questions about clinical trials, participation process, and what to expect.",
    },
    {
      icon: <BookOutlined />,
      title: "Medication Directory",
      description:
        "Explore our comprehensive database of medications, including detailed information about treatments and clinical trials.",
    },
    {
      icon: <FileOutlined />,
      title: "Condition Guides",
      description:
        "In-depth resources about various health conditions, symptoms, treatments, and ongoing research developments.",
    },
    {
      icon: <EditOutlined />,
      title: "Blog",
      description:
        "Stay updated with the latest insights, research news, and patient stories from our clinical trial community.",
    },
  ]

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        Explore Our Resources
      </Title>
      <Text
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: 32,
          color: "#666", // Slightly gray for subtitle
        }}
      >
        Comprehensive guides and information to help you make informed decisions.
      </Text>
      <Row gutter={[16, 16]} justify="space-between">
        {resources.map((resource, index) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={5} key={index}>
            <ResourceCard {...resource} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ResourceSection

