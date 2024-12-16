import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

const MenuPage = () => {
  return (
    <div className="pt-5">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            span: 'User Manager',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            span: 'Product',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            span: 'nav 3',
          },
        ]}
      />
    </div>
  );
};

export default MenuPage;
