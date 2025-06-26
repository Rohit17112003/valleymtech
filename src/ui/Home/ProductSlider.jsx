"use client";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const products = [
  {
    title: "Handbag Bags For...",
    price: "$50.00",
    img: "/image/man (6).webp",
  },
  {
    title: "Star Of David Moissanite",
    price: "$29.00",
    img: "/image/man (5).webp",
  },
  {
    title: "Leather Ladies Bag",
    price: "$15.00",
    rating: 4,
    ratingCount: 2,
    img: "/image/man (4).webp",
  },
  {
    title: "Beauty Jelly Lipstick",
    price: "$32.00",
    img: "/image/man (3).webp",
  },
  {
    title: "Gold Moissanite Rings",
    price: "$650.00",
    img: "/image/man (2).webp",
  },
  {
    title: "Women's Casual Shoes",
    price: "$450.00",
    original: "$500.00",
    discount: "-10%",
    img: "/image/man (1).webp",
  },
];

const renderStars = (rating, count) => (
  <div className="flex items-center text-yellow-500 text-xs gap-1 mt-1">
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? <FaStar key={i} className="mr-[1px]" /> : <FaRegStar key={i} className="mr-[1px]" />
      )}
    </div>
    <span className="text-gray-600 text-xs">({count})</span>
  </div>
);

const ProductSlider = () => {
  return (
 <div className="px-4 md:px-12">
       <div className="bg-white px-4  py-5 rounded shadow mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">WOMEN'S FASHION</h2>
        <a href="#" className="text-blue-600 text-sm">View All</a>
      </div>

      <div className="grid md:grid-cols-6 grid-cols-2 gap-6">
        {products.map((item, i) => (
          <div key={i} className="min-w-[140px] flex-shrink-0 relative">
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={220}
              className="rounded mb-2"
            />

            {/* Discount Tag */}
            {item.discount && (
              <span className="absolute top-1 left-1 bg-blue-800 text-white text-xs px-1 rounded">
                {item.discount}
              </span>
            )}

            <p className="text-sm font-medium truncate">{item.title}</p>

            {item.rating && renderStars(item.rating, item.ratingCount)}

            <div className="text-sm mt-1">
              {item.original && (
                <span className="line-through text-gray-400 mr-2">
                  {item.original}
                </span>
              )}
              <span className="font-bold text-pink-900 text-[1] md:text-[1.1rem] mt-3">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
 </div>
  );
};

export default ProductSlider;
