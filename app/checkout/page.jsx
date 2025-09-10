"use client";

import CartSummary from "../components/checkout/cartSummary";
import Checkout from "../components/checkout/checkoutInfo";

import { useCart } from "../contexts/cartContext";

export default function Register() {
    const { cart } = useCart();
    if (!cart?.length) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                <a 
                    href="/"
                    className="bg-[#35AFA0] text-white px-6 py-2 rounded-md hover:bg-[#209688] transition-colors"
                >
                    Continue Shopping
                </a>
            </div>
        );
    }

    return (
        <div className="lg:flex xs:flex-col xs:p-20 lg:flex-row xs:items-start lg:items-start justify-evenly py-10 xs:h-auto lg:min-h-[800px] gap-10 lg:gap-0">
            <Checkout />
            <CartSummary />
        </div>
    );
}
