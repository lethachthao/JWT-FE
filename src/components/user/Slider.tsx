import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { DataImgBanner } from '@/mockData/ImageBanner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Bật tự động chạy
    autoplaySpeed: 3000, // Thời gian chuyển đổi (ms)
    arrows: true,
  };
  
  return (
    <div className="px-20">
      <Slider {...settings}>
        {DataImgBanner.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt="Banner"
              priority={true}
              width={1920}
              height={1080}
              className="rounded-[30px] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderBanner;
