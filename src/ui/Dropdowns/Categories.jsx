"use client";
import React, { useState } from "react";
import { MdDashboard, MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import {
  FaTshirt, FaFemale, FaChild, FaHeartbeat, FaPaw, FaHome, FaBaby,
  FaBasketballBall, FaMobileAlt, FaTv, FaCar, FaGift, FaMusic,
  FaShoppingBag, FaPlane, FaBook,
} from "react-icons/fa";

const categories = [
  {
    title: "Men's Fashion",
    icon: FaTshirt,
    subcategories: {
      "Men's Watches": ["Fashion Watches", "Sports Watches", "Business Watches", "Smart Watches"],
      "Men's Clothing": ["Shirts", "T-Shirts", "Polo Shirts", "Hoodies", "Sweaters", "Jeans", "Pants", "Socks & Hosiery"],
      "Men's Footwear": ["Shoes", "Boots", "Sneakers", "Loafers & Slip-Ons", "Outdoor Shoes", "Sandals", "Slippers"],
      "Men's Eyewear": ["Eyeglasses", "Sunglasses", "Fashion Glasses"],
      "Men's Bags & Wallets": ["Fashion Backpacks", "Business Bags", "Wallets"],
      "Men's Jewelry": ["Bracelets", "Necklaces", "Rings"],
    },
  },
  {
    title: "Women's Fashion",
    icon: FaFemale,
    subcategories: {
      "Women's Bags": ["Backpacks", "Tote Bags", "Card Holders", "Wristlets"],
      Clothing: ["Dresses", "Tops & Tees", "Sweaters", "Pants", "Bridal Dresses", "Suits & Blazers", "Coats", "Skirts"],
      Jewelry: ["Necklaces", "Earrings", "Jewelry Storage", "Nose Pin", "Rings", "Bracelets"],
      Watches: ["Fashion Watches", "Casual Watches", "Business Watches", "Women's Smart Watches"],
      Footwear: ["Heels", "Boots", "Sneakers", "Flats"],
    },
  },
  {
    title: "Kid's Fashion",
    icon: FaChild,
    subcategories: {
      "Boy's Clothing": ["Jackets", "Blazers", "Shirts", "T-Shirts", "Shorts", "Hoodies", "Jeans"],
      "Girl's Clothing": ["T-Shirts", "Jeans", "Leggings", "Skirts", "Party Dresses", "Blazers", "Gowns"],
      "Watches & Accessories": ["Kids Sunglasses", "Kids Watches", "Backpacks"],
      "Kid's Footwear": ["Sneakers", "Loafers", "Running Shoes", "Sandals", "School Shoes"],
    },
  },
  {
    title: "Health & Beauty",
    icon: FaHeartbeat,
    subcategories: {
      Makeup: ["Lipsticks", "Foundations", "Mascaras", "Eyeliner", "Blush"],
      Skincare: ["Face Wash", "Moisturizers", "Sunscreens", "Serums"],
      HairCare: ["Shampoos", "Conditioners", "Hair Oils", "Hair Colors"],
      PersonalCare: ["Deodorants", "Bath & Body", "Oral Care"],
      Fragrances: ["Perfumes", "Body Mists"],
    },
  },
  {
    title: "Pet Supplies",
    icon: FaPaw,
    subcategories: {
      PetFood: ["Dog Food", "Cat Food", "Bird Food", "Fish Food"],
      PetAccessories: ["Collars", "Leashes", "Toys", "Beds"],
      PetHealth: ["Vitamins", "Flea & Tick Control", "Grooming Supplies"],
    },
  },
  {
    title: "Home & Kitchen",
    icon: FaHome,
    subcategories: {
      Kitchenware: ["Cookware", "Dinnerware", "Bakeware", "Kitchen Tools"],
      HomeDecor: ["Vases", "Wall Art", "Candles", "Clocks"],
      Storage: ["Containers", "Organizers", "Shelves"],
      CleaningSupplies: ["Detergents", "Brushes", "Mops"],
      Furniture: ["Sofas", "Tables", "Chairs", "Beds"],
    },
  },
  {
    title: "Baby & Toddler",
    icon: FaBaby,
    subcategories: {
      BabyCare: ["Diapers", "Baby Wipes", "Baby Lotion", "Baby Powder"],
      Feeding: ["Bottles", "Formula", "High Chairs", "Breastfeeding"],
      Toys: ["Rattles", "Teethers", "Educational Toys"],
      Clothing: ["Onesies", "Pajamas", "Hats & Gloves"],
      Nursery: ["Cribs", "Bedding", "Monitors"],
    },
  },
  {
    title: "Sports & Outdoor",
    icon: FaBasketballBall,
    subcategories: {
      Sportswear: ["Jerseys", "Shorts", "Shoes", "Socks"],
      OutdoorGear: ["Tents", "Backpacks", "Sleeping Bags"],
      ExerciseEquipment: ["Dumbbells", "Yoga Mats", "Resistance Bands"],
      Accessories: ["Water Bottles", "Gloves", "Hats"],
    },
  },
  {
    title: "Phone & Gadgets",
    icon: FaMobileAlt,
    subcategories: {
      MobilePhones: ["Smartphones", "Feature Phones", "Phone Cases"],
      Accessories: ["Chargers", "Power Banks", "Headphones", "Screen Protectors"],
      Wearables: ["Smart Watches", "Fitness Bands"],
      Tablets: ["iPads", "Android Tablets"],
    },
  },
  {
    title: "Electronics & Gadgets",
    icon: FaTv,
    subcategories: {
      TVs: ["LED TVs", "Smart TVs", "OLED TVs"],
      Audio: ["Speakers", "Headphones", "Soundbars"],
      Cameras: ["DSLR", "Mirrorless", "Action Cameras"],
      Computers: ["Laptops", "Desktops", "Monitors"],
      Accessories: ["Keyboards", "Mice", "Webcams"],
    },
  },
];

const MegaMenuDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative bg-white text-black w-full">
      <div className="bg-blue-800 text-white py-[5px] flex items-center gap-4">
        <div className="relative cursor-pointer pl-12">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-4 bg-white text-[#1455ac] text-lg px-6 py-[9px] tracking-wider rounded-sm font-medium"
          >
            <MdDashboard className="text-[1.3rem] mr-4" />
            Categories <MdArrowDropDown className="ml-5 text-[1.25rem]" />
          </button>

          {menuOpen && (
            <div className="absolute left-0 gap-1 top-16 h-[400px] flex z-50 pb-4 mx-12">
              <div className="w-64 h-full pb-1 rounded-sm shadow text-black border-gray-200 overflow-auto custom-scrollbar">
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className={`p-3 hover:bg-blue-50 border-b border-gray-100 cursor-pointer flex items-center justify-between gap-2 ${
                      activeCategory?.title === cat.title ? "bg-blue-100" : ""
                    }`}
                  >
                    <div className="flex gap-2.5 items-center">
                      <span className="text-pink-400 text-sm bg-[#00000017] rounded-full p-1">
                        {React.createElement(cat.icon)}
                      </span>
                      <span className="text-[0.8rem] tracking-wider">{cat.title}</span>
                    </div>
                    <SlArrowRight className="text-[0.7rem] text-pink-600 font-semibold" />
                  </div>
                ))}
                <p className="text-center text-blue-900 text-[0.8rem] font-medium py-3 cursor-pointer">
                  View All
                </p>
              </div>

              {activeCategory && Object.keys(activeCategory.subcategories).length > 0 && (
                <div
                  className="w-[calc(100vw-23.2rem)] bg-white rounded-md shadow p-6 grid grid-cols-4 gap-8 overflow-scroll custom-scrollbar"
                  onMouseEnter={() => setActiveCategory(activeCategory)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {Object.entries(activeCategory.subcategories).map(([title, items], idx, arr) => (
                    <div
                      key={idx}
                      className={`pr-6 ${idx !== arr.length - 1 ? "border-r border-gray-300" : ""}`}
                    >
                      <h4 className="font-semibold text-sm pt-4 mb-3 text-gray-900">{title}</h4>
                      <ul className="space-y-2 text-sm text-gray-900">
                        {items.map((item, i) => (
                          <li key={i} className="hover:text-blue-600 cursor-pointer">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <nav className="hidden md:flex pl-3 text-white py-1.5 items-center gap-8 text-[0.99rem] tracking-normal">
          <a href="#">Home</a>
          <a href="#">Brand</a>
          <a href="#">Offers <MdArrowDropDown className="inline text-[1.2rem] ml-1" /></a>
          <a href="#">Publication House</a>
          <a href="#">All Vendors</a>
          <a href="#">Vendor Zone <MdArrowDropDown className="inline text-[1.2rem] ml-1" /></a>
        </nav>
      </div>

      <section className="h-[400px] bg-gray-50 px-12 pt-4 flex justify-end">
        <Link href="https://codecanyon.net/item/6valley-multivendor-ecommerce-complete-ecommerce-mobile-app-web-and-admin-panel/31448597?s_rank=1">
          <Image
            src="/Assets/herobanner.webp"
            alt="banner"
            width={1000}
            height={400}
            priority
            className="h-full rounded-lg pl-1"
          />
        </Link>
      </section>
    </div>
  );
};

export default MegaMenuDropdown;
