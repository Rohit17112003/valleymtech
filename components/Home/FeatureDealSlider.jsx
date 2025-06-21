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
    id: "1",
    title: "iPhone 14 Pro Max",
    price: "$1149.00",
    imageUrl: "/Assets/slider3 (1).webp",
  },
  {
    id: "2",
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    imageUrl: "/Assets/slider3 (2).webp",
  },
  {
    id: "3",
    title: "Leather Ladies Bag",
    price: "$15.00",
    imageUrl: "/Assets/slider3 (3).webp",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra",
    price: "$1150.00",
    imageUrl: "/Assets/slider3 (4).webp",
  },
  {
    id: "5",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider3 (5).webp",
  },
  {
    id: "6",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider3 (6).webp",
  },
  {
    id: "7",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider3 (7).webp",
  },
  {
    id: "8",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider3 (8).webp",
  },
];

const FeatureDealSlider = () => (
  <div className="px-1 md:px-12 md:py-4 -mt-7 md:-mt-0">
    <div className="md:pb-6 bg-white md:bg-gray-100 md:shadow md:rounded-md px-4 md:px-12">
      <div className="flex justify-between pt-5">
        <span>
          {" "}
          <h1 className=" text-gray-600 md:text-[1.4rem] text-[1.1rem]  font-semibold mt-3">
            Featured deal
          </h1>
          <p>See the latest deals and exciting new offers!</p>
        </span>
        <h1 className="cursor-pointer hidden -mr-6 text-blue-800 md:text-[0.95rem] text-[0.9rem]  md:flex items-center gap-2 ">
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
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="px-6 md:mt-4 mt-6 rounded-md"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="flex flex-row gap-2 bg-white border md:border-none rounded-md relative px-6 py-2">
              <button className=" left-2 absolute z-50 bg-blue-500 text-white rounded-md px-2 py-1 text-[0.8rem]">
                {deal.price}
              </button>
              <Image
                src={deal.imageUrl}
                alt={deal.title}
                width={112} // w-28 = 112px
                height={112} // adjust as needed
                className="z-10 rounded-md transition-transform hover:scale-110 duration-500 cursor-pointer"
              />
              <div className="">
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
  </div>
);

export default FeatureDealSlider;
