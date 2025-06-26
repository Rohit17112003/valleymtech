"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    title: "iPhone 14 Pro Max",
    price: "$1,149.00",
    img: "/image/phone (6).webp",
  },
  {
    title: "Redmi Smart Phone",
    price: "$299.00",
    img: "/image/phone (5).webp",
  },
  {
    title: "Airpods Pro 2nd Gen",
    price: "$249.00",
    rating: 4,
    ratingCount: 3,
    img: "/image/phone (4).webp",
  },
  {
    title: "Wireless Neckband",
    price: "$59.00",
    img: "/image/phone (3).webp",
  },
  {
    title: "Galaxy Z Fold",
    price: "$1,699.00",
    img: "/image/phone (2).webp",
  },
  {
    title: "Realme Buds Q2",
    price: "$39.00",
    img: "/image/phone (1).webp",
  },
];

const renderStars = (rating, count) => (
  <div className="flex items-center text-yellow-500 text-xs gap-1 mt-1">
    <span className="text-gray-600 text-xs">({count})</span>
  </div>
);

const Phone = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="bg-white px-4 py-5 rounded shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">PHONE & GADGETS</h2>
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

export default Phone;
