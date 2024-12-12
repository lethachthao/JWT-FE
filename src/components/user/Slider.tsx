import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { DataImgBanner } from '@/app/mockData/ImageBanner';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="px-20 "
    >
      {DataImgBanner.map(item => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.image}
            alt={'fasdfsa'}
            width={1920}
            height={1080}
            className="rounded-[30px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
