import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

const Brands = () => {
  const data = [
    {
      img: "/image/brands (11).webp",
    },
    {
      img: "/image/brands (10).webp",
    },
    {
      img: "/image/brands (9).webp",
    },
    {
      img: "/image/brands (8).webp",
    },
    {
      img: "/image/brands (7).webp",
    },
    {
      img: "/image/brands (6).webp",
    },
    {
      img: "/image/brands (5).webp",
    },
    {
      img: "/image/brands (4).webp",
    },
     {
      img: "/image/brands (3).webp",
    },
     {
      img: "/image/brands (2).webp",
    },
        {
      img: "/image/brands (1).webp",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-12 pb-10">
          <div className="text-blue-600 flex justify-between items-center pb-4">
            <h1 className="text-black text-[1.4rem] font-semibold">Brands</h1>

            <p className=" cursor-pointer justify-end text-blue-800 md:text-[0.95rem] text-[0.9rem] flex items-center gap-2 ">
              View All <SlArrowRight className="text-[0.75rem]" />
            </p>
          </div>
          <div className="grid md:grid-cols-11 grid-cols-3 gap-5 md:gap-10 justify-between ">
            {data.map((items, index) => (
              <div key={index} className="md:h-[90px] md:w-[90px] rounded-full border overflow-hidden flex justify-center items-center">
                <Image
                  src={items.img}
                  alt="items"
                  width={1000}
                  height={1000}
                  className="hover:scale-110 cursor-pointer transition-transform duration-300 md:w-28 w-full"
                />
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Brands;
