import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaReddit, FaPinterest } from "react-icons/fa";
import Image from 'next/image';

export default function Blog() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12 md:flex md:gap-8">
        
        {/* Blog Posts */}
        <div className="md:w-3/4 mb-12 md:mb-0">
          {/* Blog Post 1 */}
          <div className="mb-12">
            <Image
              src="/assets/blog-3.jpg.png"
              alt="blog-img-1"
              width={1000}
              height={40}
              className="w-full h-auto rounded-lg "
            />
            <p className="text-sm text-gray-500 mt-3 uppercase">Grocery</p>
            <h2 className="text-2xl font-bold mt-2">
              But I must explain to you how all this mistaken <br />
              idea
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <span className="mr-4">Jan 13 2025</span>
              <span className=" text-gray-800">Sinan ISIK</span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
              vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>

          {/* Blog Post 2 */}
          <div>
            <Image
              src="/assets/blog-5.jpg.png"
              alt="blog-img-2"
              width={1000}
              height={40}
              className="w-full h-auto rounded-lg "
            />
            <p className="text-sm text-gray-500 mt-3 uppercase">Grocery</p>
            <h2 className="text-2xl font-bold mt-2">
              The Problem With Typefaces on the Web
            </h2>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <span className="mr-4">Jan 13 2025</span>
              <span className=" text-gray-800">Sinan ISIK</span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero,
              vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...
            </p>
          </div>
        </div>

        {/*  Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-8">

          {/* Container 1 */}
          <div className='border rounded-sm p-3'>
            <h2 className="text-xl  mb-4 uppercase">Recent Posts</h2>

            {/* Box 1 */}
            <div className="flex items-center gap-3  p-3  mb-3 relative">
              <div className="relative">
                <Image
                  src="/assets/blog-3.jpg.png"
                  alt="post"
                  width={70} height={50}
                  className="w-[70px] h-[50px] md:w-[90px] md:h-[40px] object-cover rounded-full "
                />
                <span className="absolute -top-2 -right-2 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold" style={{backgroundColor:"#35AFA0"}}>
                  1
                </span>
              </div>
              <p className="text-gray-800 text-sm">
                But I must explain to you how all this mistaken idea
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex items-center gap-3  p-3  mb-3 relative">
              <div className="relative">
                <Image
                  src="/assets/blog-5.jpg.png"
                  alt="post"
                  width={70} height={50}
                  className="w-[70px] h-[50px] md:w-[90px] md:h-[40px] object-cover rounded-full "
                />
                <span className="absolute -top-2 -right-2 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold" style={{backgroundColor:"#35AFA0"}}>
                  2
                </span>
              </div>
              <p className="text-gray-800 text-sm">
                The Problem With Typefaces on the Web
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex items-center gap-3  p-3  relative">
              <div className="relative">
                <Image
                  src="/assets/blog-1.jpg.png"
                  alt="post"
                  width={70} height={50}
                  className="w-[70px] h-[50px] md:w-[90px] md:h-[40px] object-cover rounded-full "
                />
                <span className="absolute -top-2 -right-2  text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold "style={{backgroundColor:"#35AFA0"}}>
                  3
                </span>
              </div>
              <p className="text-gray-800 text-sm ">
                 English Breakfast Tea With Tasty Donut Desserts
              </p>
            </div>
          </div>

          {/* Container 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4 uppercase">social media</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white px-3 py-2 rounded-lg uppercase text-sm" style={{backgroundColor:"#3B5998"}}>
                <FaFacebookF /> Facebook
              </div>
              <div className="flex items-center gap-2  text-white px-3 py-2 rounded-lg uppercase text-sm" style={{backgroundColor:"#CC2366"}}>
                <FaInstagram /> Instagram
              </div>
               <div className="flex items-center gap-2  text-white px-3 py-2 rounded-lg uppercase text-sm"style={{backgroundColor:"#1DA1F2"}}>
                 <FaTwitter /> Twitter
               </div>
               <div className="flex items-center gap-2  text-white px-3 py-2 rounded-lg uppercase text-sm" style={{backgroundColor:"#FF4500"}}>
                <FaReddit /> Reddit
               </div>
                <div className="flex items-center gap-2  text-white px-3 py-2 rounded-lg uppercase text-sm" style={{backgroundColor:"#E60023"}}>
                <FaPinterest /> Pinterest
                </div>
             </div>
            </div>
             {/* Container 3 */}
             <div className='flex flex-col items-center sm:items-start'>
              <h3 className='uppercase text-semibold mb-4 '>widget banner</h3>
              <Image
               src="/assets/sidebar-banner.gif.png" 
               alt="side-image"
               width={100} height={100}/>
             </div>
             {/* Container 4 */}
             <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">TAGS</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                <div className="border px-1 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">ecommerce</div>
                <div className="border px-1 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">food</div>
                <div className="border px-1 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">grocery</div>
                <div className="border px-2 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">klbtheme</div>
                <div className="border px-2 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">oraganic</div>
                <div className="border px-2 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">shop</div>
                <div className="border px-2 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">shopify</div>
                <div className="border px-2 py-2 rounded-lg text-center transition duration-300 hover:bg-[#35AFA0] hover:text-white cursor-pointer text-xs">store</div>
              </div>
            </div>

         </div>
         
      </div>
    </>
  )
}
