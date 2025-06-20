"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const deals = [
  {
    id: "11",
    title: "iPhone 14 Pro Max",
    price: "$1149.00",
    imageUrl: "/Assets/slider2 (11).webp",
  },
  {
    id: "1",
    title: "iPhone 14 Pro Max",
    price: "$1149.00",
    imageUrl: "/Assets/slider2 (1).webp",
  },
  {
    id: "2",
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    imageUrl: "/Assets/slider2 (2).webp",
  },
  {
    id: "3",
    title: "Leather Ladies Bag",
    price: "$15.00",
    imageUrl: "/Assets/slider2 (3).webp",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra",
    price: "$1150.00",
    imageUrl: "/Assets/slider2 (4).webp",
  },
  {
    id: "5",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (5).webp",
  },
  {
    id: "6",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (6).webp",
  },
  {
    id: "7",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (7).webp",
  },
  {
    id: "8",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (8).webp",
  },
  {
    id: "9",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (9).webp",
  },
  {
    id: "10",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (10).webp",
  },
  {
    id: "12",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider2 (12).webp",
  },
];

const FeaturedSlider = () => (
  <div className="px-4 md:px-12 md:py-4 -mt-7 md:-mt-0">
    <div className="md:pb-6 bg-white md:shadow md:rounded-lg px-4 md:px-12">
    <h1 className="text-center text-blue-800 md:text-[1.4rem] text-[1.1rem] pt-4  font-bold relative top-10 md:top-0">Featured products</h1>
    <h1 className=" cursor-pointer justify-end md:-mr-6 -mr-3 relative top-10  md:top-0 z-10 text-blue-800 md:text-[0.95rem] text-[0.9rem] pt-4 flex items-center gap-2 ">View All <SlArrowRight className="text-[0.75rem]"/></h1>
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
        className="px-6 mt-8"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
           <Image
  src={deal.imageUrl}
  alt={deal.title}
  width={400}         // set real width
  height={300}        // set real height
  className="md:rounded-md md:shadow transition-transform hover:scale-90 duration-500 cursor-pointer"
/>
           <div className="flex flex-col md:items-start items-center -mt-14 md:mt-0">
             <h3 className="text-sm font-medium text-black py-2 px-2">
              {deal.title}
            </h3>
            <p className="text-gray-600 font-semibold px-2 pb-10 md:pb-0">{deal.price}</p>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default FeaturedSlider;
