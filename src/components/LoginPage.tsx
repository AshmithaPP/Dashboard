"use client";

import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="login-container">
      <div className="content-container">
        <div className="inside-container">
          <div className="left-side">
            <img src="/images/Group 427320687.png" alt="Group" />
          </div>
          <div className="right-side">
            {/* Top bar with logo and language selector */}
            <div className="top-bar">
              <img
                src="/images/logo-final-transparent 1.png"
                alt="Logo"
                className="logo"
              />
              <button className="language-selector" >ENG ▼</button>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;