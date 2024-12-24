
import React from "react";
import { Layout } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Avatar, Badge } from "antd";
import './NavbarDashboard.css';

const NavbarDashboard = () => {
  return (
    <Layout>
      <Header 
        className="navbar-header"
        style={{
          background: "#DBF1FF",
          borderBottom: "1px solid #E1E1E1", 
        }}
      >
        {/* Logo Section */}
        <div className="logo-container">
          <img
            className="logo"
            src="/images/logo-final-transparent 1.png"
            alt="Logo"
          />
        </div>

        {/* User and Notification Section */}
        <div className="user-section">
          <Badge
            dot
            className="notification-badge"
          >
            <BellOutlined className="bell-icon" />
          </Badge>
          <span className="username">Sanjay</span>
          <Avatar
            size="small"
            src="/images/profileimg1.png"
            className="avatar"
          />
        </div>
      </Header>
    </Layout>
  );
};

export default NavbarDashboard;