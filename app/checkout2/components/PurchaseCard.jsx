"use client"
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../src/components/ui/card"
import { Button } from "../../../src/components/ui/button"

export default function PurchaseCard() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <Card className='w-full md:w-[400px] p-6'>
      <CardHeader className="px-0 pt-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold">SkinnyPop Popcorn SkinnyPack Original</CardTitle>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">(4.8)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-0 py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">$19.00 - $25.00</div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Select Size:</p>
          <div className="flex gap-2">
            <Button 
              variant={selectedSize === 'small' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSelectedSize('small')}
              className="rounded-full"
            >
              Small
            </Button>
            <Button 
              variant={selectedSize === 'medium' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSelectedSize('medium')}
              className="rounded-full"
            >
              Medium
            </Button>
            <Button 
              variant={selectedSize === 'large' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setSelectedSize('large')}
              className="rounded-full"
            >
              Large
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Quantity:</p>
          <div className="flex items-center border rounded-md w-fit">
            <button 
              onClick={decrementQuantity}
              className="px-3 py-1 text-lg border-r"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button 
              onClick={incrementQuantity}
              className="px-3 py-1 text-lg border-l"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button className="w-full bg-teal-500 hover:bg-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </Button>
          
          <Button variant="outline" className="w-full border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Favorites
          </Button>
        </div>
        
        <div className="mt-6 border-t pt-4">
          <div className="flex gap-2 flex-wrap">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Healthy Food</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Organic</span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Popcorn</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-0 pt-4 border-t">
        <div>
          <h3 className="font-semibold mb-2">تفاصيل المنتج:</h3>
          <p className="text-sm text-gray-600">
            فشار سكيني بوب الأصلي خفيف ولذيذ. مصنوع من ذرة عضوية 100% بدون إضافات صناعية. مثالي للوجبات الخفيفة الصحية.
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
