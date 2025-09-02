// filepath: react-cart-app/src/components/Cart/CartItem.jsx

import React from 'react';
import Image from 'next/image';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="space-y-4 mt-15">
            <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
            >
                <div className="flex items-center gap-3 relative">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                    />
                    <span className="text-sm text-white absolute -top-2 left-10 bg-gray-500 px-[6px] rounded-[50%]">{item.count}</span>
                    <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">${(item.price * item.count).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartItem;