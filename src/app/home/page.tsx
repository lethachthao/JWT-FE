'use client';

import { DataProduct } from '@/app/mockData/dataProduct';
import Slider from '@/components/user/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import MenuPage from '@/components/user/MenuPage';
import Menucontent from '@/components/user/MenuContent';
import ProductDisplay from '@/components/user/ProductDisplay';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="gap-3 flex flex-col">
      <MenuPage />
      <Slider />
      <div className="w-[1200px] max-w-full mx-auto">
        <ProductDisplay title="Hàng mới về">
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className=""
            >
              {DataProduct.map(item =>
                item.products.map((product, index) => (
                  <SwiperSlide key={`${item.brand} - ${index}`}>
                    <Link href={`/home/${product.id}`}>
                      <div className=" w-fit transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10">
                        <Image
                          src={product.image}
                          alt={'fdasdf'}
                          width={299}
                          height={299}
                          className="rounded-t-lg border"
                        />
                        <p className="text-center border h-16 text-sm px-3 w-full font-bold overflow-hidden text-ellipsis flex justify-center items-center">
                          {product.name}
                        </p>
                        <p className="text-red-600 font-bold text-center border py-1 w-full">
                          {product.price}đ
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </ProductDisplay>
      </div>
      <div className="pb-40 w-[1200px] max-w-full mx-auto flex">
        <div className="w-1/5">
          <Menucontent />
        </div>
        <div className="w-4/5">
          {DataProduct.map(item => (
            <ProductDisplay title="Hàng mới về " key={item.brand}>
              <div className="">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  className=""
                >
                  {DataProduct.map(item =>
                    item.products.map((product, index) => (
                      <SwiperSlide key={`${item.brand} - ${index}`}>
                        <div className=" w-fit transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10">
                          <Image
                            src={product.image}
                            alt={'fdasdf'}
                            width={299}
                            height={299}
                            className="rounded-t-lg border"
                          />
                          <p className="text-center border h-16 text-sm px-3 w-full font-bold overflow-hidden text-ellipsis flex justify-center items-center">
                            {product.name}
                          </p>
                          <p className="text-red-600 font-bold text-center border py-1 w-full">
                            {product.price}đ
                          </p>
                        </div>
                      </SwiperSlide>
                    ))
                  )}
                </Swiper>
                {item.banner && (
                  <Image
                    src={item.banner}
                    alt="Banner"
                    width={299}
                    height={299}
                    className="rounded-lg border w-full h-48 my-5"
                  />
                )}
              </div>
            </ProductDisplay>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
