import React, { useState, useEffect } from "react";
import Navbar from '../Navbar';
import { Form, Input, Button, Checkbox } from 'antd';
import {failLoginNotification, successLoginNotification} from '../../Notificationpage';
import '../../style/login.scss';

 const Login = () => {
  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    try {
      if (username === 'admin@shibabook.com' && password === '123456aA'){
       successLoginNotification()
       window.location.href="/home"
      } else {
        failLoginNotification();
      }
    } 
    catch (error)
    {
      console.log('error' , error)
    }
  };

  return  (

    <div className='login-page-container'>
    <Navbar />
      <div className='login-content'>
        <div className='login-logo-content'>
        <img src="img/logo.svg" alt="logo" style={{width:'60%'}}/>
      </div>
        <div className="login-input-content">
        <div className="login-box">
          <div className="name-shop-text">Shiba Book Shop</div>
          <div className="login-text">Login</div>
      <div className="input-form-container">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input 
                 type="text"
                 onChange={(e) => {setUsername(String(e.target.value))}}
                placeholder='Username'
              />
            </Form.Item>

            <Form.Item
              name="password"
              placeholder="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password 
                 type="text"
                 onChange={(e) => {setPassword(String(e.target.value))}}
                 placeholder='Password'
              />
            </Form.Item>

           <Form.Item  name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> 

            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </div></div> 
        </div>
      </div>
    </div>)
}
 

export default Login;