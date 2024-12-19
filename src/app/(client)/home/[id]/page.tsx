'use client';
import { useParams } from 'next/navigation'; // Thay thế useRouter
import Menucontent from '@/components/user/MenuContent';
import PreviewImage from '@/components/user/PreviewImage';
import { dataProduct } from '@/mockData/dataProduct';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { Button, message } from 'antd';
import Image from 'next/image';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const params = useParams(); // Sử dụng useParams
  const { id } = params;

  // Tìm sản phẩm và thương hiệu dựa trên id
  const result = dataProduct.find(item =>
    item.products.some(product => product.id === Number(id))
  );

  if (!result) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  const product = result.products.find(product => product.id === Number(id));

  if (!product) {
    return <p>Sản phẩm không tồn tại</p>;
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content:
        'Sản phẩm đã được thêm vào giỏ hàng! Tới giỏ hàng để xem chi tiết',
    });
  };

  const handleAddToCart = () => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    dispatch(action);
    success();
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Tăng số lượng
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Giảm số lượng nhưng không nhỏ hơn 1
  };

  return (
    <div className="gap-3 flex flex-col w-[1200px] max-w-full mx-auto">
      <div className="flex mt-3 gap-5">
        <div className="w-[16%]">
          <Menucontent />
          {contextHolder}
        </div>
        <div className="w-[84%]">
          <div className="flex gap-5 w-full">
            {/* Div 1 */}
            <div className="flex-shrink-0 w-[500px]">
              <PreviewImage images={product.images} />
            </div>

            {/* Div 2 */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-3xl font-bold text-text-blue">
                {product.name}
              </p>
              <div>
                <p className="text-xl font-bold">{product.name}</p>
                <p className="text-xl font-normal">{product.description}</p>
              </div>
              <p className="text-xl text-red-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Giá tiền:{' '}
                </span>
                {product.price}đ
              </p>
              <p className="text-xl text-green-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Tình trạng:{' '}
                </span>
                {product.status}
              </p>
              <p className="text-xl text-blue-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Danh mục:{' '}
                </span>
                {result.brand}
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <p
                    className="px-8 font-bold flex items-center py-2 text-3xl bg-gray-300 cursor-pointer"
                    onClick={handleDecrease}
                  >
                    -
                  </p>
                  <p className="px-8 py-2 border font-bold text-xl flex items-center border-gray-300">
                    {quantity}
                  </p>
                  <p
                    className="px-8 py-2 font-bold text-3xl flex items-center bg-gray-300 cursor-pointer"
                    onClick={handleIncrease}
                  >
                    +
                  </p>
                </div>
                <Button
                  className="text-lg ml-4 flex items-center px-5 py-7 rounded-none bg-red-50 text-white font-base"
                  onClick={handleAddToCart}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-2 pt-5 pl-4 ml-52 flex flex-col gap-3">
        {product.images.map(item => (
          <Image key={item} src={item} alt={item} width={500} height={500} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
