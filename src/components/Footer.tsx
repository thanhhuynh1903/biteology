import React from 'react';
import { Layout, Row, Col, Typography, Divider, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, HeartOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent: React.FC = () => {
  return (
    <Footer
      style={{
        backgroundColor: '#F5F5F5', // Light gray background
        padding: '40px 20px',
        display: 'flex',           // Sử dụng flexbox
        justifyContent: 'center',  // Căn giữa theo chiều ngang
        flexDirection: 'column',   // Xếp các phần tử theo cột
      }}
    >
      <Row gutter={[32, 32]} justify="center"> {/* Căn giữa các cột */}
        {/* Branding Section */}
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  backgroundColor: '#52C41A', // Green background for logo
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <HeartOutlined style={{ color: '#FFFFFF', fontSize: 24 }} />
              </div>
              <Title level={4} style={{ margin: 0, color: '#333333' }}>
                B!teology
              </Title>
            </div>
            <Text style={{ color: '#666666' }}>Healthy Bites - Healthy Life</Text>
            <Text style={{ color: '#333333' }}>
              Giải pháp quản lý sức khỏe toàn diện dành cho mọi người.
            </Text>
          </Space>
        </Col>

        {/* Services Section */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: '#333333' }}>
            Dịch vụ
          </Title>
          <Space direction="vertical">
            <Link style={{ color: '#333333' }}>Theo dõi sức khỏe</Link>
            <Link style={{ color: '#333333' }}>Tư vấn dinh dưỡng</Link>
            <Link style={{ color: '#333333' }}>Thu viện kiểm thúc</Link>
          </Space>
        </Col>

        {/* Links Section */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: '#333333' }}>
            Liên kết
          </Title>
          <Space direction="vertical">
            <Link style={{ color: '#333333' }}>Trang chủ</Link>
            <Link style={{ color: '#333333' }}>Gói Premium</Link>
            <Link style={{ color: '#333333' }}>Tài khoản</Link>
          </Space>
        </Col>

        {/* Social Media Section */}
        <Col xs={24} sm={12} md={4}>
          <Title level={5} style={{ color: '#333333' }}>
            Kết nối
          </Title>
          <Space size="large">
            <FacebookOutlined style={{ fontSize: 24, color: '#333333' }} />
            <TwitterOutlined style={{ fontSize: 24, color: '#333333' }} />
            <InstagramOutlined style={{ fontSize: 24, color: '#333333' }} />
          </Space>
        </Col>
      </Row>

      {/* Copyright Notice */}
      <Divider style={{ margin: '24px 0', borderColor: '#CCCCCC' }} />
      <Text style={{ textAlign: 'center', display: 'block', color: '#999999' }}>
        © 2024 B!teology. All rights reserved.
      </Text>
    </Footer>
  );
};

export default FooterComponent;