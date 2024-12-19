import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { dataLatestNews } from '@/mockData/dataLatestNews';

const LatestNews = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex font-bold gap-4">
        <p className="text-xl">Tin tức mới</p>
        <p className="text-xl text-blue-50">Xem tất cả</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {dataLatestNews.map(item => (
          <SwiperSlide
            key={item.id}
            className="swiper-slide-News border rounded-xl pb-4 "
          >
            <Image
              src={item.image}
              alt={'fasdfsa'}
              width={260}
              height={240}
              className="rounded-t-xl"
            />
            <div className="">
              <p className="px-2 text-sm font-bold line-clamp-2 break-all">
                {item.name}
              </p>
              <p className="px-2 text-xs line-clamp-4 overflow-hidden">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestNews;
