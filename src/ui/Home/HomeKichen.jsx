"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    title: "Electric Kettle 1.5L",
    price: "$38.00",
    img: "/images/kichen (6).webp",
  },
  {
    title: "Non-Stick Frying Pan",
    price: "$27.00",
    img: "/images/kichen (5).webp",
  },
  {
    title: "Stainless Steel Knife Set",
    price: "$49.00",
    img: "/images/kichen (4).webp",
  },
  {
    title: "4-Slice Bread Toaster",
    price: "$63.00",
    img: "/images/kichen (3).webp",
  },
  {
    title: "Food Storage Containers Set",
    price: "$29.00",
    img: "/images/kichen (2).webp",
  },
  {
    title: "Digital Kitchen Scale",
    price: "$21.00",
    img: "/images/kichen (1).webp",
  },
];




const HomeKichen = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="bg-white px-4 py-5 rounded shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold uppercase">Home & Kitchen</h2>
          <a href="#" className="text-blue-600 text-sm">View All</a>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 gap-6">
          {products.map((item, i) => (
            <div key={i} className="relative">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={300}
                className="rounded mb-2"
              />
              <p className="text-sm font-medium truncate">{item.title}</p>
              <div className="text-sm mt-1">
                <span className="font-bold text-gray-800 text-[1rem] md:text-[1.1rem]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeKichen;
