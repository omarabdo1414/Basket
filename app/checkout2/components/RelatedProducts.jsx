"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from "../../../src/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    name: 'Organic Fresh Lemon',
    price: '$2.50',
    oldPrice: '$3.50',
    image: 'https://swiperjs.com/demos/images/nature-1.jpg',
    discount: '20%'
  },
  {
    id: 2,
    name: 'Organic Green Salad',
    price: '$3.20',
    oldPrice: '$4.50',
    image: 'https://swiperjs.com/demos/images/nature-2.jpg',
    discount: '30%'
  },
  {
    id: 3,
    name: 'Fresh Mixed Fruits',
    price: '$4.50',
    oldPrice: '$6.00',
    image: 'https://swiperjs.com/demos/images/nature-3.jpg',
    discount: '25%'
  },
  {
    id: 4,
    name: 'Organic Red Apple',
    price: '$1.99',
    oldPrice: '$2.50',
    image: 'https://swiperjs.com/demos/images/nature-4.jpg',
    discount: '20%'
  },
];

export default function RelatedProducts() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="related-products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="relative h-48 w-full">
              <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount} OFF
              </div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-500">(4.5)</span>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">{product.oldPrice}</span>
                </div>
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}