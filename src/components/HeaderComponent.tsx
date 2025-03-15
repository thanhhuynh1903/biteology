import type React from "react"
import { useState, useEffect } from "react"
import { Layout, Menu, Button, Dropdown, Badge, Space } from "antd"
import { LoginOutlined, DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"
import "./Header.css"
import biteologo  from "../assets/logo.png";

const { Header } = Layout


const HeaderComponent: React.FC<any> = ({ }) => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      route: "medical"
    },
    {
      key: "about",
      label: "About HealthMatch",
    },
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItems.find((m) => m.key === key)
    navigate(item?.route === "" ? "/" : `/${item?.route}`);  
    setMobileMenuOpen(false)
  }

  return (
    <Header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="logo-container">
        <div
          style={{
            width: 28,
            height: 28,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
          }}
        >
          <img
            src={biteologo}
            alt="Biteology Logo"
            className="logo-image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Link to="/" className="logo-text">
          Biteology
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>

      {/* Desktop Menu */}
      <Menu mode="horizontal" items={menuItems} className="menu" selectedKeys={[]} onClick={handleMenuClick} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Menu mode="vertical" items={menuItems} onClick={handleMenuClick} />
        </div>
      )}

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
  )
}

export default HeaderComponent

