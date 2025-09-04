"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  // Create images array object
  const images = [
    {
      id: 1,
      src: "https://swiperjs.com/demos/images/nature-1.jpg",
      alt: "Nature 1"
    },
    {
      id: 2,
      src: "https://swiperjs.com/demos/images/nature-2.jpg",
      alt: "Nature 2"
    },
    {
      id: 3,
      src: "https://swiperjs.com/demos/images/nature-3.jpg",
      alt: "Nature 3"
    },
    {
      id: 4,
      src: "https://swiperjs.com/demos/images/nature-4.jpg",
      alt: "Nature 4"
    },
    {
      id: 5,
      src: "https://swiperjs.com/demos/images/nature-5.jpg",
      alt: "Nature 5"
    },
    {
      id: 6,
      src: "https://swiperjs.com/demos/images/nature-6.jpg",
      alt: "Nature 6"
    },
    {
      id: 7,
      src: "https://swiperjs.com/demos/images/nature-7.jpg",
      alt: "Nature 7"
    },
    {
      id: 8,
      src: "https://swiperjs.com/demos/images/nature-8.jpg",
      alt: "Nature 8"
    },
    {
      id: 9,
      src: "https://swiperjs.com/demos/images/nature-9.jpg",
      alt: "Nature 9"
    },
    {
      id: 10,
      src: "https://swiperjs.com/demos/images/nature-10.jpg",
      alt: "Nature 10"
    }
  ];
  
  return (
    <div className="max-w-[800px] flex flex-col  lg:flex-row-reverse gap-4">
      {/* Main large image swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-[80%] rounded-lg overflow-hidden shadow-lg h-fit"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={image.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Thumbnail swiper - vertical on the side on desktop, horizontal on mobile */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        direction={"vertical"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-[80%]  h-[100px] lg:w-[20%] lg:h-[400px]"
        breakpoints={{
          // when window width is >= 768px (desktop)
          1024 : {
            direction: 'vertical',
            slidesPerView: 4,
          }
 ,     
          // when window width is < 768px (mobile)
          0: {
            direction: 'horizontal',
            slidesPerView: 3.5,
          }
        }}
      >
        {images.map((image) => (
          <SwiperSlide 
            key={image.id} 
            className="opacity-90 hover:opacity-100 cursor-pointer transition-opacity border border-gray-200 rounded overflow-hidden h-[80px] p-3"
          >
            <div className="relative w-full h-full">
              <Image 
                src={image.src} 
                alt={`Thumbnail ${image.id}`} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
