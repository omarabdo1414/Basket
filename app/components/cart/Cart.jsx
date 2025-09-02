"use client"
import { useState } from 'react';
import CartList from './CartList';
import Image from 'next/image';

const Cart = () => {

    const items = [
        {
            id: 1,
            name: "All Natural Italian-Style Chicken Meatballs",
            price: 7.25,
            image: "/assets/item_1.svg", // replace with your image path
            count: 1
        },
        {
            id: 2,
            name: "Coca-Cola – 2 L Bottle",
            price: 3.85,
            image: "/assets/item_2.svg",
            count: 3
        },
        {
            id: 3,
            name: "Fairlife Lactose-Free 2% Milk",
            price: 3.69,
            image: "/assets/item_3.svg",
            count: 1
        },
    ];
    const [cartItems, setCartItems] = useState(items);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Your Shopping Cart</h2>
                <span className="text-gray-500">
                    ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                </span>
            </div>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <CartList items={cartItems} onRemove={removeItem} />
            )}

            {cartItems.length > 0 && (
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium">Total</span>
                        <span className="text-xl font-bold">
                            ${cartItems.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}
                        </span>
                    </div>
                    <a href="/checkout">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                        Proceed to Checkout
                    </button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Cart;