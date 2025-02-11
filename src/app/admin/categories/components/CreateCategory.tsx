'use client';
import React, { useState } from 'react';
import { Button, Form, Input, Modal, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Category } from '@/utils/type';
import { useCreateCategory } from '../hooks/categoryApi';

const CreateCategory: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending } = useCreateCategory();
  // Tách logo và banner thành 2 state riêng biệt
  const [logoFile, setLogoFile] = useState<UploadFile | null>(null);
  const [bannerFile, setBannerFile] = useState<UploadFile | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleFinish = (values: Category) => {
    const userData = {
      id: values.id,
      name: values.name,
      logo: logoFile?.originFileObj || '',
      banner: bannerFile?.originFileObj || '',
    };

    // Gửi dữ liệu đến API tạo người dùng
    mutate(userData, {
      onSuccess: () => {
        form.resetFields(); // Reset form sau khi thành công
        // setLogoFile(null);
      },
    });
  };

  const handleLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setLogoFile(fileList[0] || null); // Lưu avatar file vào state
  };
  const handleBannerChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setBannerFile(fileList[0] || null); // Lưu avatar file vào state
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          {/* Trường tên */}
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>

          {/* Trường upload avatar */}
          <Form.Item label="Logo">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Ẩn danh sách các file đã tải lên
              onChange={handleLogoChange}
            >
              <Button icon={<UploadOutlined />}>Upload Logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Banner">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              showUploadList={true} // Ẩn danh sách các file đã tải lên
              onChange={handleBannerChange}
            >
              <Button icon={<UploadOutlined />}>Upload Logo</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateCategory;
