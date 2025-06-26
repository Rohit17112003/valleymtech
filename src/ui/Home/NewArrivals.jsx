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
    price: "$149.00",
    imageUrl: "/Assets/new (1).webp",
  },
  {
    id: "2",
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    imageUrl: "/Assets/new (2).webp",
  },
  {
    id: "3",
    title: "Leather Ladies Bag",
    price: "$15.00",
    imageUrl: "/Assets/new (3).webp",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra",
    price: "$110.00",
    imageUrl: "/Assets/new (4).webp",
  },
  {
    id: "5",
    title: "Smart Watch Bluetooth",
    price: "$10.00",
    imageUrl: "/Assets/new (5).webp",
  },
  {
    id: "6",
    title: "Smart Watch Bluetooth",
    price: "$60.00",
    imageUrl: "/Assets/new (6).webp",
  },
  {
    id: "7",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/new (7).webp",
  },
  {
    id: "8",
    title: "Smart Watch Bluetooth",
    price: "$50.00",
    imageUrl: "/Assets/new (8).webp",
  },
];

const NewArrivals = () => (
  <div className="px-4 md:px-12 pb-4 md:pb-8">
      <div className="flex justify-between pt-5">
        <span>
          {" "}
          <h1 className=" text-black md:text-[1.4rem] text-[1.1rem]  font-semibold mt-3">
            New Arrivals
          </h1>
        </span>
       
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
            <div className="flex flex-row gap-2 bg-white border  rounded-md relative px-6 py-2">
              <button className=" left-2 absolute z-50 bg-blue-800 text-white rounded-[4px] px-2 py-1 text-[0.8rem]">
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
);

export default NewArrivals;
