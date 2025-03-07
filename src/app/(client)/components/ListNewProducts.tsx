import ProductDisplay from '@/components/user/ProductDisplay';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useListProducts } from '../hooks/useProducts';
import Image from 'next/image';

const ListNewProduct = () => {
  const { data: products, isPending } = useListProducts();

  console.log(products);

  if (isPending) return <p>Loading...</p>;
  if (!products || products.length === 0) return <p>Không có sản phẩm mới</p>;
  return (
    <ProductDisplay title="Hàng mới về">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className=""
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <Link href={`/product/${product.id}`}>
                <div className="w-fit transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10">
                  <Image
                    src={typeof product.image === 'string' ? product.image : ''}
                    alt={product.name}
                    width={299}
                    height={299}
                    unoptimized={true}
                    className="rounded-t-lg border"
                  />
                  <p className="border h-16 text-sm px-3 w-full font-bold overflow-hidden text-ellipsis flex justify-center items-center">
                    {product.name}
                  </p>
                  <p className="text-red-600 font-bold text-center border py-1 w-full">
                    {product.price}đ
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ProductDisplay>
  );
};

export default ListNewProduct;
