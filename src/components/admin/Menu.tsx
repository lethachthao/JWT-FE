import {
  ProductOutlined,
  UploadOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';

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
            icon: <UserSwitchOutlined />,
            label: <Link href="/admin/users">Quản lí users</Link>,
          },
          {
            key: '2',
            icon: <ProductOutlined />,
            label: <Link href="/admin/products">Quản lí Product</Link>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link href="/admin/categories">Quản lí Category</Link>,
          },
          {
            key: '4',
            icon: <UploadOutlined />,
            label: <Link href="/admin/banners">Quản lí Banner</Link>,
          },
        ]}
      />
    </div>
  );
};

export default MenuPage;
