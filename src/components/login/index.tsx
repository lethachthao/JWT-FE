import { Button, Form, Input } from 'antd';
import Link from 'next/link';

interface LoginProps {
  onSubmit: (values: string) => void; // Định nghĩa kiểu dữ liệu cho onSubmit
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  return (
    <Form name="login" onFinish={onSubmit} autoComplete="on" layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
      >
        <Input placeholder="Nhập email" />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
      >
        <Input.Password placeholder="Nhập mật khẩu" />
      </Form.Item>

      <Form.Item>
        <span>Bạn chưa có tài khoản? </span>
        <Link href="/signup" className="text-blue-200">
          Đăng kí tài khoản
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="bg-blue-200" block>
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
