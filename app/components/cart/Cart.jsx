"use client"

import CartList from './CartList';
import Link from 'next/link';
import { useCart } from "../../contexts/cartContext";

const Cart = () => {
    const { products, cart } = useCart();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.amount_in_stoke, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Your Shopping Cart</h2>
                <span className="text-gray-500">
                    ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </span>
            </div>

            {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                    <Link href="/">
                        <button className="bg-[#35afa0] text-white px-6 py-2 rounded-md hover:bg-[#209688] transition-colors">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            ) : (
                <CartList items={cart} />
            )}

            {cart.length > 0 && (
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium">Total</span>
                        <span className="text-xl font-bold">
                            ${total.toFixed(2)}
                        </span>
                    </div>
                    <a href="/checkout">
                        <button className="w-full bg-[#35afa0] text-white py-3 rounded-[50px] hover:bg-[#209688] transition-colors">
                        Checkout
                    </button>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Cart;