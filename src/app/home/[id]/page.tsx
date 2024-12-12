'use client';
import { useParams } from 'next/navigation'; // Thay thế useRouter
import Image from 'next/image';
import { DataProduct } from '@/app/mockData/dataProduct';
import Menucontent from '@/components/user/MenuContent';

const ProductDetail = () => {
  const params = useParams(); // Sử dụng useParams
  const { id } = params;

  // Tìm sản phẩm và thương hiệu dựa trên id
  const result = DataProduct.find(item =>
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
    <div className="gap-3 flex w-[1200px] max-w-full mx-auto">
      <Menucontent />
      <div className="flex flex-1 gap-3">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="gap-4 flex flex-col">
          <h1 className="text-3xl font-bold text-[#17649a]">{product.name}</h1>
          <div>
            <strong className="text-xl font-bold">{product.name}</strong>
            <p className="text-xl font-normal">{product.description}</p>
          </div>

          <p className="text-xl text-red-600 font-bold">
            <label className="text-xl font-normal text-black">Giá tiền: </label>
            {product.price}đ
          </p>
          <p className="text-xl text-[#11985e] font-bold">
            <label className="text-xl font-normal text-black">
              Tình trạng:{' '}
            </label>
            {product.status}
          </p>
          <p className="text-xl text-[#17649a] font-bold">
            <label className="text-xl font-normal text-black">Danh mục: </label>
            {result.brand}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
