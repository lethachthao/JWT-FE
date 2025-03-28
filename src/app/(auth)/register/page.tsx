'use client';

import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Radio, Typography, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useSignup } from './hooks/useRegister';
import { User } from '@/utils/type';

const { Title } = Typography;

const Signup = () => {
  const { mutate: signup } = useSignup();
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);

  // Lấy file ảnh từ Upload
  const handleLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setImageFile(fileList[0] || null);
  };

  // Gửi dữ liệu đăng ký
  const onFinish = (values: User) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);

    // Kiểm tra nếu có file avatar thì thêm vào FormData
    if (imageFile?.originFileObj) {
      formData.append('avatar', imageFile.originFileObj as Blob, imageFile.name);
    }

    // Gửi FormData thay vì object JSON
    signup(formData, {
      onSuccess: () => {

      },
    });
  };


  return (
    <div className="container">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Title level={3}>Đăng kí tài khoản</Title>
        </div>
        <Form
          name="signup"
          onFinish={onFinish}
          autoComplete="on"
          layout="vertical"
        >
          {/* Upload Avatar */}
          <Form.Item label="Ảnh đại diện">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Hiển thị danh sách file tải lên
              onChange={handleLogoChange}
            >
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>

          {/* Các trường nhập thông tin */}
          <Form.Item label="Tên bệnh nhân" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên bệnh nhân!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Vui lòng nhập email bệnh nhân!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block className="bg-blue-500">
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
