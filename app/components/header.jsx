import React from 'react'
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className="header border-b border-gray-300 bg-[#F8F8F8]">
                <div className="flex items-center justify-start px-4 py-2 mx-40">
                    <div className="mr-50">
                        <nav className="flex items-center justify-between gap-3 text-[#3E445A]">
                            <li className="list-none text-[3E445A] text-[16px] font-[regular] hover:text-teal-600"><a href="/about">About Us</a></li>
                            <li className="list-none text-[3E445A] text-[16px] font-[regular] hover:text-teal-600"><a href="/compare">Compare</a></li>
                            <li className="list-none text-[3E445A] text-[16px] font-[regular] hover:text-teal-600"><a href="/wishlist">Wishlist</a></li>
                        </nav>
                    </div>
                    <div className="flex justify-between gap-2 border-r-2 border-gray-400 mr-2">
                        <div className="security-msg flex items-center justify-between gap-3 pr-3">
                            <Image
                                src="/images/header-icon.svg"
                                alt="Basket Logo"
                                width={20}
                                height={20}
                            />
                            <p className="text-sm text-[#3E445A]">100% Secure delivery without contacting the courier</p>
                        </div>

                        <div className="pr-2 flex items-center">
                            <p className="text-sm text-[#3E445A]">Need help? Call Us: + 0020 500</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#3E445A]">
                        <select name="language" id="language" className="border border-gray-300 rounded-md border-none">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                        <select name="currency" id="currency" className="border border-gray-300 rounded-md border-none">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="egp">EGP</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;