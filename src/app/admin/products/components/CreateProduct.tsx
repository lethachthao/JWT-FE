'use client';
import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Category, Product } from '@/utils/type';
import { useCreateProduct } from '../hooks/useProducts';
import { useCategories } from '../../categories/hooks/categoryApi';

const CreateProduct: React.FC = () => {
  const { mutate, isPending } = useCreateProduct();
  const { data: categories } = useCategories();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Tách logo và banner thành 2 state riêng biệt
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleFinish = (values: Product) => {
    const userData = {
      id: values.id,
      name: values.name,
      price: values.price,
      description: values.description,
      category_id: values.category_id,
      image: imageFile?.originFileObj || '',
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
    setImageFile(fileList[0] || null); // Lưu avatar file vào state
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
          <Form.Item
            name="price"
            label="Giá sản phẩm"
            rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[
              { required: true, message: 'Vui lòng nhập mô tả sản phẩm!' },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="category_id"
            label="Danh mục"
            rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
          >
            <Select placeholder="Chọn danh mục">
              {categories?.map((category: Category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Trường upload avatar */}
          <Form.Item label="Image">
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

export default CreateProduct;



