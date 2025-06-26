import React from "react";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";

const LatestProduct = () => {
  const data = [
    {
      img: "/Assets/pic (8).webp",
      titile: "Man's Fashion",
      price: "$30.00",
    },
    {
      img: "/Assets/pic (7).webp",
      titile: "Man's Fashion",
      price: "$30.00",
    },
    {
      img: "/Assets/pic (6).webp",
      titile: "Man's Fashion",
      price: "$90.00",
    },
    {
      img: "/Assets/pic (5).webp",
      titile: "Man's Fashion",
      price: "$80.00",
    },
    {
      img: "/Assets/pic (4).webp",
      titile: "Man's Fashion",
      price: "$40.00",
    },
    {
      img: "/Assets/pic (3).webp",
      titile: "Man's Fashion",
      price: "$30.00",
    },
    {
      img: "/Assets/pic (2).webp",
      titile: "Man's Fashion",
      price: "$50.00",
    },
    {
      img: "/Assets/pic (1).webp",
      titile: "Man's Fashion",
      price: "$70.00",
    },
  ];
  return (
    <>
      <div className=" flex md:flex-row flex-col  md:justify-between md:px-12 pb-4 px-4  md:pb-8">
        <div className="border md:border-blue-500 md:w-[450px] md:h-[555px] md:px-5 md: px-3 py-3 md:py-5">
          <h1 className="text-blue-900 font-semibold text-center md:text-[1.1rem] text-[1rem] uppercase py-5">
            deal of the day
          </h1>
          <div className="bg-white flex flex-col items-center md:px-5 px-3 md:py-5 py-3 rounded-[5px]  relative ">
            <Image
              src="/Assets/pic (9).webp"
              alt="items"
              width={175}
              height={0}
              className="hover:scale-90 cursor-pointer transition-transform duration-300 w-full  rounded-md border relative object-cover"
            />
            <div className="absolute inset-0 top-7 left-7">
              <button className="bg-blue-900  text-white rounded-[3px] px-2 py-0.5 font-bold text-[0.9rem]">
                -30%
              </button>
            </div>

            <p className="text-[1rem] text-center font-semibold px-8 md:px-0 mt-4">
              Exquisite 18K White Gold Diamond Necklace Set
            </p>
            <p className=" text-gray-900 font-semibold text-[1rem] text-center py-3">
              <span className=" text-pink-500 px-2 text-[0.8rem]">
                <del>$2,400.00</del>
              </span>
              $1,680.00
            </p>

          <div className="pb-2">
              <button className="text-white bg-blue-900 rounded-md px-4 py-2 mt-2 uppercase">
              Buy Now
            </button>
          </div>
          </div>
        </div>

        <div>
          <div className="text-blue-600 flex justify-between items-center relative top-2  md:-top-1 py-4 px-4">
            <h1 className="text-black text-[1.4rem] font-bold">
              Latest Products
            </h1>

            <p className=" cursor-pointer justify-end text-blue-800 md:text-[0.95rem] text-[0.9rem] flex items-center gap-2 ">
              View All <SlArrowRight className="text-[0.75rem]" />
            </p>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 md:px-4 gap-3 ">
            {data.map((items, index) => (
              <div
                key={index}
                className="bg-white rounded-lg h-[300px] shadow flex flex-col justify-center items-center"
              >
                <div className=" overflow-hidden">
                  <Image
                    src={items.img}
                    alt="items"
                    width={290}
                    height={150}
                    className="hover:scale-110 cursor-pointer transition-transform duration-300  object-cover w-full rounded-t-full"
                  />
                </div>
                <h1 className="py-4 text-[1rem] font-medium leading-4">
                  {items.titile}
                </h1>
                <p className="text-gray-900 font-semibold md:text-[1.2rem] text-[1rem] pb-10 leading-3">
                  {items.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
