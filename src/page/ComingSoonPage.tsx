"use client"

import type React from "react"
import { useState } from "react"
import { Typography, Form, Input, Button, Row, Col, Space, Divider, Statistic, message } from "antd"
import { MailOutlined, TwitterOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography
const { Countdown } = Statistic

const ComingSoonPage: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  // Set launch date to 30 days from now
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 30

  const onFinish = (values: { email: string }) => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      message.success(`Thank you! We'll notify ${values.email} when we launch.`)
      form.resetFields()
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="coming-soon-container">
      <Row justify="center" align="middle" className="coming-soon-content">
        <Col xs={22} sm={20} md={16} lg={12} xl={10}>
          <div className="logo-container">
            <Title level={3} className="brand-name">
              YourBrand
            </Title>
          </div>

          <div className="main-content">
            <Title className="main-title">Coming Soon</Title>
            <Paragraph className="description">
              We're working hard to bring you something amazing. Our website is under construction, but we're almost
              ready to launch. Stay tuned!
            </Paragraph>

            <div className="countdown-container">
              <Countdown title="Launching In" value={deadline} format="D [days] H [hours] m [minutes] s [seconds]" />
            </div>

            <Divider />

            <div className="subscribe-container">
              <Title level={4}>Get Notified When We Launch</Title>
              <Form form={form} name="subscribe" onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Your email address" size="large" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block loading={loading}>
                    Notify Me
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <Divider />

            <div className="social-container">
              <Title level={5}>Follow Us</Title>
              <Space size="large">
                <Button type="text" icon={<TwitterOutlined />} size="large" />
                <Button type="text" icon={<FacebookOutlined />} size="large" />
                <Button type="text" icon={<InstagramOutlined />} size="large" />
                <Button type="text" icon={<LinkedinOutlined />} size="large" />
              </Space>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ComingSoonPage

