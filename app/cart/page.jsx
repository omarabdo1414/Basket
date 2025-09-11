import React from 'react';
import Cart from '../components/cart/Cart';

const CartPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <Cart item/>
                </div>
            </div>
        </div>
    );
};

export default CartPage;