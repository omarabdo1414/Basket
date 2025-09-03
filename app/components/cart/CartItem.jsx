"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import { useCart } from "../../contexts/cartContext";

const CartItem = ({ item }) => {

    let [count, setCount] = React.useState(item.count);
    let { items } = useCart();

    const removeItem = (itemId) => {
        const newItems = items.filter((item) => item.id !== itemId);
    };

    const handleRemove = (itemId) => {
        if (count > 1) {
            count -= 1;
            setCount(count);
        } else {
            removeItem(itemId);
        }
    };

    const addButton = () => {
        count += 1;
        setCount(count);
    };

    return (
        <div className="space-y-4 mt-15">
            <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3 border border-gray-300 p-4 rounded-[12px]">
                <div className="flex items-center gap-3 relative">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-md"
                    />
                    <div className="flex flex-col pl-10">
                        <span className="text-lg font-bold">{item.name}</span>
                        <p className="text-xs text-gray-500 text[20px]">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2 pt-3">
                            <button onClick={() => {
                                addButton();
                            }} className="text-gray-900 px-2 py-1 rounded-[50%] border border-gray-300 w-[50px] h-[50px]">
                                +
                            </button>
                            <div className="w-[50px] h-[50px] bg-gray-200 rounded-[50%] flex items-center justify-center">
                                <span className="text-lg text-gray-900  px-[6px] mx-3 text-center">{count}</span>
                            </div>
                            <button onClick={() => {
                                handleRemove(item.id);
                            }} className="text-gray-900 px-2 py-1 rounded-[50%] border border-gray-300 w-[50px] h-[50px]">
                                -
                            </button>
                        </div>
                    </div>
                </div>
                <span className="text-sm font-medium">${(item.price * count).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartItem;