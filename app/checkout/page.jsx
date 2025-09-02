"use client";

import CartSummary from "../components/checkout/cartSummary";
import Checkout from "../components/checkout/checkoutInfo";

export default function Register() {
    return (
        <>
            <div className="lg:flex xs:flex-col xs:p-20 lg:flex-row xs:items-start lg:items-start justify-evenly py-10 xs:h-auto lg:min-h-[800px] gap-10 lg:gap-0">
                <Checkout />
                <CartSummary />
            </div>
        </>
    );
}
