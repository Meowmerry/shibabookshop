import React from 'react'
import { notification } from 'antd'
import { FrownOutlined,SmileOutlined } from '@ant-design/icons';
const successLoginNotification = (message) => {
  notification.open({
    message: 'Login successful',
    description:'Welcome to Shiba Book Shop',
    icon: <SmileOutlined type="smile" style={{ color: '#54b600'  }} />,
  });
};


const failLoginNotification = (message) => {
  notification.open({
    message: 'Login fail',
    description: "Plese check your username and password",
    icon:  <FrownOutlined type="frown"  style={{ color: '#dc4d4d' }} />,
  });
};

const failNotification = (message) => {
  notification.open({
    message: message.title,
    description: message.desc,
    icon:  <FrownOutlined type="frown"  style={{ color: '#dc4d4d' }} />,
  });
};

const failDataNotification = (message) => {
  notification.open({
    message: message.title,
    description: message.desc,
    icon: <FrownOutlined  style={{ color: '#dc4d4d' }} />,
  });
};

export { failLoginNotification, successLoginNotification,failNotification,failDataNotification }
