'use client';

import { Button, Image, Input, Select, Space } from 'antd';

const HeaderPage = () => {
  const options = [
    {
      value: 'product',
      label: 'Sản phẩm',
    },
    {
      value: 'article',
      label: 'Bài viết',
    },
  ];
  return (
    <div className="h-24 flex items-center gap-10 justify-center px-32 bg-[#f1f1f1]">
      <Image
        src="https://herogame.vn/upload/images/full/1912024131056_7117565aa1270d7bb84.10759429_logo%20Herogame.png"
        alt="Herogame Logo"
        style={{ maxWidth: '100px', height: '100px' }} // Bạn có thể thêm CSS để điều chỉnh kích thước hình ảnh
      />

      <Space.Compact className="flex items-center h-5 flex-1">
        <Select defaultValue="Sản phẩm" options={options} className="h-10" />
        <Input placeholder="Nhập từ khóa cần tìm kiếm..." className="h-10 " />
      </Space.Compact>
      <Button className="bg-[#005ac6] text-white p-5">Đăng nhập</Button>
    </div>
  );
};

export default HeaderPage;
