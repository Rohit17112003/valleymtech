"use client";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import {
  FaTshirt,
  FaFemale,
  FaChild,
  FaHeartbeat,
  FaPaw,
  FaHome,
  FaBaby,
  FaBasketballBall,
  FaMobileAlt,
  FaTv,
  FaCar,
  FaGift,
  FaMusic,
  FaShoppingBag,
  FaPlane,
  FaBook,
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
  {
    title: "Grocerries & Dailies",
    icon: FaShoppingBag,
    subcategories: {
      FreshProduce: ["Vegetables", "Fruits", "Herbs"],
      Dairy: ["Milk", "Cheese", "Yogurt"],
      Bakery: ["Bread", "Cakes", "Pastries"],
      Beverages: ["Juices", "Soft Drinks", "Tea", "Coffee"],
      Staples: ["Rice", "Flour", "Pulses", "Spices"],
    },
  },
  {
    title: "Musical Instruments",
    icon: FaMusic,
    subcategories: {
      StringInstruments: ["Guitars", "Violins", "Cellos", "Ukuleles"],
      Percussion: ["Drums", "Cajons", "Bongos"],
      Keyboards: ["Pianos", "Synthesizers", "Organs"],
      WindInstruments: ["Flutes", "Saxophones", "Trumpets"],
    },
  },
  {
    title: "Gifts & Crafts",
    icon: FaGift,
    subcategories: {
      GiftItems: ["Greeting Cards", "Gift Wraps", "Candles", "Photo Frames"],
      CraftSupplies: ["Yarn", "Paints", "Beads", "Stickers"],
      Handmade: ["Pottery", "Jewelry", "Woodwork"],
    },
  },
  {
    title: "Automotive",
    icon: FaCar,
    subcategories: {
      CarAccessories: ["Car Covers", "Seat Covers", "Air Fresheners"],
      Tools: ["Car Jacks", "Wrenches", "Cleaning Kits"],
      TiresAndWheels: ["Alloy Wheels", "Tires", "Wheel Covers"],
      Electronics: ["Car Stereos", "GPS Navigators", "Dash Cams"],
    },
  },
  {
    title: "Digital Products",
    icon: FaTv,
    subcategories: {
      Software: ["Antivirus", "Office Suites", "Photo Editing"],
      Ebooks: ["Fiction", "Non-Fiction", "Educational"],
      OnlineCourses: ["Programming", "Design", "Marketing"],
    },
  },
  {
    title: "Travel & Luggage",
    icon: FaPlane,
    subcategories: {
      Luggage: ["Suitcases", "Backpacks", "Duffel Bags"],
      TravelAccessories: ["Travel Pillows", "Locks", "Adapters"],
      OutdoorGear: ["Camping Equipment", "Hiking Gear"],
    },
  },
  {
    title: "Books & Stationery",
    icon: FaBook,
    subcategories: {
      Books: ["Fiction", "Non-Fiction", "Children's Books", "Educational"],
      Stationery: ["Notebooks", "Pens", "Markers", "Folders"],
      ArtSupplies: ["Sketchbooks", "Paints", "Brushes"],
    },
  },
];

const PhoneCategories = () => {
  const [menuOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      {menuOpen && (
        <div className="z-50 h-64 shadow-lg rounded-md">
          <div className="shadow text-black border-gray-200 w-full overflow-auto custom-scrollbar rounded-md">
            {categories.map((cat) => (
              <div
                key={cat.title}
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
            <p className="text-blue-900 text-[0.8rem] font-medium py-3 pl-4 cursor-pointer">
              View All
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneCategories;
