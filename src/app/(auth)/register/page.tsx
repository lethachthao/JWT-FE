'use client';

import React from 'react';
import { Button, DatePicker, Form, Input, Radio, Typography } from 'antd';
const { Title } = Typography;

const Signup = () => {
  return (
    <div className="">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Title level={3}>Đăng kí tài khoản</Title>
        </div>
        <Form
          name="signup"
          onFinish={console.log}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Tên bệnh nhân"
            name="name"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa chỉ bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại bệnh nhân!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
          >
            <Radio.Group>
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
              <Radio value="lgbt">Khác</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-200"
            >
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
