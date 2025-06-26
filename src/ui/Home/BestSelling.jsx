"use client";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

// DATA
const bestSelling = [
  {
    title: "iPhone 14 Pro Max",
    price: "$1,149.00",
    img: "/image/selling (1).webp",
  },
  {
    title: "Copper Alloy Inlaid",
    price: "$9.00",
    rating: 1,
    discount: "-5%",
    ratingCount: 1,
    img: "/image/selling (9).webp",
  },
  {
    title: "Women Beautiful White",
    price: "$70.00",
    img: "/image/selling (8).webp",
  },
  {
    title: "Straps Plaid Patchwork",
    price: "$19.00",
    original: "$20.00",
    rating: 4,
    ratingCount: 2,
    img: "/image/selling (7).webp",
  },
  {
    title: "4 French Door",
    price: "$2,484.00",
    img: "/image/selling (6).webp",
  },
  {
    title: "Bohemiantee Shirt Tops",
    price: "$19.80",
    discount: "-10%",
    original: "$22.00",
    rating: 3,
    ratingCount: 1,
    img: "/image/selling (5).webp",
  },
];

const topRated = [
  {
    title: "Straps Plaid Patchwork",
    price: "$19.00",
    discount: "-5%",
    original: "$20.00",
    rating: 5,
    ratingCount: 1,
    img: "/image/selling (9).webp",
  },
  {
    title: "4 French Door",
    price: "$2,484.00",
    rating: 5,
    ratingCount: 2,
    img: "/image/selling (7).webp",
  },
  {
    title: "Leather Single Shoes",
    price: "$32.00",
    rating: 4,
    ratingCount: 1,
    img: "/image/selling (4).webp",
  },
  {
    title: "Leather Ladies Bag",
    price: "$15.00",
    rating: 4,
    ratingCount: 2,
    img: "/image/selling (3).webp",
  },
  {
    title: "T900 Smart Watch",
    price: "$25.00",
    discount: "-$5.00",
    original: "$30.00",
    rating: 4,
    ratingCount: 1,
    img: "/image/selling (2).webp",
  },
  {
    title: "Women Beautiful White",
    price: "$70.00",
    rating: 4,
    ratingCount: 1,
    img: "/image/selling (6).webp",
  },
];

// Rating Display Function
const renderStars = (rating, count) => (
  <div className="flex items-center text-yellow-500 text-xs mt-1 gap-1">
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="mr-0.5" />
        ) : (
          <FaRegStar key={i} className="mr-0.5" />
        )
      )}
    </div>
    <span className="text-gray-600 text-xs">({count})</span>
  </div>
);

//  Card Component
const Card = ({ item, showRating }) => (
  <div className="flex gap-3 items-center">
    <Image src={item.img} alt={item.title} width={110} height={130} />
    <div>
      <p className="text-sm font-semibold">{item.title}</p>
      {showRating && item.rating && renderStars(item.rating, item.ratingCount)}
      <div className="flex gap-2 items-center text-sm mt-1 relative">
        {item.discount && (
          <span className="bg-blue-800 text-white px-2.5 py-[6px] text-xs font-semibold rounded absolute -top-14 -left-28">
            {item.discount}
          </span>
        )}
        {item.original && (
          <span className="line-through text-gray-400">{item.original}</span>
        )}
        <span className="text-black font-bold">{item.price}</span>
      </div>
    </div>
  </div>
);

//  Main Component
const BestSelling = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-12 px-4 pb-8">
      {/*  Best Selling */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">🏆 Best sellings</h2>
          <a href="#" className="text-blue-600 text-sm">
            View All
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {bestSelling.map((item, i) => (
            <Card key={i} item={item} showRating={[1, 3, 5].includes(i)} />
          ))}
        </div>
      </div>

      {/*  Top Rated */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">🎯 Top rated</h2>
          <a href="#" className="text-blue-600 text-sm">
            View All
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {topRated.map((item, i) => (
            <Card key={i} item={item} showRating={true} />
          ))}
        </div>
      </div>

      <div className="shadow shadow-gray-400 rounded-md">
        <Link href="">
          <Image
            src="/image/card (2).webp"
            alt="card"
            width={1000}
            height={0}
            className="rounded-md "
          />
        </Link>
      </div>
      <div className="shadow shadow-gray-400 rounded-md">
        <Link href="">
          <Image
            src="/image/card (1).webp"
            alt="card"
            width={1000}
            height={0}
            className="rounded-md "
          />
        </Link>
      </div>
    </div>
  );
};

export default BestSelling;
