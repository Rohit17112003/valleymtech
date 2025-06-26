"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    title: "Electric Toothbrush",
    price: "$129.00",
    img: "/image/electronics (1).webp",
  },
  {
    title: "Digital Thermometer",
    price: "$89.00",
    img: "/image/electronics (5).webp",
  },
  {
    title: "Hair Dryer Ionic",
    price: "$149.00",
    img: "/image/electronics (6).webp",
  },
  {
    title: "Massager Gun Pro",
    price: "$199.00",
    img: "/image/electronics (4).webp",
  },
  {
    title: "Hair Straightener",
    price: "$99.00",
    img: "/image/electronics (3).webp",
  },
  {
    title: "Skin Moisturizer Device",
    price: "$79.00",
    img: "/image/electronics (2).webp",
  },
];



const Electronics = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="bg-white px-4 py-5 rounded shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold uppercase">Electronics & Gadgets</h2>
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

export default Electronics;
