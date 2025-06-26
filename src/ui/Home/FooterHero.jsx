import Image from "next/image";
import { HiHomeModern } from "react-icons/hi2";
import { MdContactMail } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { SiBlogger } from "react-icons/si";

const features = [
  {
    text: "Fast Delivery all across the country",
    image: "/images/icon (4).png",
  },
  {
    text: "Safe Payment",
    image: "/images/icon (3).png",
  },
  {
    text: "7 Days Return Policy",
    image: "/images/icon (2).png",
  },
  {
    text: "100% Authentic Products",
    image: "/images/icon (1).png",
  },
];

const infoCards = [
  {
    title: "About Us",
    text: "Know about our company more.",
    icon: HiHomeModern,
  },
  {
    title: "Contact Us",
    text: "We are Here to Help",
    icon: MdContactMail,
  },
  {
    title: "FAQ",
    text: "Get all Answers",
    icon: FaQuestionCircle,
  },
  {
    title: "Blog",
    text: "Check Latest Blogs",
    icon: SiBlogger,
  },
];

export default function Home() {
  return (
    <div className="px-4 md:px-12">
      {/* Features Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-[#D3E5FB] py-6 bg-[#EDF5FF] text-[#1B1C1E] rounded-md overflow-hidden">
        {features.map(({ text, image }, index) => (
          <div
            key={index}
            className="py-6 text-center text-sm font-medium flex flex-col items-center gap-2"
          >
            <div className="relative md:w-[90px] md:h-[90px] w-[120px] h-[120px]">
              <Image
                src={image}
                alt={text}
                fill
                className="object-contain transition-transform scale-110 duration-300"
              />
            </div>
            <p className="mt-6">
              {text.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i === 1 ? <br /> : " "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <div className="h-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-[#1B1C1E] md:px-14 pb-6">
        {infoCards.map(({ title, text, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white pt-10 pb-20 text-center text-sm font-medium rounded-md shadow-sm border"
          >
            <div className="flex justify-center mb-4 text-blue-600 text-4xl">
              <Icon />
            </div>
            <div className="font-semibold">{title}</div>
            <div className="text-xs text-[#555] mt-1">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
