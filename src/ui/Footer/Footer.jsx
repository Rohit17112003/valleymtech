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
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#183f56] text-white md:pt-10 pt-6">
      <div className="md:px-12 px-4 col-span-2 md:col-span-1">
        {/* Top Section */}
        <div className="flex md:flex-row flex-col justify-between gap-6">
          {/* Logo & App Downloads */}
          <div>
            <Link href="/">
             <Image
  src="/image/k (3).png"
  alt="6Valley"
  width={144}
  height={80} // adjust based on actual image ratio
  className="mb-4"
/>
            </Link>
            <h1 className="uppercase font-semibold md:mt-12 mt-4 py-2">Download Our App</h1>

            <div className="flex space-x-2">
              <Link href="/">
           <Image
  src="/image/k (5).png"
  alt="App Store"
  width={128}
  height={44}
  className="rounded-sm"
/>
              </Link>
              <Link href="/">
               <Image
  src="/image/k (4).png"
  alt="Goggole Play"
  width={128}
  height={44}
  className="rounded-sm"
/>
              </Link>
            </div>
          </div>

       
         <div className="flex  md:gap-10 gap-10">
           <div>
            <h3 className=" text-lg mb-3 uppercase">Quick Links</h3>
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
          <div className="md:px-24 px-0">
            <h3 className=" text-lg mb-3 uppercase">other</h3>
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
         </div>

          {/* Newsletter */}
          <div>
            <h3 className=" text-lg mb-3 uppercase">Newsletter</h3>
            <p className="text-sm md:text-[1rem] md:font-medium md:mb-2 mb-4 text-white">
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

        <div className="flex flex-row items-center justify-between md:justify-start gap-2 md:gap-1 w-full md:text-[1.1rem] text-[1rem] mt-10">
          <span className="pr-1">Start A conversation</span>
          <hr className="w-16 md:w-96 border-t border-gray-600" />
          <span className="md:pl-4 pl-2 pr-1">Address</span>
          <hr className="w-14 md:w-80 border-t border-gray-600" />
        </div>

        {/* Bottom Section */}
        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-2">
            {/* Contact & Address */}
            <div className="text-sm text-white">
              <p className="flex flex-col md:flex-row md:items-center gap-4 pb-9">
                <span className="flex items-center gap-2">
                  <MdLocalPhone className="text-[1rem] " /> +00xxxxxxxxxxxx
                </span>
                <span className="flex items-center gap-2">
                  <IoMdMail className="text-[1.1rem]" /> c*********@6amtech.com
                </span>
                <span className="flex items-center gap-2">
                  <HiOutlineUser className="md:text-[1.2rem] text-[1.1rem]" /> Support Ticket Address
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[0.9rem] md:ml-10" /> Kingston, New York 12401 United States
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
