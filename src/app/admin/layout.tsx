'use client';
import MenuPage from '@/components/admin/Menu';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, message, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Link from 'next/link';
import { useState } from 'react';
import Cookies from 'js-cookie'; // Cài đặt: npm install js-cookie

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleLogout = () => {
    // Xóa token trong LocalStorage
    localStorage.removeItem('token');

    // Xóa cookie token & role
    Cookies.remove('token');
    Cookies.remove('role');

    // Thông báo đăng xuất
    message.success('Bạn đã đăng xuất!');

    // Chuyển hướng về trang login
    window.location.href = '/login'; // Đảm bảo load lại trang
  };


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <MenuPage />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} className='flex justify-between'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Link href="/login" passHref>
            <Button
              type="primary"
              danger
              onClick={handleLogout} // Hàm đăng xuất
              style={{ marginRight: 16 }}
            >
              Đăng xuất
            </Button>
          </Link>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
