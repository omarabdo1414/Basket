'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row gap-4  lg:w-[65%]">
      {/* Main image swiper */}
      <div className="order-2  w-full lg:flex-1 lg:max-w-[80%]">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full rounded-xl overflow-hidden shadow-lg bg-gray-50"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={image.id === 1}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail swiper */}
      <div className="order-2 lg:order-1   w-full lg:w-[20%]">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full h-[80px] lg:h-[400px]  "
          breakpoints={{
            1024: {
              direction: 'vertical',
              slidesPerView: 4,
            },
            0: {
              direction: 'horizontal',
              slidesPerView: 4,
            }
          }}
        >
          {images.map((image) => (
            <SwiperSlide
              key={image.id}
              className="opacity-70 hover:opacity-100 cursor-pointer transition-all duration-200 border-2 border-gray-200 rounded-lg overflow-hidden hover:border-teal-400"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`Thumbnail ${image.id}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;