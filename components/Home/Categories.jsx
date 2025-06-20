import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Categories = () => {
  const data = [
    {
      img: "../Assets/categories (1).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (2).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (3).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (4).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (5).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (6).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (7).webp",
      titile: "Man's Fashion",
    },
    {
      img: "../Assets/categories (8).webp",
      titile: "Man's Fashion",
    },
  ];
  return (
    <>
      <div className="px-4 md:px-12 pb-4">
        <div className="pb-10 pt-8 mt-2 bg-white shadow rounded-lg px-4">
          <div className="text-blue-600 flex justify-between items-center py-4">
            <h1 className="text-black text-[1.4rem]">Categories</h1>

            <p className=" cursor-pointer justify-end text-blue-800 md:text-[0.95rem] text-[0.9rem] flex items-center gap-2 ">
              View All <SlArrowRight className="text-[0.75rem]" />
            </p>
          </div>
          <div className="flex flex-wrap flex-row px-4  justify-between  gap-10 ">
            {data.map((items, index) => (
              <div>
                <img src={items.img} alt="items" className="w-28 hover:scale-90 cursor-pointer  transition-transform duration-300" />
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
