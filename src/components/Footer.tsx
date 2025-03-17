import React from 'react';
import { Layout, Row, Col, Typography, Divider, Space } from 'antd';
import { FacebookOutlined, XOutlined,InstagramOutlined,BookOutlined  } from '@ant-design/icons';
import Biteology from "../assets/logo.png";
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate } from 'react-router-dom';
const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Footer
      style={{
        backgroundColor: '#F5F5F5', 
        padding: '40px 20px',
        display: 'flex',           
        justifyContent: 'center',
        flexDirection: 'column',  
      }}
    >
      <Row gutter={[32, 32]} justify="center"> 
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
                  width: 30,
                  height: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}
              >
                <img src={Biteology} alt="Biteology Logo" className="logo-image" style={{ width: '100%', height: '100%' }}/>
              </div>
              <Title level={4} style={{ margin: 0, color: '#333333' }}>
                Biteology
              </Title>
            </div>
            <Text style={{ color: '#666666' }}>Healthy Bites - Healthy Life</Text>
            <Text style={{ color: '#333333' }}>
            Comprehensive health management solutions for everyone.
            </Text>
          </Space>
        </Col>

        {/* Services Section */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: '#333333' }}>
            Services
          </Title>
          <Space direction="vertical">
            <Link style={{ color: '#333333' }}>Health Tracking</Link>
            <Link style={{ color: '#333333' }}>Nutritional Counseling</Link>
            <Link style={{ color: '#333333' }}>Library control</Link>
          </Space>
        </Col>

        {/* Links Section */}
        <Col xs={24} sm={12} md={5}>
          <Title level={5} style={{ color: '#333333' }}>
            Linked
          </Title>
          <Space direction="vertical">
            <Link style={{ color: '#333333' }}>Home</Link>
            <Link style={{ color: '#333333' }}>Premium Package</Link>
            <Link style={{ color: '#333333' }}>Account</Link>
          </Space>
        </Col>

        {/* Social Media Section */}
        <Col xs={24} sm={12} md={4}>
          <Title level={5} style={{ color: '#333333' }}>
            Social
          </Title>
          <Space size="large">
            <FacebookOutlined style={{ fontSize: 24, color: '#333333' }}  onClick={() => navigate('/undefined')}/>
            <XOutlined style={{ fontSize: 23, color: '#333333' }}  onClick={() => window.open('https://x.com/BiteologyHealth')}/>
            <InstagramOutlined style={{ fontSize: 24, color: '#333333' }}  onClick={() => window.open('https://www.instagram.com/biteology_health')}/>
            <TelegramIcon onClick={() => window.open('https://t.me/biteology_health')} style={{cursor:"pointer"}}/>
            <BookOutlined style={{ fontSize: 24, color: '#333333' }}  onClick={() => window.open('https://biteologys-team.gitbook.io/biteology-docs')}/>
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