"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { Inter, Dosis } from "next/font/google";
// import "@fontsource/jersey-10";
import { useState , useEffect } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { supabaseAuth } from "../../lib/supabaseAuthClient";


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
const [categoriesOpen, setCategoriesOpen] = useState(false);
const [secrchisOpen, setSearchOpen] = useState(false);
const pathname = usePathname();
const router =useRouter();
const [session, setSession] = useState(null);

useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabaseAuth.auth.getSession();
      setSession(session);
    };
    getSession();

    // also listen for login/logout events
    const { data: authListener } = supabaseAuth.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logOut = async () => {
    await supabaseAuth.auth.signOut();
    router.push("/login");
  };


return (
    <>
    <header >
        <div className="head-up max-md:hidden">
            <p className={ `${inter.className} text-[12px] text-center py-[0.2rem] text-white bg-[var(--base-color)] max-sm:px-[30px]` } >Due to current circumstances, there may be slight delays in order processing</p>
        </div>

        {/* second part in header */}
        <div className="head-2 ">
            <ul className={`flex gap-3 ${inter.className} max-md:hidden items-center`}>
                <li className="menu-items text-nowrap"><Link href="/about" className={pathname === '/about' ? 'active' : '' }>About Us</Link></li>
                <li className="menu-items"><Link href="" className={pathname === '/compare' ? 'active' : '' }>Compare</Link></li>
                <li className="menu-items"><Link href="" className={pathname === '/wishlist' ? 'active' : '' }>Wishlist</Link></li>
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
        <div className="head-3 flex items-center gap-2">
            {/* menu responsive */}
            <div className="md:hidden ">
                <button className="flex flex-col gap-1.5 w-7 h-7 relative" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`menu-lines  ${menuOpen ?  "rotate-45 translate-y-2" : ""}` } ></span>
                    <span className={`menu-lines  ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`menu-lines  ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>
            <div className="logo ">
                <div className="flex items-center ">
                    <Image src="/assets/logo.svg" alt='logo' width={50} height={50} className='inline w-8'/>
                    <p className="jersey text-[2rem] text-[var(--base-color)] relative bottom-1 max-md:text-[1.5rem] ">Basket</p>
                </div>
                <p className={`${inter.className} text-[0.6rem] text-[#3E445A] opacity-50 max-md:text-[0.5rem]`} >Online Grocery Shopping Center</p>
            </div>
            <div className="search-bar relative ">
                <input type="search" className={`search-input ${inter.className}`} placeholder='Search for Products, fruit, meat, eggs .etc...'/>
                <Image src="/assets/seach.svg" alt='search icon' height={20} width={20} className=' absolute right-[1rem] top-[17px] max-md:block'/>
            </div>
            <div className='user-and-cart flex items-center max-md:gap-4 '>
                <button onClick={() => setSearchOpen(!secrchisOpen)}>
                    <Image src="/assets/seach.svg" alt='search icon' height={20} width={20} className='hidden max-md:block'/>
                </button>
                {session ? (
                    <button onClick={logOut}>
                        <LogOut className="w-6 h-6 text-red-600" />
                    </button>
                ) : (
                    <button onClick={() => router.push("/register")}>
                        <Image src='/assets/userIcon.svg' alt='profile logo' height={24} width={24} className='p-1 border border-gray-300 rounded-[50%] size-7 max-md:hidden ' />
                    </button>
                )}
                
                <p className={`${dosis.className} font-medium text-[14px] mx-[20px] max-md:hidden`}>$0.00</p> 
                <div className="cart relative ">
                    <Image src="/assets/cartIcon.svg" alt='cart icon' height={40}  width={40} className='p-[10px] bg-[#FFF1EE] rounded-[50%] max-sm:w-[47px] ' />
                    <div className={`badge ${inter.className} top-0 right-0`}>
                        <span>0</span>
                    </div>
                </div>
            </div>

        </div>

        {/* search responsive on md and sm  */}
        { secrchisOpen &&(
            <div className="background-close fixed z-10 bg-[var(--footer-color)] w-full flex items-center justify-center top-10 py-[15px]">
                <div className="search-bar top-13.5 w-full flex justify-center">
                    <input type="search" className={`search-input-2 ${inter.className} w-[80%] border-2 border-gray-400`} placeholder='Search for Products, fruit, meat, eggs .etc...'/>
                 </div>
                <Image src="/assets/close.png" alt='close' width={15} height={20} className=' absolute top-9 right-5 opacity-30' onClick={() => setSearchOpen(false)}/>
            </div>
        )}
        {/* End search responsive on md and sm  */}

        {/* End third part  */}


        {/* fourth part category and menu */}
        <div className="head-menu ">
            <div className="categories relative inline-block">
                <button onClick={() => setCategoriesOpen(!categoriesOpen)} className="category-btn flex items-center gap-2 px-4 py-2 bg-[#F0FAFF] rounded-[12px]" >
                    <Image src="/assets/menuIcon.svg" alt="menu icon" height={14} width={14} className="max-md:hidden" />
                    <span className={`category-btn-txt ${dosis.className}`}> All categories </span>
                    <Image src="/assets/dropArrow.svg" height={10} width={10} alt="drop arrow" className={`transition-transform duration-300 ${ categoriesOpen ? "rotate-180" : "rotate-0"}`} />
                    
                </button>
                <span className={`total-product ${dosis.className} `}>total 50 Products</span>

                {/* Dropdown */}
                {categoriesOpen && (
                    <ul className={`${dosis.className} font-medium absolute left-4 mt-2 w-48 bg-white border border-gray-200 rounded-[8px] shadow-lg flex flex-col text-sm text-left`} >
                        <li className="cat-items "><a href="">Fruits</a></li>
                        <li className="cat-items "><a href="">Vegetables</a></li>
                        <li className="cat-items "><a href="">Meats</a></li>
                        <li className="cat-items "><a href="">Seafood</a></li>
                        <li className="cat-items "><a href="">Bakery</a></li>
                        <li className="cat-items "><a href="">Beverages</a></li>
                    </ul>
                )}
            </div>
            <ul className={`uppercase
                ${dosis.className} 
                font-medium flex gap-7 
                mx-10px text-[15px] 
                items-center max-lg:gap-5
                max-md:flex-wrap max-md:hidden`}>
                <li className='menu-items'>
                    <Link href="/" className={pathname === '/' ? 'active' : '' }>Home</Link>
                </li>
                <li className='menu-items'>
                    <Link href="/purchase" className={pathname === '/purchase' ? 'active' : '' }>shop</Link>
                </li>
                <li className='menu-items menu-items-icons text-nowrap max-lg:text-[14px]'>
                    <Image src="/assets/meatIcon.svg" alt='meat icon' height={20} width={20}  />
                    <Link href="#">meats & seafood</Link>
                </li>
                <li className='menu-items menu-items-icons '>
                    <Image src="/assets/bakeryIcon.svg" alt='bakeryIcon' height={20} width={20}  />
                    <Link href="#">bakery</Link>
                </li>
                <li className='menu-items menu-items-icons'>
                    <Image src="/assets/bevarage.svg" alt='bevarage icon' height={20} width={20}  />
                    <Link href="#">bevrages</Link>
                </li>
                <li className='menu-items'>
                    <Link href="blog/" className={pathname === '/blog' ? 'active' : '' }>blog</Link>
                </li>
                <li className='menu-items'>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : '' }>contact</Link>
                </li>
                
            </ul>
        </div>
        
        {/* Menu Dropdown */}
        <div className={`sticky w-full md:hidden bg-white shadow-lg border-t border-gray-200 transform transition-all duration-300 origin-top 
            ${menuOpen ? "max-h-190 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"} overflow-hidden`}>
            <ul className={`uppercase ${dosis.className} font-medium flex flex-col gap-4 p-4 text-sm text-center`} >
                {/* Categories Dropdown */}
                <li className="categories relative flex flex-col px-4 py-2 rounded-[12px]">
                    <div className='flex items-center gap-10'>
                        <button onClick={() => setCategoriesOpen(!categoriesOpen)} className="category-btn flex items-center justify-between gap-2 w-full relative" >
                            <div className="flex items-center gap-2">
                                <span className={`category-btn-txt ${dosis.className}`}> All categories </span>
                            </div>
                            <Image src="/assets/dropArrow.svg" height={10} width={10} alt="drop arrow" className={`transition-transform duration-300 ${categoriesOpen ? "rotate-180" : "rotate-0" }`}/>
                        </button>
                        <Image src='/assets/userIcon.svg' alt='profile logo' height={24} width={24} className='p-1 border border-gray-300 rounded-[50%] size-7' />

                    </div>

                    {/* Dropdown list */}
                    <ul className={`flex flex-col absolute z-10 order-1 gap-2 text-left mt-2 pl-6 transition-all duration-300 overflow-hidden ${categoriesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <li className="menu-items"><a href="#">Fruits</a></li>
                        <li className="menu-items"><a href="#">Vegetables</a></li>
                        <li className="menu-items"><a href="#">Meats</a></li>
                        <li className="menu-items"><a href="#">Seafood</a></li>
                        <li className="menu-items"><a href="#">Bakery</a></li>
                        <li className="menu-items"><a href="#">Beverages</a></li>
                    </ul>
                </li>

                {/* Rest of your menu items */}
                <li><Link href="/" className={pathname === '/' ? 'active' : '' }>home</Link></li>
                <li className="menu-items"><Link href="#" >meats & seafood</Link></li>
                <li className="menu-items"><Link href="#">bakery</Link></li>
                <li className="menu-items"><Link href="#">beverages</Link></li>
                <li className="menu-items"><Link href="/blog" className={pathname === '/blog' ? 'active' : '' }>blog</Link></li>
                <li className="menu-items"><Link href="/contact" className={pathname === '/contact' ? 'active' : '' }>contact</Link></li>
                <li className="menu-items"><Link href="/about" className={pathname === '/about' ? 'active' : '' }>About Us</Link></li>
                <li className="menu-items"><Link href="#" >compare</Link></li>
                <li className="menu-items"><Link href="#" className={pathname === '/wishlist' ? 'active' : '' }>wishlist</Link></li>
                <li className="menu-items"><Link href="purchase" className={pathname === '/purchase' ? 'active' : '' }>shop</Link></li>
            </ul>
        </div>
        {/* End fourth part category and menu */}

        <hr className='opacity-10' />
      
    </header>
    
    </>
  )
   
}

