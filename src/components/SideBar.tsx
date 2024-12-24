"use client";
import React, { JSX, useState } from "react";
import { Layout } from "antd";
import {
  UserSwitchOutlined,
  GlobalOutlined,
  LaptopOutlined,
  BorderOutlined,
  CalculatorOutlined,
  ArrowRightOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const getIconStyle = (isHovered: boolean) => ({
  fontSize: "20px",
  color: isHovered ? "#3CB9D1" : "#888888",
  transition: "all 0.9s",
  width: "25px",
  height: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const TextStyle = {
  display: "flex",
  alignItems: "center",
  padding: "12px",
  fontSize: "21px",
  fontFamily: "Gilroy-Bold",
  fontWeight: 400,
  color: "#888888",
  cursor: "pointer",
  borderRadius: "12px",
  transition: "all 0.3s ease",
  margin: "4px 8px",
  position: "relative",
};

const spanStyle = {
  fontFamily: "Gilroy-Light",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19.2px",
  color: "#888888",
  marginLeft: "10px",
  whiteSpace: "nowrap",
};

const hoverStyle = {
  backgroundColor: "#FFFFFF",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 4px 15px rgba(60, 185, 209, 0.15)",
  color: "#3CB9D1",
};

const topIcons = [
  { icon: (isHovered: boolean) => <UserSwitchOutlined style={getIconStyle(isHovered)} />, text: "Admin", onClick: () => {} },
  { icon: (isHovered: boolean) => <GlobalOutlined style={getIconStyle(isHovered)} />, text: "User Management", onClick: () => {} },
  { icon: (isHovered: boolean) => <LaptopOutlined style={getIconStyle(isHovered)} />, text: "Workflow Engine", onClick: () => {} },
  { icon: (isHovered: boolean) => <BorderOutlined style={getIconStyle(isHovered)} />, text: "Business Rule Engine", onClick: () => {} },
  { icon: (isHovered: boolean) => <CalculatorOutlined style={getIconStyle(isHovered)} />, text: "Loan Calculator", onClick: () => {} },
];

const SidebarItem: React.FC<{
  icon: (isHovered: boolean) => JSX.Element;
  text: string;
  isHovered: boolean;
  isExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
}> = ({ icon, text, isHovered, isExpanded, onMouseEnter, onMouseLeave, onClick }) => (
  <div
    style={{
      ...TextStyle,
      justifyContent: isExpanded ? "flex-start" : "center",
      ...(isHovered && hoverStyle),
      position: isHovered && !isExpanded ? "absolute" : "relative",
      left: isHovered && !isExpanded ? "-10px" : "0",
      zIndex: isHovered && !isExpanded ? 10 : "auto",
      width: isHovered && !isExpanded ? "200px" : "auto",
      height: isHovered && !isExpanded ? "50px" : "auto",

    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {icon(isHovered)}
    {(isExpanded || isHovered) && (
      <span style={{ ...spanStyle, color: isHovered ? "#3CB9D1" : "#888888" }}>{text}</span>
    )}
  </div>
);

const SideBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const bottomIcons = [
    {
      icon: (isHovered: boolean) => <ArrowRightOutlined style={getIconStyle(isHovered)} />,
      text: "Minimize",
      onClick: toggleSidebar,
    },
    {
      icon: (isHovered: boolean) => <LogoutOutlined style={getIconStyle(isHovered)} />,
      text: "Logout",
    },
  ];

  return (
    <Sider
      width={isExpanded ? 240 : 100}
      style={{
        height: "100vh",
        background: "linear-gradient(145deg, rgba(60, 185, 209, 0.15), rgba(60, 185, 209, 0.05))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 32px 0 rgba(60, 185, 209, 0.1)",
        borderRadius: "5px 24px 24px 5px",
        overflow: "visible",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
          padding: "20px 0",
        }}
      >
        {topIcons.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            isHovered={hoveredIndex === index}
            isExpanded={isExpanded}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={item.onClick}
          />
        ))}
      </div>
      <div style={{ marginTop: "150px", padding: "20px 20px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        {bottomIcons.map((item, index) => (
          <SidebarItem
            key={index + topIcons.length}
            icon={item.icon}
            text={item.text}
            isHovered={hoveredIndex === index + topIcons.length}
            isExpanded={isExpanded}
            onMouseEnter={() => handleMouseEnter(index + topIcons.length)}
            onMouseLeave={handleMouseLeave}
            onClick={item.onClick}
          />
        ))}
      </div>
    </Sider>
  );
};

export default SideBar;
