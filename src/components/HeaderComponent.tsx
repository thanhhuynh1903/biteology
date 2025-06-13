import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Badge, Drawer } from "antd";
import {
  LoginOutlined,
  DownOutlined,
  MenuOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import biteologo from "../assets/logo.png";
import "./Header.css";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const caCode = "XXXXXXXXXXXXXXXXXXXXXXXX";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Danh sách menu
  const menuItems = [
    { key: "home", label: "Home", route: "" },
    { key: "join", label: "Join a Trial", route: "payment" },
    {
      key: "unify",
      label: (
        <>
          Unify Platform{" "}
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
        </>
      ),
      route: "medical",
    },
    { key: "health", label: "Health Library", route: "food" },
  ];

  // Xử lý khi click menu item
  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItems.find((m) => m.key === key);
    if (item?.route !== undefined) {
      navigate(item.route === "" ? "/" : `/${item.route}`);
    }
    setMobileMenuOpen(false);
  };

  // Copy CA code
  const handleCopy = () => {
    navigator.clipboard
      .writeText(caCode)
      .then(() => {
        toast.success("Copied successfully!");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  return (
    <Header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      {/* Logo + Tên */}
      <div className="logo-container" onClick={() => navigate("/")}>
        <div style={{ width: 30, height: 30, display: "flex" }}>
          <img
            src={biteologo}
            alt="Biteology Logo"
            className="logo-image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p className="logo-text">Biteology</p>
      </div>

      {/* Nút mở Drawer (hamburger) cho mobile */}
      <Button
        className="mobile-menu-button"
        type="text"
        icon={<MenuOutlined style={{ fontSize: 22 }} />}
        onClick={() => setMobileMenuOpen(true)}
      />

      {/* Menu cho desktop */}
      <Menu
        mode="horizontal"
        items={menuItems}
        className="menu desktop-menu"
        selectedKeys={[]}
        onClick={handleMenuClick}
      />

      {/* Nút Copy CA + Connect Wallet chỉ hiện ở desktop */}
      <div className="desktop-buttons">
        {/* <Button
          type="primary"
          style={{ marginRight: 8, borderRadius: 20 }}
          onClick={handleCopy}
        >
          <span>
            <strong>CA : </strong>
            {caCode}
          </span>
          <CopyOutlined />
        </Button> */}

        <Button type="primary" className="login-button">
          <LoginOutlined />
          <span>Connect Wallet</span>
          <DownOutlined />
        </Button>
      </div>

      {/* Drawer chứa menu + 2 nút trên mobile */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <Menu mode="vertical" items={menuItems} onClick={handleMenuClick} />

        <div style={{ marginTop: 16 }}>
          <Button
            type="primary"
            style={{ marginBottom: 8, borderRadius: 20, width: "100%" }}
            onClick={handleCopy}
          >
            <span>
              <strong>CA : </strong>
              {caCode}
            </span>
            <CopyOutlined />
          </Button>

          <Button
            type="primary"
            className="login-button"
            style={{ width: "100%", borderRadius: 20 }}
          >
            <LoginOutlined />
            <span style={{ marginLeft: 8 }}>Connect Wallet</span>
            <DownOutlined />
          </Button>
        </div>
      </Drawer>

      <ToastContainer autoClose={400} />
    </Header>
  );
};

export default HeaderComponent;
