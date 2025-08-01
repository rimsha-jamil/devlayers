import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import ChoseCard from "./chosecard";

const Chose = [
  { icon: <FaCode />, title: "Expert Development", subtitle: "Our team of certified developers delivers cutting-edge solutions using the latest technologies." },
  { icon: <FaMobileAlt />, title: "On-Time Delivery", subtitle: "We respect your deadlines and ensure timely project completion with our efficient processes." },
  { icon: <FaCloud />, title: "Quality Assurance", subtitle: "Rigorous testing and quality control at every stage to deliver flawless software solutions." },
  { icon: <IoMdColorPalette />, title: "Client Collaboration", subtitle: "Transparent communication and active involvement throughout the development lifecycle." },
  { icon: <MdOutlineSecurity />, title: "Secure Solutions", subtitle: "Industry-standard security practices to protect your data and applications." },
  { icon: <FaHandsHelping />, title: "Performance Optimized", subtitle: "High-performance applications that scale with your business growth." },
];

const ChoseGrid = () => {
  return (
    <div className="py-12 px-4 sm:px-8 mt-10 bg-white">
      <div className="text-4xl sm:text-5xl font-bold text-center text-[#0b4ea1] mb-6">
        Why Choose Us
      </div>

      <div className="text-[16px] text-center mb-10 text-black">
        We combine technical excellence with creative problem-solving to deliver
        <br className="hidden sm:block" />
        exceptional software solutions.
      </div>

      {/* Centered grid container */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
          {Chose.map((chose, index) => (
            <ChoseCard
              key={index}
              icon={chose.icon}
              title={chose.title}
              subtitle={chose.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoseGrid;
