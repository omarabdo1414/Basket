import React from 'react'
import { Inter } from "next/font/google"
import Image from 'next/image';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function Footer() {
  return (
    <>
    <footer>
      <div className={`footer-up bg-[var(--base-color)] w-full ${inter.className} py-[40px] flex relative`}>
        <div className={`text container px-[150px] py-[6px] mx-auto text-white  ${inter.className} `}>
          <span className='border-b-2 border-b-white text-[14px]'>$20 disount</span>
          <span className='text-[14px]'> for your first order</span>
          <p className='text-[20px] font-semibold'>Join our newsletter and get...</p>
          <p className='text-[12px] py-[15px]'>Join our email subscription now to get updates <br/> on promotions and coupons.</p>

          <div className={`${inter.className} email relative`}>
            <input type="email" className={` py-[20px] pl-[50px] bg-white text-[#bcbcc3] text-[12px] rounded-[3px] w-[40%]`} placeholder='Your email address ' />
            <button className=' absolute px-[18px] py-[15px] right-[10px] top-[5px] bg-[var(--base-color)] rounded-[3px] text-[12px]'>Subsecibe</button>
            <Image src="/assets/email.svg" alt='email icon' width={20} height={20} className=' absolute top-[20px] left-[20px]' />
          </div>

        </div>
        <Image src="/assets/coupon.png.png" alt='discount image' height={350} width={370} className='inline absolute bottom-[-1] right-60'/>

      </div>
    </footer>
    </>
  )
}
