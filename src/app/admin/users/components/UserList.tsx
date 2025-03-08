'use client';

import { Button, Form, Image, Input, Modal, Table, Upload } from 'antd';
import { useDeleteUser, useUpdateUser, useUsers } from '../hooks/userApi';
import { UploadOutlined } from '@ant-design/icons';
import { User } from '@/utils/type';
import { useEffect, useState } from 'react';
import { UploadFile } from 'antd/es/upload';

const UserList = () => {
  const { data: users, isLoading, error } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [form] = Form.useForm();
  const [avatarFile, setAvatarFile] = useState<UploadFile | null>(null);
  const { mutate } = useUpdateUser(); // Hook cập nhật người dùng
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue({
        name: selectedUser.name,
        email: selectedUser.email,
      });
    }
  }, [selectedUser, form]);

  // Xử lý khi chọn file upload
  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setAvatarFile(fileList[0] || null);
  };

  // Mở modal cập nhật và lưu user được chọn
  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Đóng modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setAvatarFile(null);
    form.resetFields();
  };

  // Xử lý cập nhật user
  const handleUpdate = (values: { name: string; email: string }) => {
    if (!selectedUser) return;

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (avatarFile?.originFileObj) {
      formData.append('avatar', avatarFile.originFileObj);
    }

    // Chuyển id thành string nếu cần
    const userId = String(selectedUser.id); // Chuyển id sang kiểu string

    mutate({
      id: userId,
      user: { name: values.name, email: values.email },
      avatar: avatarFile?.originFileObj || null,
    });
  };

  // Xử lý xóa category
  const handleDelete = async (id: string) => {
    await deleteUser(id); // Thực hiện xóa category
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar: string) => (
        <Image
          src={`http://127.0.0.1:8000/storage/${avatar}`}
          alt="Avatar"
          style={{ width: 50, height: 50, borderRadius: '50%' }}
        />
      ),
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: User) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button
            onClick={() => handleDelete(record.id)}
            loading={isDeleting}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <Table dataSource={users} columns={columns} scroll={{ y: 600 }}/>

      {/* Modal Update User */}
      <Modal
        title="Update User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        okText="Update"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          {/* Avatar Preview */}
          {selectedUser?.avatar && (
            <Image
              src={`http://127.0.0.1:8000/storage/${selectedUser.avatar}`}
              alt="Avatar"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                marginBottom: 10,
              }}
            />
          )}

          {/* Upload Avatar */}
          <Form.Item label="Upload Avatar">
            <Upload
              beforeUpload={() => false} // Không tự động upload ngay
              onChange={handleFileChange}
              showUploadList={true}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserList;
