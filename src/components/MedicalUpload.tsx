import type React from "react"
import { Row, Col, Card, Progress, Upload, Button, Input, Typography, Space } from "antd"
import { CloudUploadOutlined, CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"

const { Dragger } = Upload
const { TextArea } = Input
const { Title, Text } = Typography

const MedicalUpload: React.FC = () => {
  const statusCards = [
    {
      title: "Tumor Detection",
      progress: 50,
      description: "SLAID believes this might a 85% BAD from a 25% BAD Test",
      status: "success",
    },
    {
      title: "BigchainDB",
      progress: 50,
      description: "Please wait until we get a BigchainDB node or connect to an existing BigchainDB network.",
      status: "active",
    },
    {
      title: "Self Diagnose",
      progress: 100,
      description:
        "As soon as possible, we are working intensely to develop the most advanced AI for disease diagnosis",
      status: "success",
    },
  ]

  const uploadProps: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://your-upload-endpoint.com/upload",
    onChange(info) {
      if (info.file.status === "done") {
        console.log(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === "error") {
        console.log(`${info.file.name} file upload failed.`)
      }
    },
  }

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
            <Card bodyStyle={{ padding: 16 }}>
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

      {/* Upload Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={5}>Scan Image</Title>
        <Dragger
          {...uploadProps}
          style={{
            marginTop: 16,
            height: 280, // Increased height
          }}
        >
          <p className="ant-upload-drag-icon" style={{ marginTop: 40 }}>
            <CloudUploadOutlined style={{ fontSize: 48 }} />
          </p>
          <p className="ant-upload-text">Upload MRI Images</p>
          <p style={{ marginBottom: 40 }}></p>
        </Dragger>
        <Button
          type="primary"
          block
          size="large"
          style={{
            marginTop: 16,
            backgroundColor: "#000",
            height: 48,
          }}
        >
          Scan Images
        </Button>
      </div>

      {/* Chat Section */}
      <div style={{ marginTop: 24 }}>
        <Title level={5}>Ask Pavise</Title>
        <Space.Compact style={{ width: "100%", marginTop: 16 }}>
          <TextArea
            placeholder="Ask to Pavise..."
            autoSize={false}
            style={{ height: 180 }} // Fixed height instead of autoSize
          />
          <Button
            type="primary"
            style={{ height: 180 }} // Match the height of TextArea
          >
            Send
          </Button>
        </Space.Compact>
      </div>
    </div>
    </div>
  )
}

export default MedicalUpload

