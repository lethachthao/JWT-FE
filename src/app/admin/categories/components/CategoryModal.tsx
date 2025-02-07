import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { Category } from '@/utils/type';

interface IProps {
  isOpen: boolean;
  onCancel: () => void;
  onFinish: (values: Category) => void;
  initialValues: Category | { name: string; description: string };
}

const CategoryModal: React.FC<IProps> = ({
  isOpen,
  onCancel,
  onFinish,
  initialValues,
}) => {
  return (
    <Modal
      title="Edit Category"
      open={isOpen}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        name="categoryForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        initialValues={initialValues} // Hiển thị giá trị ban đầu
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please input the category name!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
