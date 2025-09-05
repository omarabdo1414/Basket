'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent ,CardHeader ,CardTitle ,CardFooter } from "@/components/ui/card";
import {Minus ,Plus ,ShoppingCart ,Heart} from 'lucide-react'
const PurchaseCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <Card className="w-full border-0 shadow-none ">
      <CardHeader className="px-0 pt-0 pb-4">
        <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
          {product.name}
        </CardTitle>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                className={`w-5 h-5 ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating}) {product.reviewCount} reviews</span>
        </div>
      </CardHeader>
      
      <CardContent className="px-0 py-0">
        <div className="mb-6">
          <div className="text-3xl font-bold text-gray-900 mb-4">{product.price}</div>
        </div>
        
        {/* Size Selection */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">Size:</p>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <Button 
                key={size}
                variant={selectedSize === size ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setSelectedSize(size)}
                className={`rounded-full px-4 capitalize ${selectedSize === size ? 'bg-teal-500 hover:bg-teal-600' : 'hover:border-teal-500'}`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Quantity Selection */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">Quantity:</p>
          <div className="flex items-center border border-gray-300 rounded-lg w-fit">
            <button 
              onClick={decrementQuantity}
              className="p-2 hover:bg-gray-50 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-medium min-w-[50px] text-center">{quantity}</span>
            <button 
              onClick={incrementQuantity}
              className="p-2 hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <Button className="w-full bg-teal-500 hover:bg-teal-600 h-12 text-base font-medium">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
          
          <Button variant="outline" className="w-full border-gray-300 h-12 text-base font-medium hover:border-teal-500 hover:text-teal-600">
            <Heart className="w-5 h-5 mr-2" />
            Add to Wishlist
          </Button>
        </div>
        
        {/* Tags */}
        <div className="pb-6 border-b border-gray-200">
          <div className="flex gap-2 flex-wrap">
            {product.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-0 pt-4">
        <div className="w-full">
          <h3 className="font-semibold mb-3 text-gray-900">Product Details</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PurchaseCard