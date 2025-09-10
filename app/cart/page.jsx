import React from 'react';
import Cart from '../components/cart/Cart';

const CartPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Your Shopping Cart
                </h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <Cart item/>
                </div>
            </div>
        </div>
    );
};

export default CartPage;