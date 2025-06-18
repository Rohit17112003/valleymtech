import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoQuora } from "react-icons/bi";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#183f56] text-white pt-10">
      <div className="md:px-12 px-4 col-span-2 md:col-span-1">
        {/* Top Section */}
        <div className="flex md:flex-row flex-col justify-between gap-6">
          {/* Logo & App Downloads */}
          <div>
            <Link href="/">
              <img src="/image/k (3).png" alt="6Valley" className="mb-4 w-36" />
            </Link>
            <h1 className="uppercase font-semibold mt-12 py-2">Download Our App</h1>

            <div className="flex space-x-2">
              <Link href="/">
                <img src="/image/k (5).png" alt="App Store" className="w-32 h-11" />
              </Link>
              <Link href="/">
                <img src="/image/k (4).png" alt="Google Play" className="w-32 h-11" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm font-medium">
              {[
                "Profile Info",
                "Flash Deal",
                "Featured Products",
                "Best Selling Product",
                "Latest Products",
                "Top Rated Product",
                "Track Order",
              ].map((item, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div className="md:px-24 px-0">
            <h3 className="font-semibold text-lg mb-3">Other</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {[
                "About Us",
                "Terms And Conditions",
                "Privacy Policy",
                "Refund Policy",
                "Return Policy",
                "Cancellation Policy",
              ].map((item, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
            <p className="text-sm md:text-[1rem] md:font-semibold md:mb-2 mb-4 text-white">
              Subscribe to our new channel to get the latest updates
            </p>
            <div className="flex flex-col md:flex-row text-[0.9rem] gap-5 md:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded md:rounded-r-none bg-gray-800 text-white border md:border-r-0 border-gray-600  focus:outline-none md:w-[300px] w-full"
              />
              <button className="p-3 bg-blue-500 text-white  rounded  md:rounded-l-none hover:bg-blue-600 w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 md:gap-1 w-full md:text-[1.1rem] text-[1rem] mt-10">
          <span className="pr-1">Start A conversation</span>
          <hr className="w-20 md:w-96 border-t border-gray-600" />
          <span className="pl-4 pr-1">Address</span>
          <hr className="w-20 md:w-80 border-t border-gray-600" />
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-2">
            {/* Contact & Address */}
            <div className="text-sm text-white">
              <p className="flex flex-col md:flex-row md:items-center gap-4 pb-9">
                <span className="flex items-center gap-2">
                  <MdLocalPhone className="text-[1rem] md:mt-0 mt-6" /> +00xxxxxxxxxxxx
                </span>
                <span className="flex items-center gap-2">
                  <IoMdMail className="text-[1.1rem]" /> c*********@6amtech.com
                </span>
                <span className="flex items-center gap-2">
                  <HiOutlineUser className="text-[1.7rem]" /> Support Ticket Address
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[0.9rem]" /> Kingston, New York 12401 United States
                </span>
              </p>
            </div>
            {/* Social Icons (Right Aligned) */}
            <div className=" md:mr-3 md:pb-0 pb-6">
              <div className="flex flex-wrap  items-center space-x-2  text-sm text-white">
                {[RiTwitterXFill, GrLinkedinOption, AiFillGooglePlusSquare, BiLogoQuora, FaInstagram, FaFacebookF].map((Icon, idx) => (
                  <span
                    key={idx}
                    className="h-8 w-8 rounded-full bg-[#ffc0cb18] flex items-center justify-center hover:bg-pink-50 hover:text-red-700 cursor-pointer"
                  >
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-white bg-[#8080801a] py-7">
        Copyright 6amTech 2021
      </p>
    </footer>
  );
};

export default Footer;
