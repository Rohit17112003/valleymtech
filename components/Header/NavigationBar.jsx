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

export default function NavigationBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-50 text-sm text-black px-4 py-1 flex justify-between items-center md:px-12 md:text-[0.9rem] text-[0.8rem] z-10">
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

      {/* Spacer */}
      <div style={{ height: "0px" }} />

      {/* Main Header Bar */}
      <div
        id="main-bar"
        className={`bg-white shadow px-4 md:px-12 py-2.5 flex justify-between items-center gap-5 transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/image/k (2).png"
            alt="header_logo"
            width={121}
            height={0}
            priority
            className=""
          />
        </Link>

        {/* Search */}
        <div className="flex w-full md:w-[800px] mt-2 md:mt-0 md:ml-2">
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-grow border border-gray-300 px-4 w-[200px] md:py-2.5 rounded-l-md outline-none text-blue-600"
          />
          <button className="bg-[#1455ac] text-white mr-4 text-[1.15rem] md:text-[1.31rem] px-3 md:px-5  md:py-3 rounded-r-md">
            <LuSearch />
          </button>
          {/* Hamburger Icon */}
          <div className="md:hidden mt-1 relative z-[9999]">
            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl text-[#1455ac]"
            >
              <HiOutlineBars3 />
            </button>
          </div>
        </div>

        {/* Right Icons */}
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

      {/* Spacer when fixed */}
      {isFixed && <div style={{ height: "64px" }} />}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-[#1455ac] text-white px-12 py-1.5 items-center gap-7 text-[0.99rem]">
        <button className="flex items-center gap-4 bg-white text-[#1455ac] text-lg px-6 py-2 rounded-sm font-medium">
          <MdDashboard className="text-[1.3rem] mr-4" />
          Categories <MdArrowDropDown className="ml-5 text-[1.25rem]" />
        </button>
        <a href="#">Home</a>
        <a href="#">Brand</a>
        <a href="#">
          Offers <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
        </a>
        <a href="#">Publication House</a>
        <a href="#">All Vendors</a>
        <a href="#">
          Vendor Zone <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
        </a>
      </nav>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1455ac] text-white z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <HiOutlineXMark />
          </button>
        </div>
        <nav className="flex flex-col px-6 space-y-5 text-[1.1rem] font-medium">
          <button className="flex items-center gap-4 bg-white text-[#1455ac] text-lg w-full px-2 h-11 rounded-sm tracking-wider">
            <MdDashboard className="text-[4rem] ml-1" />
            Categories <MdArrowDropDown className="ml-2 text-[4rem]" />
          </button>
          <a href="#">Home</a>
          <a href="#">Brand</a>
          <a href="#">
            Offers <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
          </a>
          <a href="#">Publication House</a>
          <a href="#">All Vendors</a>
          <a href="#">
            Vendor Zone{" "}
            <MdArrowDropDown className="inline text-[1.2rem] ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
}
