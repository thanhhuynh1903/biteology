"use client";

import type React from "react";
import { Layout, Menu, Button, Dropdown, Badge, Space } from "antd";
import { LoginOutlined, DownOutlined } from "@ant-design/icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Link from "antd/es/typography/Link";
const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      key: "home",
      label: "Home",
      route: "",
    },
    {
      key: "join",
      label: "Join a Trial",
      route: "payment",
    },

    {
      key: "unify",
      label: (
        <Space>
          Unify Platform
          <Badge
            count="NEW"
            style={{
              backgroundColor: "#ff6b00",
              fontSize: "10px",
              padding: "0 4px",
              height: "16px",
              lineHeight: "16px",
              borderRadius: "2px",
            }}
          />
        </Space>
      ),
      route: "medical",
    },
    {
      key: "about",
      label: "About HealthMatch",
    },
  ];

  return (
    <Header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="logo-container">
        <span className="logo-text">
          <Link href="/" className="logo-text">
            Biteology
          </Link>
        </span>
      </div>

      <Menu
        mode="horizontal"
        items={menuItems}
        className="menu"
        selectedKeys={[]}
        onClick={({ key }) => {
          const item = menuItems.find((m) => m.key === key);
          navigate(item?.route === "" ? "/" : `/${item?.route}`);
        }}
      />

      <Dropdown
        menu={{
          items: [
            { key: "1", label: "Profile" },
            { key: "2", label: "Logout" },
          ],
        }}
        placement="bottomRight"
      >
        <Button type="primary" className="login-button">
          <LoginOutlined />
          <span>Login</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
