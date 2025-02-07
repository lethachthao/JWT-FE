import React from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import { useCreateCategory } from '@/utils/categoryApi';
import { Category } from '@/utils/type';
import { useQueryClient } from '@tanstack/react-query';

interface IProp {
  isOpen: boolean;
  onCancel: () => void;
}

type FieldType = {
  name?: string;
  description?: string;
};

const FormCategory: React.FC<IProp> = ({ isOpen, onCancel }) => {
  const { mutate, isPending } = useCreateCategory();
  const queryClient = useQueryClient();

  const onFinish = (values: FieldType) => {
    mutate(values as Category, {
      onSuccess: data => {
        notification.success({
          message: 'Category Created',
          description: `Category "${data.name}" has been created successfully.`,
        });

        queryClient.invalidateQueries({ queryKey: ['categories'] });
      },
      onError: error => {
        notification.error({
          message: 'Error',
          description: error.message,
        });
      },
    });
  };

  return (
    <Modal title="Add Category" open={isOpen} onCancel={onCancel} footer={null}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[
            { required: true, message: 'Please input your description!' },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Create Category
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormCategory;
