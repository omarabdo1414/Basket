"use client";
import React from 'react'
import Image from 'next/image'
import { Inter } from "next/font/google";
import { Dosis } from "next/font/google";
import "@fontsource/jersey-10";
import { useState } from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const dosis = Dosis({
    subsets: ["latin"],
    variable: "--font-dosis",
});

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header >
                <div className="head-up ">
                    <p className={`${inter.className} text-[12px] text-center py-[0.5rem] text-white bg-[var(--base-color)] max-sm:px-[30px]`} >Due to current circumstances, there may be slight delays in order processing</p>
                </div>

                {/* second part in header */}
                <div className="head-2">
                    <ul className={`flex gap-3 ${inter.className} max-md:hidden `}>
                        <li className='text-nowrap'>About Us</li>
                        <li>Compare</li>
                        <li>Wishlist</li>
                    </ul>
                    <div className="sec-help-lang">
                        <div className={`secure text-center pl-[15px] ${inter.className}`} >
                            <Image src="assets/Vector.svg" alt='secure' width={18} height={18} className='mr-[10px] inline' />
                            <span className='font-inter'>100% Secure delivery without contacting the couier</span>
                            <span className='mx-[16px] text-[18px] font-light opacity-10 max-sm:hidden'>|</span>
                            <br className='hidden max-sm:block' />
                            <span>Need help? Call Us:</span>
                            <span className='text-[var(--base-color)] font-bold '> +0020 500</span>
                        </div>
                    </div>
                </div>
                {/* End second part in header */}

                <hr className='opacity-10' />

                {/* third part in header */}
                <div className="head-3 ">
                    <div className="logo ">
                        <div className="flex items-center ">
                            <Image src="/assets/logo.svg" alt='logo' width={50} height={50} className='inline' />
                            <p className="jersey text-[2rem] text-[var(--base-color)] relative bottom-1 max-md:text-[1.5rem] ">Basket</p>
                        </div>
                        <p className={`${inter.className} text-[0.6rem] text-[#3E445A] opacity-50 max-md:text-wrap max-md:text-[0.5rem]`} >Online Grocery Shopping Center</p>
                    </div>
                    <div className="search-bar relative ">
                        <input type="search"
                            className={`search-input ${inter.className}`} placeholder='Search for Products, fruit, meat, eggs .etc...' />
                        <Image src="/assets/seach.svg" alt='search icon' height={20} width={20} className=' absolute right-[1rem] top-[17px]' />
                    </div>
                    <div className='user-and-cart flex items-center'>
                        <Image src='/assets/userIcon.svg' alt='user logo' height={24} width={24} className='p-1 border border-gray-300 rounded-[50%] size-7 ' />
                        <p className={`${dosis.className} font-medium text-[14px] mx-[20px]`}>$0.00</p>
                        <div className="cart relative ">
                            <Image src="/assets/cartIcon.svg" alt='cart icon' height={40} width={40} className='p-[10px] bg-[#FFF1EE] rounded-[50%]  ' />
                            <div className={`badge ${inter.className} top-0 right-0`}>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* search responsive on md and sm  */}
                <div className="search-bar flex justify-center relative">
                    <input type="search" className={`search-input-2 ${inter.className}`} placeholder='Search for Products, fruit, meat, eggs .etc...' />
                    <Image src="/assets/seach.svg" alt='search icon' height={20} width={20} className=' absolute right-[70px] top-[17px] hidden max-md:block ' />
                </div>
                {/* End search responsive on md and sm  */}

                {/* End third part  */}

                {/* fourth part category and menu */}
                <div
                    className="head-menu">
                    <div className="categories relative">
                        <button className='category-btn '>
                            <Image src="/assets/menuIcon.svg" alt='menu icon' height={14} width={14} className='max-md:hidden' />
                            <span className={`category-btn-txt ${dosis.className} `}>All categories</span>
                            <Image src="/assets/dropArrow.svg" height={10} width={10} alt='drop arrow' />
                        </button>
                        <span
                            className={`total-product ${dosis.className} `}>total 50 Products</span>
                    </div>
                    <ul
                        className={`uppercase
             ${dosis.className} 
             font-medium flex gap-7 
             mx-10px text-[15px] 
             items-center max-lg:gap-5
              max-md:flex-wrap max-md:hidden`}>
                        <li className='flex gap-3 items-center bg-[#F0FAFF] px-[15px] py-[6px] rounded-[30px] '>
                            <span className="text-[var(--base-color)]"> <a href="#">home</a> </span>
                            {/* <Image src="/assets/dropArrowHome.svg" alt='drop arrow' width={10} height={10}/> */}
                        </li>
                        <li className='menu-items'>
                            <a href="#">shop</a>
                        </li>
                        <li className='menu-items menu-items-icons '>
                            <Image src="/assets/meatIcon.svg" alt='meat icon' height={20} width={20} />
                            <a href="#" className='text-nowrap max-lg:text-[14px]'>meats & seafood</a>
                        </li>
                        <li className='menu-items menu-items-icons '>
                            <Image src="/assets/bakeryIcon.svg" alt='bakeryIcon' height={20} width={20} />
                            <a href="#">bakery</a>
                        </li>
                        <li className='menu-items menu-items-icons'>
                            <Image src="/assets/bevarage.svg" alt='bevarage icon' height={20} width={20} />
                            <a href="#">bevrages</a>
                        </li>
                        <li className='menu-items'>
                            <a href="#">blog</a>
                        </li>
                        <li className='menu-items'>
                            <a href="#">contact</a>
                        </li>

                    </ul>

                    {/* menu responsive */}
                    <div className="md:hidden">
                        <button className="flex flex-col gap-1.5 w-7 h-7 relative" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className={`menu-lines  ${menuOpen ? "rotate-45 translate-y-2" : ""}`} ></span>
                            <span className={`menu-lines  ${menuOpen ? "opacity-0" : ""}`}></span>
                            <span className={`menu-lines  ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </button>
                    </div>
                </div>

                {/* Menu Dropdown */}
                <div className={`md:hidden bg-white shadow-lg border-t border-gray-200 transform transition-all duration-300 origin-top 
            ${menuOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"} overflow-hidden`}>
                    <ul className={`uppercase ${dosis.className} font-medium flex flex-col gap-4 p-4 text-sm text-center`}>
                        <li className='bg-[#F0FAFF] px-[15px] py-[6px] rounded-[30px] '>
                            <a href="#" className='text-[var(--base-color)]'>home</a>
                        </li>
                        <li className='menu-items'><a href="#">shop</a></li>
                        <li className='menu-items'><a href="#">meats & seafood</a></li>
                        <li className='menu-items'><a href="#">bakery</a></li>
                        <li className='menu-items'><a href="#">beverages</a></li>
                        <li className='menu-items'><a href="#">blog</a></li>
                        <li className='menu-items'><a href="#">contact</a></li>
                        <li className='menu-items'><a href="#">About Us</a></li>
                        <li className='menu-items'><a href="#">compare</a></li>
                        <li className='menu-items'><a href="#">wishlist</a></li>
                    </ul>
                </div>
                {/* End fourth part category and menu */}

                <hr className='opacity-10' />

            </header>

        </>
    )
}
