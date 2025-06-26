"use client";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdLocalPhone, MdArrowDropDown, MdDashboard } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import MegaMenuDropdown from "../Dropdowns/Categories";
import PhoneCategories from "../Dropdowns/PhoneCategories";
export default function NavigationBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  useEffect(() => {
    const navBar = document.getElementById("main-bar");
    if (!navBar) return;

    const navOffsetTop = navBar.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= navOffsetTop) setIsFixed(true);
      else setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-[99999]">
      {/* Top Bar */}
      <div className="bg-gray-50 text-sm text-black px-4 py-1 flex justify-between items-center md:px-12 md:text-[0.9rem] text-[0.8rem]">
        <span className="flex gap-1 items-center">
          <MdLocalPhone className="md:text-[1rem] text-[0.9rem]" />
          <a href="tel:+00xxxxxxxxxxx">+00xxxxxxxxxxx</a>
        </span>
        <div className="flex items-center gap-4">
          <span className="flex items-center cursor-pointer gap-1">
            USD $ <MdArrowDropDown className="md:text-[1rem] text-[0.9rem]" />
          </span>
          <span className="flex items-center cursor-pointer gap-1">
            English <MdArrowDropDown className="md:text-[1rem] text-[0.9rem]" />
          </span>
        </div>
      </div>

      {/* Main Header */}
      <div
        id="main-bar"
        className={`bg-white shadow px-4 md:px-12 py-2.5 flex justify-between items-center gap-5 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 z-[99999]" : "relative"
        }`}
      >
        <Link href="/">
          <Image
            src="/image/k (2).png"
            alt="header_logo"
            width={121}
            height={0}
            priority
          />
        </Link>

        <div className="flex w-full md:w-[800px] mt-2 md:mt-0 md:ml-2">
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-grow border border-gray-300 px-4 w-[200px] md:py-2.5 rounded-l-md outline-none text-blue-600"
          />
          <button className="bg-[#1455ac] text-white mr-4 text-[1.15rem] md:text-[1.31rem] px-3 md:px-5  md:py-3 rounded-r-md">
            <LuSearch />
          </button>
          <div className="md:hidden mt-1 relative z-[9999]">
            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl text-[#1455ac]"
            >
              <HiOutlineBars3 />
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-4 items-center ml-2 mt-0">
          <span className="bg-blue-50 relative text-[#1455ac] flex items-center justify-center rounded-full h-12 w-12">
            <FiHeart className="text-[1.3rem]" />
            <span className="absolute -top-1.5 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </span>
          <span className="bg-blue-50 text-[#1455ac] flex items-center justify-center rounded-full h-12 w-12">
            <FaUserLarge className="text-[1rem]" />
          </span>
          <span className="bg-blue-50 relative text-[#1455ac] flex items-center justify-center rounded-full h-12 w-12">
            <IoCartOutline className="text-[1.3rem]" />
            <span className="absolute -top-1.5 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </span>
          <div className="flex flex-col leading-5">
            <span className="text-[0.8rem] text-[#4b556b]">My cart</span>
            <span className="font-semibold text-sm text-[#4b556b] flex items-center gap-0.5">
              $0.00 <MdArrowDropDown className="text-[1.25rem]" />
            </span>
          </div>
        </div>
      </div>

      {isFixed && <div style={{ height: "64px" }} />}

      <nav className="hidden md:flex items-center gap-7 text-[0.99rem]">
        <MegaMenuDropdown />
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[white] text-blue-800 z-[99999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex p-4">
          <button onClick={() => setIsOpen(false)} className="text-3xl text-black">
            <HiOutlineXMark />
          </button>
        </div>
        <nav className="flex flex-col  h-72 px-5 space-y-5 text-[1.1rem] font-medium">
          <a href="#">Home</a>

          <div className=" absolute ">
            <button
              onClick={() => setShowMobileCategories(!showMobileCategories)}
              className="flex items-center text-lg pt-6 gap-2"
            >
              Categories
              <MdArrowDropDown className="ml-2 text-[1.3rem]" />
            </button>
            {showMobileCategories && (
              <div className="bg-gray-100  text-black relative top-0 w-64 h-64 left-0">
                <PhoneCategories isMobile={true} />
              </div>
            )}
          </div>
          <a href="#" className="pt-10">Brand</a>
          <a href="#">
            Offers <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
          </a>
          <a href="#">Publication House</a>
          <a href="#">All Vendors</a>
          <a href="#">
            Vendor Zone
            <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
}
