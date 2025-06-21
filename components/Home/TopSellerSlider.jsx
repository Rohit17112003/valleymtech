"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MdStar } from "react-icons/md";

const deals = [
  {
    id: "1",
    title: "Book Store",
    price: "0.5",
    imageUrl: "/Assets/slider5 (1).webp",
    imageUr2: "/Assets/slider5i (1).webp",
    review: "0",
    product: "17",
  },
  {
    id: "2",
    title: "Beauty  Lipstick",
    price: "0.4",
    imageUrl: "/Assets/slider5 (2).webp",
    imageUr2: "/Assets/slider5i (2).webp",
    review: "1",
    product: "18",
  },
  {
    id: "3",
    title: "Leather Bag",
    price: "0.1",
    imageUrl: "/Assets/slider5 (3).webp",
    imageUr2: "/Assets/slider5i (3).webp",
    review: "0",
    product: "7",
  },
  {
    id: "4",
    title: " S24 Ultra",
    price: "0.4",
    imageUrl: "/Assets/slider5 (4).webp",
    imageUr2: "/Assets/slider5i (4).webp",
    review: "5",
    product: "19",
  },
  {
    id: "5",
    title: "Smart Ultra",
    price: "0.0",
    imageUrl: "/Assets/slider5 (5).webp",
    imageUr2: "/Assets/slider5i (5).webp",
    review: "3",
    product: "11",
  },
  {
    id: "6",
    title: " Bluetooth",
    price: "0.5",
    imageUrl: "/Assets/slider5 (6).webp",
    imageUr2: "/Assets/slider5i (6).webp",
    review: "0",
    product: "5",
  },
  {
    id: "7",
    title: " Watch Bluetooth",
    price: "0.2",
    imageUrl: "/Assets/slider5 (7).webp",
    imageUr2: "/Assets/slider5i (7).webp",
    review: "0",
    product: "29",
  },
  {
    id: "8",
    title: "Smart  Bluetooth",
    price: "0.5",
    imageUrl: "/Assets/slider5 (8).webp",
    imageUr2: "/Assets/slider5i (8).webp",
    review: "5",
    product: "14",
  },
];

const TopSellerSlider = () => (
  <div className="px-4 md:px-12  md:mb-8 mb-4 ">
    <div className="md:pb-6 bg-white  md:shadow md:rounded-lg  md:px-4">
      <div className="flex justify-between">
        <h1 className=" text-black md:text-[1.4rem] text-[1.1rem] pt-4  font-bold ">
          Top Sellers
        </h1>
        <h1 className=" cursor-pointer  text-blue-800 md:text-[0.95rem] text-[0.9rem] pt-4 flex items-center gap-2 ">
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
        className=" mt-4 "
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="border rounded-lg md:w-[292px] w-full md:h-[214px] h-64 overflow-hidden  cursor-pointer relative">
              <Image
                src={deal.imageUrl}
                alt={deal.title}
                width={400} // set real width
                height={300} // set real height
                className=" transition-transform hover:scale-110 duration-500 cursor-pointer rounded-t-lg object-cover border-b"
              />
              <div>
                <div className="w-[85px] h-[85px] rounded-full shadow absolute md:top-14 md:top-18 top-[84px] left-5 overflow-hidden">
                  <Image
                    src={deal.imageUr2}
                    alt={deal.title}
                    width={100}
                    height={0}
                    className=" transition-transform duration-500 hover:scale-125 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col md:items-start items-center absolute top-[105px] md:top-[80px] left-28 leading-3">
                  <h3 className="text-sm md:text-[1rem] font-bold text-gray-600 py-2 px-2">
                    {deal.title}
                  </h3>
                  <p className="text-[0.9rem] text-blue-600 px-2 pb-10 md:pb-0 flex items-center gap-1">
                    {deal.price} <span className="flex text-gray-500 items-center gap-1 text-[0.7rem]"><MdStar className=" text-yellow-600"/>Rating</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center absolute bottom-5 px-4 gap-3 ">
                <button className="bg-[#ffc0cb52] rounded-[3px] text-sm md:text-[0.98rem] px-5 md:py-1.5 py-2 text-gray-500 hover:bg-[#00000023]">
                  <span className="text-blue-800 md:text-[1.2rem] text-[1.1rem] pr-2">{deal.review}</span>
                  Reviews
                </button>
                <button className="bg-[#ffc0cb52] rounded-[3px] text-sm md:text-[0.98rem] px-5 md:py-1.5 py-2 text-gray-500 hover:bg-[#00000023]">
                  <span className="text-blue-800 md:text-[1.2rem] text-[1.1rem] pr-2">{deal.product}</span>
                  Products
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default TopSellerSlider;
