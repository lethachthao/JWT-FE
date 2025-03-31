'use client';
import { useParams } from 'next/navigation'; // Thay thế useRouter
import Menucontent from '@/components/user/MenuContent';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { Button, Image, message } from 'antd';
import { useListProducts } from '../../hooks/useProducts';
import ImageUploader from "quill-image-uploader";
import { Quill } from 'react-quill';


const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: products, isPending } = useListProducts();
  const dispatch = useDispatch();
  const { id } = useParams(); // Lấy ID từ URL

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("https://your-api.com/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Upload ảnh thất bại!");
    return data.imageUrl; // URL ảnh đã upload
  };


  // Đăng ký module upload ảnh vào Quill
  Quill.register("modules/imageUploader", ImageUploader);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["image"], // Cho phép chèn ảnh
    ],
    imageUploader: {
      upload: async (file: File) => {
        return await uploadImage(file);
      },
    },
  };

  // Nếu đang tải dữ liệu
  if (isPending) {
    return <p>Đang tải sản phẩm...</p>;
  }

  // Kiểm tra nếu không có dữ liệu
  if (!products) {
    return <p>Không có dữ liệu sản phẩm</p>;
  }

  // Tìm sản phẩm theo ID
  const product = products.find(product => product.id === Number(id));
  console.log(product);

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
    dispatch(addToCart({ id: product.id, product, quantity }));
    success();
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="gap-3 flex flex-col w-[1200px] max-w-full mx-auto">
      <div className="flex mt-3 gap-5">
        <div className="w-[16%]">
          {/* <Menucontent />
          {contextHolder} */}
        </div>
        <div className="w-[84%]">
          <div className="flex gap-5 w-full">
            {/* Div 1 */}
            <div className="flex-shrink-0 w-[500px]">
              {/* <PreviewImage images={product.images} /> */}
              <Image
                src={typeof product.image === 'string' ? product.image : ''}
                alt={product.name}
                width={299}
                height={299}
                className="rounded-t-lg border"
              />
            </div>

            {/* Div 2 */}
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-3xl font-bold text-text-blue">
                {product.name}
              </p>
              <div>
                <p className="text-xl font-bold">{product.name}</p>
              </div>
              <p className="text-xl text-red-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Giá tiền:{' '}
                </span>
                {product.price}đ
              </p>
              {/* <p className="text-xl text-green-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Tình trạng:{' '}
                </span>
                {product.status}
              </p> */}
              {/* <p className="text-xl text-blue-50 font-bold">
                <span className="text-xl font-normal text-black">
                  Danh mục:{' '}
                </span>
                {result.brand}
              </p> */}
              <div className="flex items-center">
                <div className="flex items-center">
                  <p
                    className="px-8 font-normal flex items-center py-2 text-xl bg-gray-100 cursor-pointer"
                    onClick={handleDecrease}
                  >
                    -
                  </p>
                  <p className="px-8 py-2 border font-normal text-xl flex items-center border-gray-300">
                    {quantity}
                  </p>
                  <p
                    className="px-8 py-2 font-normal text-xl flex items-center bg-gray-100 cursor-pointer"
                    onClick={handleIncrease}
                  >
                    +
                  </p>
                </div>
                <Button
                  className="text-lg ml-4 flex items-center px-5 py-7 rounded-none bg-[#d26e4b] text-white font-base"
                  onClick={handleAddToCart}
                >
                  THÊM VÀO GIỎ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
  );
};

export default ProductDetail;
