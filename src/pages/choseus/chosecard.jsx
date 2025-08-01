import React from "react";

const ChoseCard = ({ icon, title, subtitle }) => {
  return (
    <div className="group w-full sm:w-[300px] h-auto bg-gray-50 rounded-xl border border-gray-200 shadow-md flex flex-col justify-center text-center sm:text-start cursor-pointer px-5 py-6">
      <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 shadow-md flex items-center justify-center text-[#0b4ea1] text-3xl mb-4 mx-auto sm:mx-0">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-sm text-black mt-2">{subtitle}</p>
    </div>
  );
};

export default ChoseCard;
