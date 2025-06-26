import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

const Categories = () => {
  const data = [
    {
      img: "/Assets/categories (1).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (2).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (3).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (4).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (5).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (6).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (7).webp",
      titile: "Man's Fashion",
    },
    {
      img: "/Assets/categories (1).webp",
      titile: "Man's Fashion",
    },
  ];
  return (
    <>
      <div className="px-0 md:px-12 pb-4">
        <div className="pb-10 pt-8 mt-2 bg-white shadow rounded-lg px-4">
          <div className="text-blue-600 flex justify-between items-center relative -top-5 md:-top-0 py-4">
            <h1 className="text-black text-[1.4rem]">Categories</h1>

            <p className=" cursor-pointer justify-end text-blue-800 md:text-[0.95rem] text-[0.9rem] flex items-center gap-2 ">
              View All <SlArrowRight className="text-[0.75rem]" />
            </p>
          </div>
          <div className="grid md:grid-cols-8 grid-cols-3 md:px-4  justify-between gap-5  md:gap-10 ">
            {data.map((items, index) => (
              <div key={index}>
                <Image
                  src={items.img}
                  alt="items"
                  width={1000}
                  height={1000}
                  className="hover:scale-90 cursor-pointer transition-transform duration-300 md:w-28 w-full"
                />
                <h1 className="py-4">{items.titile}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
