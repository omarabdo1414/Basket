"use client";

import Image1 from "../../assets/baverages-1.jpg.png";
import Image2 from "../../assets/bacola-banner-05.jpg.png";
import Image3 from "../../assets/bacola-banner-06.jpg.png";
import Image4 from "../../assets/bacola-banner-10.jpg.png";
import Image5 from "../../assets/category-banner-2.jpg.png";
import Image6 from "../../assets/category-banner-1.jpg.png";
import Image7 from "../../assets/banner-box2.jpg.png";
import Image8 from "../../assets/slider-image-8.jpg.png";
import Image9 from "../../assets/sidebar-banner.gif.png";
import Image10 from "../../assets/home-banner-15.jpg.png";
import Image11 from "../../assets/home-banner-16.jpg.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
export default function Home() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth;
      sliderRef.current.scrollBy({ left: -cardWidth * 5, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth;
      sliderRef.current.scrollBy({ left: cardWidth * 5, behavior: "smooth" });
    }
  };

  const products = [
    {
      id: 1,
      name: "Yogurt",
      price: 3.29,
      oldPrice: 8.29,
      stock: 17,
      discount: "60%",
      img: Image1,
      rating: 5,
    },
    {
      id: 2,
      name: "Milk",
      price: 2.5,
      oldPrice: 5.0,
      stock: 20,
      discount: "50%",
      img: Image1,
      rating: 4,
    },
    {
      id: 3,
      name: "Cheese",
      price: 4.0,
      oldPrice: 7.0,
      stock: 10,
      discount: "40%",
      img: Image1,
      rating: 3,
    },
    {
      id: 4,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 5,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 6,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 7,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 8,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 9,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 10,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 11,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 12,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 13,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
    {
      id: 14,
      name: "Butter",
      price: 6.0,
      oldPrice: 9.0,
      stock: 8,
      discount: "30%",
      img: Image1,
      rating: 5,
    },
  ];
  return (
    <>
      {/* images section */}
      <section className=" mx-auto    lg:px-16 xl:px-40  vh-100">
        <div className="grid grid-cols-1  place-items-center md:grid-cols-1 lg:grid-cols-3">
          <div className="relative  col-span-1 lg:col-span-2 w-full h-full">
            <Image
              src={Image8}
              alt="juice product "
              className=" rounded-lg cont w-full h-full"
            />
            <div className="home-first absolute left-20 top-20 space-y-2">
              <div>
                <p className=" text-[#202435] text-sm mb-3">
                  Exclusive Offer{" "}
                  <span className="text-sm text-[#038E42] bg-gradient-to-r from-[#9edbb9] from-[20%] to-white to-[95%] font-semibold rounded-2xl px-2 py-1">
                    -20% OFF
                  </span>{" "}
                </p>
                <h2 className="text-[#202435] font-bold text-5xl mb-1 ">
                  Feed your family <br /> the best{" "}
                </h2>
              </div>
              <p className="text-[#202435] mb-4 text-xs">
                Only this week. Don’t miss...{" "}
              </p>
              <p className="text-[#202435] mb-4 text-xs pt-1">
                from{" "}
                <span className="text-[#D51243] text-2xl font-semibold">
                  $7.99
                </span>
              </p>
              <Link
                href="/shop"
                className="bg-[#35AFA0] mt-2 flex w-fit items-center justify-center rounded-4xl text-white mt-2 py-2 px-4 text-sm"
              >
                <span> Shop Now</span>{" "}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>{" "}
          </div>

          <div className="col-span-1 w-full h-full place-items-center ">
            {" "}
            <Image
              src={Image9}
              alt="happy product w-full h-full"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-center bg-red-600 mt-5">
          <div className="relative w-full h-full ">
            <Image
              src={Image10}
              alt="juice product"
              className="col-span-1 rounded-lg"
            />
            <div className="home-first absolute  right-20 top-14 space-y-2">
              <div>
                <p className=" text-[#202435] ">Everything is so fresh </p>
                <h3 className="text-[#3E445A] font-semibold text-3xl ">
                  only in Bacola{" "}
                </h3>
              </div>
              <p className="text-[#9B9BB4] mb-4 text-xs">
                Bacola Weekend Discount
              </p>
              <Link
                href="/shop"
                className="bg-[#233A95] rounded-4xl text-white mt-2 py-2 px-4 text-sm"
              >
                Shop Now
              </Link>
            </div>{" "}
          </div>
          <div className="relative w-full h-full ">
            <Image
              src={Image11}
              alt="happy product"
              className="col-span-1 rounded-lg"
            />{" "}
            <div className="home-first absolute right-20 top-14 space-y-2">
              <div>
                <p className=" text-[#202435] ">Big discount on </p>
                <h3 className="text-[#3E445A] font-semibold text-3xl ">
                  organic legumes{" "}
                </h3>
              </div>
              <p className="text-[#9B9BB4] mb-4 text-xs">
                Bacola Weekend Discount{" "}
              </p>
              <Link
                href="/shop"
                className="bg-[#233A95] rounded-4xl text-white mt-2 py-2 px-4 text-sm"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Slider of best seller and  Banner section  */}
      <section className="container  mx-auto px-40 py-2  ">
        <div className="home-page flex justify-between mb-5">
          <div>
            <h2 className="uppercase text-xl text-[#202435] font-semibold">
              Best Sellers
            </h2>
            <p className="text-[#9B9BB4] text-sm">
              Do not miss the current offers until the end of March.{" "}
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  mt-2 py-1 text-sm px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="relative border-2 border-[#EDEEF5] rounded-lg ">
          {/* Buttons of slider*/}
          <button
            onClick={scrollLeft}
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth w-full"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative min-w-[20%] max-w-[20%] px-6 space-y-1 border-r-2 border-[#EDEEF5] flex flex-col justify-center py-4 snap-start"
              >
                <Image src={product.img} alt={product.name} />
                <h4 className="text-sm font-semibold">{product.name}</h4>
                <p className="text-[#00B853] uppercase font-semibold text-sm">
                  {product.stock} In stock
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ⭐ {product.rating}
                  <span className="text-[#71778E] font-semibold ml-2 text-sm">
                    <p>review</p>
                  </span>
                </div>
                <div>
                  <span className="text-[#C2C2D3] line-through font-semibold">
                    ${product.oldPrice}
                  </span>{" "}
                  <span className="text-[#D51243] font-semibold">
                    ${product.price}
                  </span>
                </div>
                <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                  {product.discount}
                </p>
                <button className="text-[#35AFA0] border rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* banner */}
        <div className="bg-[#F8EFEA] rounded-lg flex gap-3 justify-around items-center mt-4">
          <p className="text-[#00B853] text-lg">
            <span className=" font-semibold"> 100% Secure delivery </span>
            without contacting the courier
          </p>
          <Image src={Image7} alt="group" />
          <Link
            href="/shop"
            className="bg-[#00B853] rounded-4xl text-white mt-2 py-2 px-4"
          >
            Shop Now
          </Link>
        </div>
      </section>{" "}
      {/* Fruit & vegtables - red banner section  */}
      <section className="container mx-auto px-40 py-2  ">
        <div className="home-page flex justify-between">
          <div>
            <h2 className="uppercase text-xl text-[#202435] font-semibold">
              FRUIT & VEGETABLES{" "}
            </h2>
            <p className="text-[#9B9BB4] text-sm">
              The freshest green grocer products are waiting for you{" "}
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  mt-2 py-1 text-sm px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid  grid-cols-6 border-2 border-[#EDEEF5] mt-10 rounded-lg">
          <div className="col-span-2 relative">
            <Image
              src={Image6}
              alt="grocery"
              className="w-full h-1/2  rounded-tl-lg"
            />
            <div className="home-page absolute left-7 top-10 space-y-2">
              <div>
                <p className=" text-[#202435] font-semibold">
                  Weekly Discounts on
                </p>
                <h3 className="text-[#202435] font-semibold text-3xl ">
                  Fruits and Vegetables{" "}
                </h3>
              </div>
              <p className="text-[#202435] mb-4">Bacola Weekend Discount</p>
              <Link
                href="/shop"
                className="bg-[#233A95] rounded-4xl text-white mt-2 py-2 px-4"
              >
                View All
              </Link>
            </div>{" "}
            <ul className="grid grid-cols-2 home-page p-5 space-y-1 mb-20">
              <li className="text-[#3E445A]">Beverages</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
            </ul>
            <p className="flex pl-5 text-[#233A95] items-center mb-4 font-semibold">
              View All <ArrowRightIcon className="w-4 h-4" />
            </p>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
            <div className="relative px-4  flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
            <div className="relative px-4  flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
            <div className="relative px-4  flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
            <div className="relative px-4  flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                <span>17 </span>In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
              <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* red banner */}
        <div className="bg-[#FFEEF2] rounded-lg flex gap-3 justify-center py-4 items-center mt-4">
          <p className="text-[#ED174A] ">
            Super discount for your{" "}
            <span className="underline font-semibold">first purchase.</span>
          </p>
          <p className="text-[#ED174A] border-dashed border-[#FF6048] border-1 rounded-2xl px-2 py-1 font-semibold ">
            FREE25BAC
          </p>
          <p className="text-sm text-[#9B9BB4] ">
            Use discount code in checkout!
          </p>
        </div>
      </section>
      {/* Breakfast & Dairy */}
      <section className="container mx-auto px-40 py-2  ">
        <div className="home-page flex justify-between">
          <div>
            <h2 className="uppercase text-xl text-[#202435] font-semibold">
              Breakfast & Dairy
            </h2>
            <p className="text-[#9B9BB4]">
              Do not miss the current offers until the end of month.
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  mt-2 py-1 text-sm px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 border-2 border-[#EDEEF5] mt-10 rounded-lg">
          <div className="col-span-2 relative">
            <Image
              src={Image5}
              alt="grocery"
              className="w-full h-1/2  rounded-tl-lg"
            />
            <div className="home-page absolute left-7 top-10 space-y-2">
              <div>
                <p className=" text-[#202435] font-semibold">
                  Weekly Discounts on
                </p>
                <h3 className="text-[#202435] font-semibold text-3xl ">
                  Breakfast and Dairy
                </h3>
              </div>
              <p className="text-[#202435] mb-4">Bacola Weekend Discount</p>
              <Link
                href="/shop"
                className="bg-[#233A95] rounded-4xl text-white mt-2 py-2 px-4"
              >
                View All
              </Link>
            </div>{" "}
            <ul className="grid grid-cols-2 home-page p-5 space-y-1 mb-20">
              <li className="text-[#3E445A]">Beverages</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
              <li className="text-[#3E445A]">Breads & Bakery</li>
            </ul>
            <p className="flex pl-5 text-[#233A95] items-center mb-4 font-semibold">
              View All <ArrowRightIcon className="w-4 h-4" />
            </p>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
            <div className="relative px-4 flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
            <div className="relative px-4 flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
            <div className="relative px-4 flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
          </div>
          <div className="h-page border-l-2 border-[#EDEEF5]">
            <div className="relative px-4 border-b-2  border-[#EDEEF5] flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
            <div className="relative px-4  flex flex-col justify-center h-1/2  ">
              <Image src={Image1} alt="anything" />
              <h4 className="vegetables-section text-sm font-semibold">
                Chobani Complete Vanilla Greek Yogurt
              </h4>
              <p className="text-[#00B853] uppercase font-semibold text-sm">
                In stock
              </p>
              <div className="flex items-center">
                {" "}
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <StarIcon className="size-4 text-yellow-500" />
                <div className="text-[#71778E] font-semibold ml-2 text-sm">
                  <p>review</p>
                </div>
              </div>
              <div>
                <span className="text-[#C2C2D3] line-through font-semibold">
                  $8.29
                </span>{" "}
                <span className="text-[#D51243]  font-semibold">$3.29</span>
              </div>
              <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                60%
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* weekend Discount section */}
      <section className="container mx-auto px-40 py-2 grid grid-cols-3 gap-14 ">
        <div className="relative flex justify-center items-center">
          <Image src={Image2} alt="eggs" className="rounded-md w-full" />
          <div className="home-page absolute left-5 top-10 space-y-2">
            <p className="discount text-[#00B853] font-semibold">
              WEEKEND DISCOUNT 40%
            </p>
            <h3 className="text-[#3E445A] font-semibold text-3xl ">
              Natural Eggs
            </h3>
            <p className="text-[#9B9BB4] mb-4">Eat one every day</p>
            <Link
              href="/shop"
              className="bg-[#C2C2D3] rounded-4xl text-white mt-2 py-2 px-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={Image4} alt="eggs" className="rounded-md w-full" />
          <div className="home-page absolute left-5 top-10 space-y-2">
            <p className="discount text-[#00B853] font-semibold">
              WEEKEND DISCOUNT 40%
            </p>
            <h3 className="text-[#3E445A] font-semibold text-3xl ">
              Taste the Best
            </h3>
            <p className="text-[#9B9BB4] mb-4">Shine the morning</p>
            <Link
              href="/shop"
              className="bg-[#C2C2D3] rounded-4xl text-white mt-2 py-2 px-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src={Image3} alt="eggs" className="rounded-md w-full" />
          <div className="home-page absolute left-5 top-10 space-y-2">
            <p className="discount text-[#00B853] font-semibold">
              WEEKEND DISCOUNT 40%
            </p>
            <h3 className="text-[#3E445A] font-semibold text-3xl ">
              Ditch the Junk
            </h3>
            <p className="text-[#9B9BB4] mb-4">Breakfast made better</p>
            <Link
              href="/shop"
              className="bg-[#C2C2D3] rounded-4xl text-white mt-2 py-2 px-4"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="container mx-auto px-40 py-2  ">
        <div className="border-1 border-[#EDEEF5] grid grid-cols-5 rounded-lg">
          {" "}
          <div className="flex flex-col justify-center items-center pr-3">
            <Image src={Image1} alt="anything" />
            <p>Beverages</p>
            <p>11 items</p>
          </div>
          <div className="border-l-1 border-[#EDEEF5]">
            <div className=" flex   items-center border-b-1  border-[#EDEEF5] pr-3">
              <Image src={Image1} alt="anything" />
              <div className="">
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
            <div className=" flex  justify-center items-center pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
          </div>
          <div className="border-l-1 border-[#EDEEF5]">
            <div className=" flex  justify-center items-center  border-b-1  border-[#EDEEF5] pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
            <div className=" flex  justify-center items-center pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
          </div>
          <div className="border-l-1 border-[#EDEEF5]">
            <div className=" flex  justify-center items-center  border-b-1  border-[#EDEEF5] pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
            <div className=" flex  justify-center items-center pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
          </div>
          <div className="border-l-1 border-[#EDEEF5]">
            <div className=" flex  justify-center items-center h-1/2  border-b-1  border-[#EDEEF5] pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
            <div className=" flex  justify-center items-center h-1/2 pr-3">
              <Image src={Image1} alt="anything" />
              <div>
                <p>Beverages</p>
                <p>11 items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
