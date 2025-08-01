import React from "react";

const WorkCard = ({ icon, title, subtitle }) => {
  return (
    <div className="group w-full sm:w-80 bg-gray-900 rounded-xl border border-gray-800 shadow-md hover:bg-gray-800 flex flex-col justify-center items-start text-start cursor-pointer px-5 py-6 transition-all duration-300">
      {/* Icon aligned to start */}
      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-[#0b4ea1] text-3xl mb-4">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-white mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default WorkCard;
