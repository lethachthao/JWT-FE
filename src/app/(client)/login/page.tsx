'use client';

import { useLogin } from '@/components/auth/hooks/useAuth';
import { Button, Form, Input, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [form] = Form.useForm();
  const loginMutation = useLogin();
  const route = useRouter();

  const handleSubmit = (values: { email: string; password: string }) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        route.push('/admin/products');
      },
      onError: () => {
        message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!');
      },
    });
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="max-w-lg w-full p-6 rounded-xl shadow bg-white">
        <h2 className="text-center text-2xl font-semibold mb-6">Đăng nhập</h2>
        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          autoComplete="on"
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Vui lòng nhập email của bạn!' },
              { type: 'email', message: 'Email không hợp lệ!' },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item className="text-center">
            <span>Bạn chưa có tài khoản? </span>
            <Link href="/signup" className="text-blue-500 hover:underline">
              Đăng ký ngay
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500 hover:bg-blue-600 w-full"
              loading={loginMutation.isPending}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
