"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const deals = [
  {
    id: "1",
    title: "iPhone 14 Pro Max",
    price: "$1149.00",
    imageUrl: "/Assets/slider (4).webp",
  },
  {
    id: "2",
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    imageUrl: "/Assets/slider (3).webp",
  },
  {
    id: "3",
    title: "Leather Ladies Bag",
    price: "$15.00",
    imageUrl: "/Assets/slider (2).webp",
  },
  {
    id: "4",
    title: "Samsung S24 Ultra",
    price: "$1150.00",
    imageUrl: "/Assets/slider (1).webp",
  },
  {
    id: "5",
    title: "Smart Watch Bluetooth",
    price: "$150.00",
    imageUrl: "/Assets/slider (5).webp",
  },
];

const FlashDealsSlider = () => (
  <div className="px-4 md:mt-4 md:px-12 ">
    <div className="relative md:bg-gray-100 bg-white md:pb-10 shadow md:rounded-lg">
      <h1 className="relative top-10 md:top-0 z-10 cursor-pointer justify-end text-blue-800 md:text-[0.95rem] md:py-6   md:pr-4 text-[0.9rem] flex items-center gap-2 ">
        View All <SlArrowRight className="text-[0.75rem]" />
      </h1>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-center px-4 md:px-8">
        {/* Left Section (hidden on small screens) */}
        <div className=" relative hidden md:block">
          <h1 className="text-blue-800 font-bold text-[1.2rem] md:text-[1.7rem] -mt-24 uppercase ">
            Flash Deal
          </h1>
          <p className="text-blue-700 text-[0.9rem] md:text-[1.05rem]">
            Hurry Up ! The offer is limited. Grab while it lasts
          </p>
          <div className="bg-blue-600 w-full h-36 mt-2 rounded-md flex items-center justify-center gap-0 cursor-pointer text-white">
            <div className="bg-[#0000001f] flex items-center justify-center rounded-sm px-4 py-3">
              <p className="text-white font-semibold text-[1.6rem]">925</p>
            </div>
            <span className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 40"
                fill="currentColor"
              >
                {[10, 30].map((y, i) => (
                  <circle key={i} cx="12" cy={y} r="5" />
                ))}
              </svg>
            </span>
            <div className="bg-[#0000001f] flex items-center justify-center rounded-sm px-4 py-3">
              <p className="text-white font-semibold text-[1.6rem]">12</p>
            </div>
            <span className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 40"
                fill="currentColor"
              >
                {[10, 30].map((y, i) => (
                  <circle key={i} cx="12" cy={y} r="5" />
                ))}
              </svg>
            </span>
            <div className="bg-[#0000001f] flex items-center justify-center rounded-sm px-4 py-3">
              <p className="text-white font-semibold text-[1.6rem]">26</p>
            </div>
            <span className="">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 40"
                fill="currentColor"
              >
                {[10, 30].map((y, i) => (
                  <circle key={i} cx="12" cy={y} r="5" />
                ))}
              </svg>
            </span>
            <div className="bg-[#0000001f] flex items-center justify-center rounded-sm px-4 py-3">
              <p className="text-white font-semibold text-[1.6rem]">40</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            speed={2000}
            navigation
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
    <Image
    src={deal.imageUrl}
    alt={deal.title}
    width={1000}
    height={0}
    className="md:shadow md:rounded-md object-cover transition-transform hover:scale-90 duration-300 cursor-pointer"
  />
                <div className="flex flex-col justify-center items-center md:items-start -mt-12 md:-mt-0">
                  <h3 className="text-sm font-medium text-black py-2 px-2">
                    {deal.title}
                  </h3>
                  <p className="text-gray-600 font-semibold px-2">
                    {deal.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              width: 30px;
              height: 30px;
              background-color: #f3f4f6;
              border-radius: 9999px;
              padding: 8px;
              color: #1f2937;
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: #3b82f6;
              color: white;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 16px;
              font-weight: bold;
            }

            @media (max-width: 768px) {
              .swiper-button-next,
              .swiper-button-prev {
                display: none;
              }
            }

            .swiper-pagination {
              display: none !important;
            }
          `}</style>
        </div>
      </div>
    </div>
  </div>
);

export default FlashDealsSlider;
