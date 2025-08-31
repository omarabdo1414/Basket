"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "postcss";

// Components
import Header from "../components/header";

export default function Register() {
    return (
        <>
            <div className="warn-msg">
                <p className="text-center text-sm text-white py-1 bg-[#35AFA0]">Due to current circumstances, there may be slight delays in order processing</p>
            </div>
            <Header />

            <div className="lg:flex xs:flex-col xs:p-20 lg:flex-row items-center justify-evenly mt-15 mb-15 py-10 xs:h-auto lg:h-[800px] gap-10 lg:gap-0">
                <div className="payment-info lg:border-r-2 lg:pr-10 lg:border-[#DEDEDE] mt-10">
                    <form action="">
                        <div className="flex flex-col gap-3 mb-6">
                            <div className="flex lg:justify-between lg:w-full xs:w-[450px] xs:justify-between">
                                <h3 className="font-bold text-2xl">Contact</h3>
                                <a href="/login" className="text-[#1773B0] cursor-pointer">Login</a>
                            </div>
                            <div>
                                <input type="text" placeholder="Email or Mobile Phone Number" className="border border-gray-300 rounded-md p-2 w-[450px] focus:outline-none focus:ring-2 focus:ring-[#1773B0]" />
                            </div>
                            <div className="flex gap-2 w-full">
                                <input type="checkbox" />
                                <p className="text-sm text-gray-600">Email me with news and offers</p>
                            </div>
                        </div>
                        <div className="delivery-info flex flex-col gap-3">
                            <div>
                                <h3 className="font-bold text-2xl">Delivery</h3>
                            </div>
                            <div className="relative w-[450px]">
                                <input
                                    type="text"
                                    id="country"
                                    placeholder=""
                                    className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent"
                                />
                                <label
                                    htmlFor="country"
                                    className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-3 peer-focus:text-sm
                                        -top-3 text-sm"
                                >
                                    Country/Region
                                </label>
                            </div>
                            <div className="flex gap-4 ">
                                <div className="basis-1/2 relative">
                                    <input type="text" id="first-name" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                                    <label htmlFor="first-name" className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-3 peer-focus:text-sm
                                        -top-3 text-sm">First name (optional)</label>
                                </div>
                                <div className="basis-1/2 relative">
                                    <input type="text" id="last-name" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                                    <label htmlFor="last-name" className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-3 peer-focus:text-sm
                                        -top-3 text-sm">Last name</label>
                                </div>
                            </div>
                            <div className="relative">
                                <input type="address" id="address" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                                <label htmlFor="address" className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                    peer-focus:-top-3 peer-focus:text-sm
                                    -top-3 text-sm">Address</label>
                            </div>
                            <div className="flex gap-4 ">
                                <div className="basis-1/2 relative">
                                    <input type="text" id="postal-code" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                                    <label htmlFor="postal-code" className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-3 peer-focus:text-sm
                                        -top-3 text-sm">Postal code</label>
                                </div>
                                <div className="basis-1/2 relative">
                                    <input type="text" id="city" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                                    <label htmlFor="city" className="absolute left-3 text-gray-500 bg-white px-1 transition-all duration-200
                                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-3 peer-focus:text-sm
                                        -top-3 text-sm">City</label>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full">
                                <input type="checkbox" />
                                <p className="text-sm text-gray-600">Save info for next time</p>
                            </div>
                            <div className="flex flex-col gap-3 mb-6">
                                <div className="flex justify-between w-full">
                                    <h3 className="font-bold text-[15px]">Shipping Method</h3>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Standard Shipping" className="border border-gray-300 rounded-md p-2 w-[450px] focus:outline-none focus:ring-2 focus:ring-[#1773B0]" />
                                    <p className="text-md font-bold text-gray-900 absolute right-3 top-1/2 transform -translate-y-1/2">Free</p>
                                </div>
                            </div>
                            <div className="payment-method flex flex-col gap-3 mb-6">
                                <h2 className="text-xl font-bold">Payment</h2>
                                <p className="text-gray-600">
                                    All transactions are secure and encrypted.
                                </p>

                                {/* Info Box */}
                                <div className="bg-[#F5F5F5] py-[12px] rounded-[6px] flex flex-col items-center text-center">
                                    {/* Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 text-gray-400 mb-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <p className="text-gray-500">
                                        This store can’t accept payments right now.
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    disabled
                                    className="w-full mt-4 rounded-[6px] text-gray-500 font-semibold bg-[#F5F5F5] cursor-not-allowed py-[8px]"
                                >
                                    Pay now
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="product-info">
                    <h2 className="text-lg font-semibold mb-4">Product Information</h2>
                    <p className="text-sm text-gray-600">Please review your selected products below.</p>
                </div>
            </div>
        </>
    );
}
