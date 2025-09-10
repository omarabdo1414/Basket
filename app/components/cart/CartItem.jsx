"use client";

import React from 'react';
import Image from 'next/image';

import { useCart } from "../../contexts/cartContext";

const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleDecrease = () => {
        if (item.count > 1) {
            console.log('decrease');
            console.log(item.id);
            updateQuantity(item.id, -1);
        } else {
            removeFromCart(item.id);
        }
    };

    const handleIncrease = () => {
        updateQuantity(item.id, 1);
    };

    return (
        <div className="space-y-4 mt-15">
            <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3 border border-gray-300 p-4 rounded-[12px]">
                <div className="flex items-center gap-3 relative">
                    <Image
                        src={item.imgURL}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-md"
                    />
                    <div className="flex flex-col pl-10">
                        <span className="text-lg font-bold">{item.title}</span>
                        <p className="text-xs text-gray-500 text[20px]">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2 pt-3">
                            <button
                                onClick={handleIncrease}
                                className="text-gray-900 px-2 py-1 rounded-[50%] border border-gray-300 w-[50px] h-[50px]"
                            >
                                +
                            </button>
                            <div className="w-[50px] h-[50px] bg-gray-200 rounded-[50%] flex items-center justify-center">
                                <span className="text-lg text-gray-900 px-[6px] mx-3 text-center">
                                    {item.amount_in_stoke}
                                </span>
                            </div>
                            <button
                                onClick={handleDecrease}
                                className="text-gray-900 px-2 py-1 rounded-[50%] border border-gray-300 w-[50px] h-[50px]"
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-sm font-medium">
                    ${(item.price * item.amount_in_stoke).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
