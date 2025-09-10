"use client";

import Image1 from "../../public/assets/baverages-1.jpg.png";
import Image2 from "../../public/assets/bacola-banner-05.jpg.png";
import Image3 from "../../public/assets/bacola-banner-06.jpg.png";
import Image4 from "../../public/assets/bacola-banner-10.jpg.png";
import Image5 from "../../public/assets/category-banner-2.jpg.png";
import Image6 from "../../public/assets/category-banner-1.jpg.png";
import Image7 from "../../public/assets/banner-box2.jpg.png";
import Image8 from "../../public/assets/slider-image-8.jpg.png";
import Image9 from "../../public/assets/sidebar-banner.gif.png";
import Image10 from "../../public/assets/home-banner-15.jpg.png";
import Image11 from "../../public/assets/home-banner-16.jpg.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRef ,useEffect ,useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { supabaseAuth } from "../../lib/supabaseAuthClient";
import { supabaseProducts } from "../../lib/supabaseProductsClient";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth;
      sliderRef.current.scrollBy({ left: -cardWidth * 2, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild.offsetWidth;
      sliderRef.current.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
    }
  };

  // const products = [
  //   {
  //     id: 1,
  //     name: "Yogurt",
  //     price: 3.29,
  //     oldPrice: 8.29,
  //     stock: 17,
  //     discount: "60%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "Milk",
  //     price: 2.5,
  //     oldPrice: 5.0,
  //     stock: 20,
  //     discount: "50%",
  //     img: Image1,
  //     rating: 4,
  //   },
  //   {
  //     id: 3,
  //     name: "Cheese",
  //     price: 4.0,
  //     oldPrice: 7.0,
  //     stock: 10,
  //     discount: "40%",
  //     img: Image1,
  //     rating: 3,
  //   },
  //   {
  //     id: 4,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 5,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 6,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 7,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 8,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 9,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 10,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 11,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 12,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 13,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  //   {
  //     id: 14,
  //     name: "Butter",
  //     price: 6.0,
  //     oldPrice: 9.0,
  //     stock: 8,
  //     discount: "30%",
  //     img: Image1,
  //     rating: 5,
  //   },
  // ];
  const categories = [
    { id: 1, name: "Beverages", count: 1, img: Image1 },
    { id: 2, name: "Snacks", count: 2, img: Image1 },
    { id: 3, name: "Dairy", count: 3, img: Image1 },
    { id: 4, name: "Fruits", count: 4, img: Image1 },
    { id: 5, name: "Vegetables", count: 5, img: Image1 },
    { id: 6, name: "Vegetables", count: 6, img: Image1 },
    { id: 7, name: "Vegetables", count: 77, img: Image1 },
    { id: 8, name: "Vegetables", count: 88, img: Image1 },
    { id: 9, name: "Vegetables", count: 99, img: Image1 },
  ];

  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);

  const router = useRouter();

  const AddToCart = async (product) => {
    const { data: { session } } = await supabaseAuth.auth.getSession();

    if (!session) {
      router.push("/register");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert('Added to cart');
  };
  
   useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabaseProducts
        .from("products")
        .select("*"); 

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchCategories= async () => {
  //     const { data, error } = await supabaseProducts
  //       .from("categories")
  //       .select("*"); 

  //     if (error) {
  //       console.error("Error fetching categores:", error.message);
  //     } else {
  //       setCategories(data);
  //     }
  //   };

  //   fetchCategories();
  // }, []);

  return (

    <>
      {/* images section */}
      <section className=" mx-auto    lg:px-16 xl:px-40  vh-100">
        <div className="grid grid-cols-1  place-items-center md:grid-cols-1 lg:grid-cols-3 ">
          <div className="relative  col-span-1 lg:col-span-2 w-full h-full -z-10">
            <Image
              src={Image8}
              alt="juice product "
              className=" rounded-lg cont w-full h-full "
            />
            <div className="home-first absolute left-10 top-5   lg:left-20 md:top-20 space-y-2">
              <div>
                <p className=" text-[#202435] text-sm mb-3">
                  Exclusive Offer{" "}
                  <span className="text-sm text-[#038E42] bg-gradient-to-r from-[#9edbb9] from-[20%] to-white to-[95%] font-semibold rounded-2xl lg:px-2 py-1">
                    -20% OFF
                  </span>{" "}
                </p>
                <h2 className="text-[#202435] font-bold text-md md:text-5xl mb-1 ">
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
                className="bg-[#35AFA0] mt-2 flex w-fit items-center justify-center rounded-4xl text-white py-2 px-4 text-sm"
              >
                <span> Shop Now</span>{" "}
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>{" "}
          </div>

          <div className="col-span-1 hidden lg:block place-items-end  w-full h-full  ">
            {" "}
            <Image
              src={Image9}
              alt="happy product w-full h-full"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:gap-4 px-2 lg:px-0  place-content-center place-items-center  md:grid-cols-2   mt-5">
          <div className="relative w-full place-items-stretch place-content-stretch  mb-2 md:mb-0 h-full ">
            <Image
              src={Image10}
              alt="juice product"
              className="col-span-1 rounded-lg w-full "
            />
            <div className="home-first absolute right-2 top-7 md:top-7 md:right-4 lg:right-20 lg:top-14 space-y-2">
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
          <div className="relative  w-full place-items-stretch h-full ">
            <Image
              src={Image11}
              alt="happy product"
              className="col-span-1 rounded-lg w-full"
            />{" "}
            <div className="home-first absolute right-4 top-7 md:top-7 md:right-1 lg:right-20 lg:top-14 space-y-2">
              <div>
                <p className=" text-[#202435] ">Big discount on </p>
                <h3 className="text-[#3E445A] font-semibold text-2xl md:text-3xl ">
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
      <section className="container  mx-auto px-2 lg:px-40 py-2  ">
        <div className="home-page flex justify-between mb-5">
          <div>
            <h2 className="uppercase text-md md:text-xl text-[#202435] font-semibold">
              Best Sellers
            </h2>
            <p className="text-[#9B9BB4] text-xs md:text-sm">
              Do not miss the current offers until the end of March.{" "}
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  mt-2 py-1 text-xs lg:text-sm px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="relative border-2 border-[#EDEEF5] rounded-lg ">
          {/* Buttons of slider*/}
          <button
            onClick={scrollLeft}
            className="absolute -left-3  top-1/2 -translate-y-1/2 bg-white shadow-md p-1 rounded-full z-10"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-1 rounded-full z-10"
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
                className="relative min-w-[50%] max-w-[50%] lg:min-w-[20%] lg:max-w-[20%] px-6 space-y-1 border-r-2 border-[#EDEEF5] flex flex-col justify-center py-4 snap-start"
              >
                <Image
                  src={product.img_url}
                  alt={product.title}
                  className="w-full h-full"
                  width={200} height={10}
                />
                <h4 className="text-sm font-semibold">{product.title}</h4>
                <p className="text-[#00B853] uppercase font-semibold text-sm">
                  {product.is_stoke} In stock
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  ⭐ {product.stars}
                  <span className="text-[#71778E] font-semibold ml-2 text-sm">
                    <p>review</p>
                  </span>
                </div>
                <div>
                  <span className="text-[#C2C2D3] line-through font-semibold">
                    ${product.price}
                  </span>{" "}
                  <span className="text-[#D51243] font-semibold">
                    ${product.price_after_sale}
                  </span>
                </div>
                <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                  50%
                </p>
                <button className="text-[#35AFA0] border rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer" onClick={()=>{AddToCart(product)}}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* banner */}
        <div className="bg-[#F8EFEA] rounded-lg flex  lg:gap-3 justify-around items-center mt-4 md:px-2">
          <p className="text-[#00B853] text-xs md:text-sm w-[50%] md:w-[30%]">
            <span className=" font-semibold"> 100% Secure delivery </span>{" "}
            without contacting the courier
          </p>
          <Image src={Image7} alt="group" className="w-[25%] h-[70px]" />
          <Link
            href="/shop"
            className="bg-[#00B853] rounded-4xl text-white text-sm mt-2 py-2 px-2 lg:px-4"
          >
            Shop Now
          </Link>
        </div>
      </section>
      {/* Fruit & vegtables - red banner section  */}
      <section className="container mx-auto px-2 lg:px-40 py-2  ">
        <div className="home-page flex justify-between">
          <div>
            <h2 className="uppercase text-md md:text-xl text-[#202435] font-semibold">
              FRUIT & VEGETABLES{" "}
            </h2>
            <p className="text-[#9B9BB4] text-xs  md:text-sm">
              The freshest green grocer products are waiting for you{" "}
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  mt-2 py-1 text-xs md:text-sm px-1 md:px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 border-1 border-[#EDEEF5] mt-2 md:mt-10 rounded-lg">
          <div className="col-span-1 md:col-span-2 relative ">
            <Image
              src={Image6}
              alt="grocery"
              className="w-full   lg:h-1/2  rounded-tl-lg"
            />
            <div className="home-page absolute top-28 left-7 md:top-10 space-y-2">
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
            <ul className=" grid grid-cols-1 lg:grid-cols-2 home-page px-5 py-1 md:p-5 space-y-1 md:mb-20">
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
            <p className="flex pl-5 text-[#233A95] items-center lg:mb-4 font-semibold">
              View All <ArrowRightIcon className="w-4 h-4" />
            </p>
          </div>
          <div className="h-page col-span-2 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="relative px-4 border-1 border-[#EDEEF5]  flex flex-col justify-center pb-2 lg:pb-0 "
              >
                <Image src={product.img_url} alt="anything" width={150} height={150}/>
                <h4 className="vegetables-section text-sm font-semibold">
                  {product.title}
                </h4>
                <p className="text-[#00B853] uppercase font-semibold text-sm">
                  <span>{product.amount_in_stoke} </span>In stock
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
                    {product.price}
                  </span>{" "}
                  <span className="text-[#D51243]  font-semibold">{product.price_after_sale}</span>
                </div>
                <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                  60%
                </p>
                <button className="text-[#35AFA0] border-1 rounded-2xl py-0.5 mt-2 border-[#35AFA0] px-2 cursor-pointer" onClick={()=>{AddToCart(product)}}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* red banner */}
        <div className="bg-[#FFEEF2] rounded-lg flex flex-col md:flex-row gap-3 justify-center py-4 items-center mt-4">
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
      <section className="container mx-auto px-2 lg:px-40 py-2  ">
        <div className="home-page flex justify-between">
          <div>
            <h2 className="uppercase text-md md:text-xl text-[#202435] font-semibold">
              Breakfast & Dairy
            </h2>
            <p className="text-[#9B9BB4] text-xs md:text-sm">
              Do not miss the current offers until the end of month.
            </p>
          </div>
          <div>
            <Link
              href="/shop"
              className="text-[#D9D9E9] flex justify-center items-center rounded-4xl border-2 border-[#D9D9E9]  md:mt-2 py-1 text-sm px-1 md:px-4"
            >
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 border-2 border-[#EDEEF5] mt-2 md:mt-10 rounded-lg">
          <div className="col-span-1 md:col-span-2 relative border-1 border-[#EDEEF5]">
            <Image
              src={Image5}
              alt="grocery"
              className="w-full lg:h-1/2  rounded-tl-lg"
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
            <ul className="grid lg:grid-cols-2 home-page px-5 py-1 md:mb-20">
              {products.map((prod)=>(
                <li className="text-[#3E445A]" key={prod.id}>{prod.title}</li>
              )
              )
              }
            </ul>
            <p className="flex pl-4 -mt-10 text-[#233A95] items-center lg:mb-4 font-semibold">
              View All <ArrowRightIcon className="w-4 h-4" />
            </p>
          </div>
          <div className="h-page col-span-2 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 8).map((product) => (
              <div className="relative px-4 border-1  border-[#EDEEF5] flex flex-col justify-center" key={product.id}>
                <Image src={product.img_url} alt="anything" width={300} height={100} />
                <h4 className="vegetables-section text-sm font-semibold">
                  {product.title}
                </h4>
                <p className="text-[#00B853] uppercase font-semibold text-sm">
                  {product.amount_in_stoke} In stock
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
                    {product.price}
                  </span>{" "}
                  <span className="text-[#D51243]  font-semibold">{product.price_after_sale}</span>
                </div>
                <p className="bg-[#35AFA0] text-white font-semibold w-fit rounded-lg px-1 text-sm absolute top-5 left-4">
                  60%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* weekend Discount section */}
      <section className="container mx-auto lg:px-40 py-2 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-14 ">
        <div className="relative flex justify-center items-center">
          <Image src={Image2} alt="eggs" className="rounded-md w-full" />
          <div className="home-page absolute left-12 md:left-16 top-11 md:top-28 lg:left-5 lg:top-10 space-y-2">
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
          <div className="home-page absolute left-12 md:left-16 top-11 md:top-28 lg:left-5 lg:top-10 space-y-2">
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
          <div className="home-page absolute left-12 md:left-16 top-11 md:top-28 lg:left-5 lg:top-10 space-y-2">
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
      <section className="container mx-auto px-2 lg:px-40 py-2  ">
        <div className=" border-[#EDEEF5] grid grid-cols-2 md:grid-cols-5 rounded-lg">
          {" "}
          <div className="col-span-2 md:col-span-1 border-1 border-[#EDEEF5] flex  flex-col justify-center items-center pr-3 ">
            <Image src={Image1} alt="anything" />
            <p>Beverages</p>
            <p>11 items</p>
          </div>
          <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4">
            {categories.slice(1).map((cat) => (
              <div
                key={cat.id}
                className=" flex   items-center border-1  border-[#EDEEF5] pr-3"
              >
                <Image src={cat.img} alt="anything" width={300} height={100} />
                <div className="">
                  <p>{cat.title}</p>
                  <p>{cat.count} items</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
