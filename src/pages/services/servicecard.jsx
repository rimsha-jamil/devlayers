import React from "react";

const ServiceCard = ({ icon, title, subtitle }) => {
  return (
    <div className="group w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-xl border border-gray-200 shadow-md transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center text-center p-6 cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-[#0b4ea1] text-3xl mb-4 transition-colors duration-300 ">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default ServiceCard;
