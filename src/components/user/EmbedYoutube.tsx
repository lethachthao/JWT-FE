import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DataYoutube } from '@/mockData/dataYoutube';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const VideoSlider = () => {
  return (
    <div>
      <div className="flex text-blue-50">
        <Image
          src={'/images/youtube-short.jpg'}
          alt={'/images/youtube-short.jpg'}
          width={90}
          height={90}
        />
        <a
          href="https://www.youtube.com/@herogamevn/shorts"
          className="flex items-center"
        >
          Xem tất cả
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {DataYoutube.map(item => (
          <SwiperSlide key={item.id}>
            <div className="video-container transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10 ">
              <iframe
                className="rounded-lg" // Thêm lớp CSS này
                width="178"
                height="300"
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title="YouTube video"
                frameBorder="10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center font-bold">{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
