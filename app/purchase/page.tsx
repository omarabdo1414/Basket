"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import RelatedProducts from "./components/RelatedProducts"
import ProductGallery from "./components/ProductGallery"
import PurchaseCard from "./components/PurchaseCard"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import { X, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

// Product data
const productData = {
  id: 1,
  name: 'SkinnyPop Popcorn SkinnyPack Original',
  price: '$15.00 - $25.00',
  rating: 4.8,
  reviewCount: 245,
  sizes: ['small', 'medium', 'large'],
  description: 'SkinnyPop Original Popcorn is light and delicious. Made from 100% organic corn with no artificial additives. Perfect for healthy snacking.',
  tags: ['Healthy Food', 'Organic', 'Popcorn'],
  images: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Main"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1595475038665-8b3d1c4d1b6f?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Side"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Close"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
      alt: "SkinnyPop Popcorn Pack"
    }
  ]
};

const relatedProducts = [
  {
    id: 1,
    name: 'Organic Fresh Lemon',
    price: '$2.50',
    oldPrice: '$3.50',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop',
    discount: '20%',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Organic Green Salad',
    price: '$3.20',
    oldPrice: '$4.50',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
    discount: '30%',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Fresh Mixed Fruits',
    price: '$4.50',
    oldPrice: '$6.00',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=300&fit=crop',
    discount: '25%',
    rating: 4.3
  },
  {
    id: 4,
    name: 'Organic Red Apple',
    price: '$1.99',
    oldPrice: '$2.50',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=300&h=300&fit=crop',
    discount: '20%',
    rating: 4.6
  }
];

// Main Component
const PurchasePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
                Open Purchase Page
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-7xl w-[95vw] sm:w-[90vw] lg:w-[85vw] max-h-[90vh] p-0 border-0 shadow-2xl">
              {/* Close Button */}
              <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white p-2 transition-colors shadow-md">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </DialogClose>

              {/* Content */}
              <div className="overflow-y-auto max-h-[90vh] bg-white rounded-xl">
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Main Product Section */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                    <div className="order-2 lg:order-1">
                      <ProductGallery images={productData.images} />
                    </div>
                    <div className="order-1 lg:order-2">
                      <PurchaseCard product={productData} />
                    </div>
                  </div>


                    {/* Related Products Section */}
                    <RelatedProducts products={relatedProducts} />
                  </div>
                </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;