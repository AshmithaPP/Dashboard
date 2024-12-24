"use client";

import React from "react";
import { Form, Input, Button } from "antd";
import "./LoginForm.css";

const LoginForm = () => {
  const inputStyle = {
    height: "38.07px",
    width: "280px",
    padding: "7.61px",
    borderRadius: "10px",
    border: "0.76px solid #ddd",
    backgroundColor: "#FFFFFF", 
    fontSize: "14px",
    color: "#646464",
    boxShadow: "0px 0px 5px 2px rgba(138, 43, 226, 0.2)",
  };

  return (
    <div className="login-form">
      <h2 className="form-title" style={{ color: "#3CB9D1" }}>
        Login Your Account
      </h2>
      <Form
        layout="vertical"
        className="antd-login-form"
        onFinish={(values) => console.log("Form Values:", values)}
      >
<Form.Item
  label={
    <span
      style={{
        fontFamily: "Gilroy-Regular",
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "15.6px",
        display: "inline-block",
        width: "64px",
        height: "16px",
      }}
    >
      User name
    </span>
  }
  name="username"
  rules={[{ required: true, message: "Please input your username!" }]}
>
  <Input
    autoComplete="off"
    placeholder="Enter your username"
    style={inputStyle}
  />
</Form.Item>

<Form.Item
  label={
    <span
      style={{
        fontFamily: "Gilroy-Regular",
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "15.6px",
        color: "#646464",
        display: "inline-block",
        width: "57px",
        height: "16px",
      }}
    >
      Password
    </span>
  }
  name="password"
  rules={[{ required: true, message: "Please input your password!" }]}
>
  <Input.Password
    autoComplete="off"
    placeholder="Enter your password"
    style={inputStyle}
  />
</Form.Item>

<div className="forgot-password-container">
  <a
    href="#"
    className="forgot-password"
    style={{
      fontFamily: "Gilroy-Regular",
      fontWeight: 400,
      fontSize: "11px",  
      lineHeight: "13.2px",  
      color: "#646464", 
      display: "inline-block",
      width: "90px",  
      height: "13px",  
    }}
  >
    Forgot Password?
  </a>
</div>


<Form.Item
  name="captcha"
  rules={[{ required: true, message: "Please input the captcha!" }]}
>
  <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
    <Input
      autoComplete="off"
      style={{
        paddingLeft: "130px",
        ...inputStyle,
      }}
    />
    <img
      src="/images/captchaimg1.png"
      alt="Captcha"
      style={{
        position: "absolute",
        left: "110px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "100px",
        height: "20px",
            }}
    />
     <img
      src="/images/captchaimg2.png"
      alt="Captcha"
      style={{
        position: "absolute",
        right: "25px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "30px",
        height: "30px",
            }}
    />
  </div>
</Form.Item>

        <Form.Item
  label={
    <span
      style={{
        fontFamily: "Gilroy-Regular",
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "15.6px",
        color: "#646464", 
        display: "inline-block",
        width: "87px", 
        height: "16px", 
      }}
    >
      Enter captcha
    </span>
  }
  name="captcha"
  rules={[{ required: true, message: "Please input the captcha!" }]}
>
  <Input
    autoComplete="off"
    placeholder="Enter captcha here"
    style={inputStyle}

  />
</Form.Item>

<Form.Item>
  <Button
    type="primary"
    htmlType="submit"
    className="login-button"
    style={{
      width: "204.07px",  
      height: "41.88px",  
      borderRadius: "22.84px",  
      padding: "7.61px",  
      gap: "7.61px",  
      backgroundColor: "#3CB9D1", 
      color: "#fff",  
      border: "none", 
      marginTop: "15px",
      fontFamily: "Gilroy-ExtraBold",
    }}
  >
    Login
  </Button>
</Form.Item>


      </Form>
      <p className="sign-up-text" style={{ margin: 0 }}>
  <span
    style={{
      fontFamily: "Gilroy-Regular",  
      fontWeight: 400,  
      fontSize: "11px", 
      lineHeight: "13.2px",  
      display: "inline",  
      marginTop: "15px",  
    }}
  >
    Don’t have an Account?
  </span>
  <a
    href="#"
    style={{
      fontFamily: "Gilroy-Bold",  
      fontWeight: 400,  
      fontSize: "11px",  
      lineHeight: "13.62px",  
      color: "#3CB9D1", 
      textDecoration: "none",  
      marginLeft: "5px",  
      marginTop: "15px",  
    }}
  >
    Sign up
  </a>
</p>

    </div>
  );
};

export default LoginForm;
