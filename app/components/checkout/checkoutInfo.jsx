export default function CheckoutInfo() {
    return (
        <div className="payment-info lg:border-r-2 lg:pr-10 lg:border-[#DEDEDE] mt-10">
            <form action="">
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex lg:justify-between lg:w-full xs:w-full xs:justify-between">
                        <h3 className="font-bold lg:text-2xl xs:text-xl">Contact</h3>
                        <a href="/login" className="text-[#1773B0] cursor-pointer hover:underline">Login</a>
                    </div>
                    <div>
                        <input type="text" placeholder="Email or Mobile" className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0]" />
                    </div>
                    <div className="flex gap-2 w-full">
                        <input type="checkbox" />
                        <p className="text-sm text-gray-600">Email me with news and offers</p>
                    </div>
                </div>
                <div className="delivery-info flex flex-col gap-3">
                    <div className="flex lg:justify-between lg:w-full xs:w-full xs:justify-between">
                        <h3 className="font-bold lg:text-2xl xs:text-xl">Delivery</h3>
                    </div>
                    <div className="relative w-full">
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
                            <label htmlFor="first-name" className="delivery-input">First name</label>
                        </div>
                        <div className="basis-1/2 relative">
                            <input type="text" id="last-name" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                            <label htmlFor="last-name" className="delivery-input">Last name</label>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="address" id="address" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                        <label htmlFor="address" className="delivery-input">Address</label>
                    </div>
                    <div className="flex gap-4 ">
                        <div className="basis-1/2 relative">
                            <input type="text" id="postal-code" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                            <label htmlFor="postal-code" className="delivery-input">zip code</label>
                        </div>
                        <div className="basis-1/2 relative">
                            <input type="text" id="city" className="peer border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0] placeholder-transparent" placeholder="" />
                            <label htmlFor="city" className="delivery-input">City</label>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full">
                        <input type="checkbox" />
                        <p className="text-sm text-gray-600">Save info for next time</p>
                    </div>
                    <div className="flex flex-col gap-3 mb-6 w-full">
                        <div className="flex justify-between w-full">
                            <h3 className="font-bold text-[15px]">Shipping Method</h3>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="Standard" className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1773B0]" />
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
                <div className="flex justify-between w-full border-t border-gray-200 pt-3 mt-10">
                        <a className="text-[15px] text-[#1773B0] hover:underline" href="#">Privacy Policy</a>
                </div>
            </form>
        </div>
    );
}
