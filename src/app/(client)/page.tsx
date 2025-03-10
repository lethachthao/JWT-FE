'use client';

import { dataProduct } from '@/mockData/dataProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import ProductDisplay from '@/components/user/ProductDisplay';
import Menucontent from '@/components/user/MenuContent';
import Link from 'next/link';
import NewAndGuide from '@/components/user/NewsAndGuide';
import ListNewProduct from './components/ListNewProducts';
import BannerSlider from '@/components/user/Slider';

const Home = () => {
  return (
    <div className="gap-5 flex flex-col">
      <BannerSlider />
      <div className="w-[1200px] max-w-full mx-auto flex flex-col gap-6">
        <ListNewProduct />
        {/* <LatestNews />
        <VideoList /> */}
      </div>
      <div className="pb-10 w-[1200px] max-w-full mx-auto flex">
        <div className="w-1/5">
          <Menucontent />
          <NewAndGuide />
        </div>
        <div className="w-4/5">
          {dataProduct.map(item => (
            <ProductDisplay title="Hàng mới về " key={item.brand}>
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
                  {dataProduct.map(item =>
                    item.products.map((product, index) => (
                      <SwiperSlide key={`${item.brand} - ${index}`}>
                        <Link href={`/home/${product.id}`}>
                          <div className=" w-fit transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10">
                            <Image
                              src={product.image}
                              alt={'product'}
                              width={299}
                              height={299}
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
