import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload, UploadFile } from 'antd';
import { useState } from 'react';
import { useCreateUser } from '../hooks/userApi';
import { RcFile } from 'antd/es/upload';
import { User } from '@/utils/type';

interface UserFormProps {
  isOpen: boolean;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ isOpen, onCancel }) => {
  const [form] = Form.useForm();
  const [avatarFile, setAvatarFile] = useState<UploadFile | null>(null);
  const { mutate, isPending } = useCreateUser(); // Hook tạo người dùng

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setAvatarFile(fileList[0] || null); // Lưu avatar file vào state
  };

  const handleFinish = (values: User) => {
    const userData = {
      id: values.id,
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
      avatar: avatarFile ? (avatarFile.originFileObj as RcFile) : null,
    };

    // Gửi dữ liệu đến API tạo người dùng
    mutate(userData, {
      onSuccess: () => {
        form.resetFields(); // Reset form sau khi thành công
        setAvatarFile(null);
      },
      onError: () => {
        // Xử lý khi có lỗi (có thể thêm hành động khác nếu cần, như hiển thị thông báo)
      },
    });
  };

  const handleCancel = () => {
    onCancel(); // Đóng modal
    setAvatarFile(null); // Reset avatarFile khi đóng modal
  };

  return (
    <Modal
      title="Tạo người dùng mới"
      open={isOpen}
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
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        {/* Trường email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* Trường upload avatar */}
        <Form.Item label="Avatar">
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

        {/* Nút submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
