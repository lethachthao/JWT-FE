'use client';
import { useParams } from 'next/navigation'; // Thay thế useRouter
import Image from 'next/image';
import Menucontent from '@/components/user/MenuContent';
import PreviewImage from '@/components/user/PreviewImage';
import { dataProduct } from '@/mockData/dataProduct';

const ProductDetail = () => {
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

  return (
    <div className="gap-3 flex flex-col w-[1200px] max-w-full mx-auto">
      <div className="flex">
        <div className="w-1/5">
          <Menucontent />
        </div>
        <div className="w-4/5">
          <div className="">
            <div className="flex flex-1 gap-3">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="gap-4 flex flex-col">
                <p className="text-3xl font-bold text-blue-800">
                  {product.name}
                </p>
                <div>
                  <p className="text-xl font-bold">{product.name}</p>
                  <p className="text-xl font-normal">{product.description}</p>
                </div>

                <p className="text-xl text-red-600 font-bold">
                  <span className="text-xl font-normal text-black">
                    Giá tiền:{' '}
                  </span>
                  {product.price}đ
                </p>
                <p className="text-xl text-[#11985e] font-bold">
                  <span className="text-xl font-normal text-black">
                    Tình trạng:{' '}
                  </span>
                  {product.status}
                </p>
                <p className="text-xl text-blue-800 font-bold">
                  <span className="text-xl font-normal text-black">
                    Danh mục:{' '}
                  </span>
                  {result.brand}
                </p>
                <div className="flex justify-between">
                  <div className="flex">
                    <p className="px-8 font-bold flex items-center py-3 text-3xl bg-gray-300">
                      -
                    </p>
                    <p className="px-8 py-3 border font-bold text-xl flex items-center border-gray-300">
                      1
                    </p>
                    <p className="px-8 py-3 font-bold text-3xl flex items-center bg-gray-300">
                      +
                    </p>
                  </div>
                  <div className="text-lg flex items-center px-5  bg-red-600 text-white font-base">
                    THÊM VÀO GIỎ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-4/5 mx-auto">
          <PreviewImage images={product.images} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
