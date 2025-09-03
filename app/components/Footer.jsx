import React from 'react'
import { Inter,Dosis } from "next/font/google"
import Image from 'next/image';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
});
export default function Footer() {
  return (
    <>
    
    <footer className='bg-[var(--footer-color)]'>
      {/* part-1 in footer  */}
      <div className={`footer-up ${inter.className}`}>
        <div className={`text-and-email ${inter.className}`}>
          <span className='border-b-2 border-b-white text-[14px]'>$20 disount</span>
          <span className='text-[14px]'> for your first order</span>
          <p className='text-[20px] font-semibold'>Join our newsletter and get...</p>
          <p className='text-[12px] py-[15px] opacity-50 font-300'>Join our email subscription now to get updates <br/> on promotions and coupons.</p>

          <div className={`${inter.className} email`}>
            <input type="email" className={`email-input `} placeholder='Your email address ' />
            <button className='email-btn'>Subsecibe</button>
            <Image src="/assets/email.svg" alt='email icon' width={20} height={20} className=' absolute top-[20px] left-[20px] ' />
          </div>

        </div>
        <Image src="/assets/coupon.png.png" alt='discount image' height={350} width={370} className='discount-photo '/>
      </div>
      {/* End part-1 in footer  */}

      {/* part-2 in footer  */}
      <div className={`footer-2 `}>
        <ul className={` ${inter.className} text-[12px] font-500 flex justify-around items-center max-md:flex-col max-md:gap-2 max-md:items-start text-nowrap`}>
          <li>
            <Image src="/assets/freshProduct.svg" alt='product icon' width={20} height={20} className='inline mr-3' />
            <span>Everyday fresh products</span>
          </li>
          <li>
            <span className='split'>|</span>
          </li>
          <li>
            <Image src="/assets/delivery.svg" alt='delivery icon' width={20} height={20} className='inline mr-3' />
            <span>Free delivery for order over $70</span>
          </li>
          <li>
            <span className='split'>|</span>
          </li>
          <li>
            <Image src="/assets/discount.svg" alt='discount icon' width={20} height={20} className='inline mr-3' />
            <span>Daily mega discounts</span>
          </li>
          <li>
            <span className='split'>|</span>
          </li>
          <li>
            <Image src="/assets/price.svg" alt='price icon' width={20} height={20} className='inline mr-3' />
            <span>Best price on teh market</span>
          </li>
        </ul>
      </div>
      {/* End part-2 in footer  */}

      <div className="line">
        <hr className='opacity-10 ' />
      </div>

      {/* part-3 in footer  */}
      <div className="footer-3 ">
        <div className="lists">
          <h3 className={`${dosis.className} font-medium uppercase py-2.5`}>Fruit & Vegetables</h3>
          <ul className={`${inter.className} text-gray-400 text-[12px] space-y-1`}>
            <li><a href="">Fresh Vegetables</a></li>
            <li><a href="">Herbs & Seasonings</a></li>
            <li><a href="">Fresh Fruits</a></li>
            <li><a href="">Cuts & Sprouts</a></li>
            <li><a href="">Exotic Fruits & Veggies</a></li>
            <li><a href="">Packaged Produce</a></li>
            <li><a href="">Party Trays</a></li>
          </ul>
        </div>
        <div className="lists">
          <h3 className={`${dosis.className} font-medium uppercase py-2.5`}>Breakfast & Dairy</h3>
          <ul className={`${inter.className} text-gray-400 text-[12px] space-y-1`}>
            <li><a href="">Milk & Flavoured Milk</a></li>
            <li><a href="">Butter and Margarine</a></li>
            <li><a href="">Cheese</a></li>
            <li><a href="">Eggs Substitutes</a></li>
            <li><a href="">Honey</a></li>
            <li><a href="">Marmalades</a></li>
            <li><a href="">Sour Cream and Dips</a></li>
            <li><a href="">Yogurt</a></li>
          </ul>
        </div>
        <div className="lists">
          <h3 className={`${dosis.className} font-medium uppercase py-2.5`}>Meat & Seafood</h3>
          <ul className={`${inter.className} text-gray-400 text-[12px] space-y-1`}>
            <li><a href="">Breakfast Sausage</a></li>
            <li><a href="">Dinner Sausage</a></li>
            <li><a href="">Beef</a></li>
            <li><a href="">Chicken</a></li>
            <li><a href="">Sliced Deli Meat</a></li>
            <li><a href="">Shrimp</a></li>
            <li><a href="">Wild Caught Fillets</a></li>
            <li><a href="">Crab and Shellfish</a></li>
            <li><a href="">Farm Raised Fillets</a></li>
          </ul>
        </div>
        <div className="lists">
          <h3 className={`${dosis.className} font-medium uppercase py-2.5`}>Beverages</h3>
          <ul className={`${inter.className} text-gray-400 text-[12px] space-y-1`}>
            <li><a href="">Water</a></li>
            <li><a href="">Sparkling Water</a></li>
            <li><a href="">Soda & Pop</a></li>
            <li><a href="">Coffee</a></li>
            <li><a href="">Milk & Plant-Based Milk</a></li>
            <li><a href="">Tea & Kombucha</a></li>
            <li><a href="">Drink Boxes & Pouches</a></li>
            <li><a href="">Craft Beer</a></li>
            <li><a href="">Wine</a></li>
          </ul>
        </div>
        <div className="lists">
          <h3 className={`${dosis.className} font-medium uppercase py-2.5`}>Breads & Bakery</h3>
          <ul className={`${inter.className} text-gray-400 text-[12px] space-y-1`}>
            <li><a href="">Milk & Flavoured Milk</a></li>
            <li><a href="">Butter and Margarine</a></li>
            <li><a href="">Cheese</a></li>
            <li><a href="">Eggs Substitutes</a></li>
            <li><a href="">Honey</a></li>
            <li><a href="">Marmalades</a></li>
            <li><a href="">Sour Cream and Dips</a></li>
            <li><a href="">Yogurt</a></li>
          </ul>
        </div>
      </div>
      {/* End part-3 in footer  */}

      {/* part-4-5  */}
      <div className="same-color bg-white">
        {/* part-4  */}
        <div className="footer-4 ">
          <div className="phone flex items-center gap-3">
            <a href="tel:8800555-55"><Image src="/assets/telephone.svg" alt='phone' width={40} height={40} /></a>
            <div className={`info ${inter.className}`}>
              <p className='font-bold'>8 800 555-55</p>
              <p className='text-[10px] text-gray-400'>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="download-social flex items-center max-md:flex-col max-md:gap-4 ">
            <div className='flex max-sm:block'>
              <div className={`${inter.className} flex flex-col items-end mr-[20px]`}>
              <p className='text-[12px] font-bold'>Download App on Mobile :</p>
              <p className='text-[10px] text-gray-400 text-nowrap'>15% discount on your first purchase</p>
              </div>
              <div className="google-app-store flex max-md:flex ">
                <a href=""><Image src="/assets/google-play.png.png" alt='google play' width={120} height={50} className='mr-[4px]' /></a>
                <a href=""><Image src="/assets/app-store.png.png" alt='App store' width={120} height={50} /></a>
              </div>
            </div>
            <div className="social flex gap-1.5 ml-[15px]">
              <a href=""><Image src="/assets/facebook2.png" alt='App store' width={30} height={30} /></a>
              <a href=""><Image src="/assets/twitter.png" alt='App store' width={30} height={30} /></a>
              <a href=""><Image src="/assets/instagram.png" alt='App store' width={30} height={30} /></a>
            </div>
          </div>
        </div>
        {/* End part-4  */}

        <div className="line ">
          <hr className='opacity-10 ' />
        </div>

        {/* part-5  */}
        <div className={`footer-last ${inter.className} `}>
          <div className="copy-right">
            <span>Copyright 2025 </span> &copy; <span> All rights reserved by Blackrise Theme</span>
          </div>
          <ul className='flex gap-2 items-center text-nowrap max-sm:flex-wrap'>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie</li>
            <li><Image src="/assets/payments.jpg.png" alt='App store' width={280} height={30} /></li>
          </ul>
        </div>
        {/* End part-5  */}
      </div>
      {/* End part-4-5  */}


    
    </footer>
    </>
  )
}
