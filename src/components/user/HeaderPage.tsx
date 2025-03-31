'use client';

import { cartitemsCountSelector } from '@/app/(client)/Cart/selectors';
import { ICCart } from '@/icon/ICCart';
import { Button, Image, Input, Select, Space } from 'antd';
import { useRouter } from 'next/navigation'; // App Router
import { useSelector } from 'react-redux';

const HeaderPage = () => {
  const router = useRouter();
  const cartItemsCount = useSelector(cartitemsCountSelector);

  const handleOpenCart = () => {
    router.push('/Cart'); // Chuyển hướng đến trang /cart
  };

  const options = [
    {
      value: 'product',
      span: 'Sản phẩm',
    },
    {
      value: 'article',
      span: 'Bài viết',
    },
  ];
  return (
    <div className="h-24 flex items-center gap-10 justify-center px-32">
      <Image
        src="https://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png"
        alt="Herogame Logo"
        style={{ maxWidth: '400px', height: '100px' }} // Bạn có thể thêm CSS để điều chỉnh kích thước hình ảnh
      />

      <Space.Compact className="flex items-center h-5 flex-1">
        <Select defaultValue="Sản phẩm" options={options} className="h-10" />
        <Input placeholder="Nhập từ khóa cần tìm kiếm..." className="h-10 " />
      </Space.Compact>
      <Button className="bg-[#6abd45] text-white p-5" onClick={() => router.push('/login')}>Đăng nhập</Button>
      <div className="flex gap-2 cursor-pointer" onClick={handleOpenCart}>
        <div className="relative">
          <ICCart height={30} width={30} />
          <p className="absolute text-[8px] text-white top-[-7px] right-[-8px] bg-red-600 border border-red-600 rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemsCount}
          </p>
        </div>
        <p className="text-xl">Giỏ Hàng</p>
      </div>
    </div>
  );
};

export default HeaderPage;
