"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

const deals = [
  {
    id: "1",
    title: "iPhone 14 Pro Max",
    price: "$1149.00",
    imageUrl: "/Assets/slider4 (1).webp",
  },
  {
    id: "2",
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    imageUrl: "/Assets/slider4 (2).webp",
  },
  {
    id: "3",
    title: "Leather Ladies Bag",
    price: "$15.00",
    imageUrl: "/Assets/slider4 (3).webp",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra",
    price: "$1150.00",
    imageUrl: "/Assets/slider4 (4).webp",
  },
  {
    id: "5",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider4 (5).webp",
  },
  {
    id: "6",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider4 (6).webp",
  },
  {
    id: "7",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider4 (7).webp",
  }
];

const ClearanceSale = () => (
  <div className="px-4 md:px-12 md:py-4 -mt-7 md:-mt-0">
    <div className="md:pb-6 bg-white md:bg-gray-100 md:shadow md:rounded-lg  md:px-12">
      <div className="flex justify-between md:pt-5 pt-16">
        <span className="relative ">
        <p className=" absolute text-blue-900 top-6 left-10 font-bold text-[0.75rem]">Save More</p>
        <p className=" absolute text-white font-bold top-12 left-4 text-[1.15rem]">Clearance Sale</p>
         <Image
  src="/image/title.svg"
  alt="title"
  width={200}    // adjust based on actual size or desired layout
  height={95}
  className="h-20"
/>
        </span>
        <h1 className="cursor-pointer md:-mr-6 -mr-0 relative top-7 md:top-0 text-blue-800 md:text-[0.95rem] text-[0.9rem]  flex items-center gap-2 ">
          View All <SlArrowRight className="text-[0.75rem]" />
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        speed={200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="px-6 mt-4"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="flex flex-col items-center gap-2 bg-white mt-8 md:mt-0 border md:border-none  rounded-md relative py-2">
              <button className=" left-2 absolute z-50 bg-blue-500 text-white rounded-md px-2 py-1 text-[0.8rem]">
                {deal.price}
              </button>
               <Image
    src={deal.imageUrl}
    alt={deal.title}
    width={400}
    height={0}
    className="object-cover transition-transform  md:w-40 w-64 hover:scale-110 duration-500 cursor-pointer"
/>
              <div className="pb-2">
                <h3 className="text-sm font-medium text-black py-2 px-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 font-semibold px-2 pb-10 md:pb-0">
                  {deal.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   <div className="relative w-full md:h-[300px] md:mb-8 my-4 md:my-0"> {/* You can change 400px to any height you need */}
  <Link href="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1">
    <Image
      src="/image/dive.webp"
      alt="dive"
      width={1450}
      height={0}
      className="rounded-md md:mt-8 mt-0 object-cover"
    />
  </Link>
</div>
  </div>
);

export default ClearanceSale;
