'use client';

import { Typography } from 'antd';
import Login from '@/components/login';

const { Title } = Typography;

const LoginPage = () => {
  return (
    <div className="container">
      <div className="max-w-lg mx-auto p-4 mt-10 rounded-xl shadow bg-white">
        <div className="flex flex-col items-center">
          <Title level={3}>Đăng nhập người dùng</Title>
        </div>
        <Login onSubmit={console.log} />
      </div>
    </div>
  );
};

export default LoginPage;
