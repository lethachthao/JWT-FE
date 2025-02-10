'use client';
import React, { useState } from 'react';
import { Button, Form, Input, Modal, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCreateBanner } from '../hooks/bannerApi';

const CreateBanner: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarFile, setAvatarFile] = useState<UploadFile | null>(null);
  const { mutate, isPending } = useCreateBanner();

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setAvatarFile(fileList[0] || null); // Lưu avatar file vào state
  };

  const handleFinish = (values: { id: string; title: string }) => {
    const userData = {
      id: values.id,
      title: values.title,
      image: avatarFile?.originFileObj || '',
    };

    // Gửi dữ liệu đến API tạo người dùng
    mutate(userData, {
      onSuccess: () => {
        form.resetFields(); // Reset form sau khi thành công
        setAvatarFile(null);
      },
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
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
          onFinish={handleFinish}
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {/* Trường tên */}
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input your Title!' }]}
          >
            <Input />
          </Form.Item>

          {/* Trường upload avatar */}
          <Form.Item label="Banner">
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false} // Chặn tự động tải lên
              onChange={handleUploadChange}
              showUploadList={true} // Ẩn danh sách các file đã tải lên
            >
              <Button icon={<UploadOutlined />}>Upload Avatar</Button>
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

export default CreateBanner;
