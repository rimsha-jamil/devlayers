import React from "react";

const ProjectCard = ({ icon, title, subtitle }) => {
  return (
    <div className="group w-250  h-35 bg-gray-50 rounded-xl border border-gray-200 shadow-md transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-start justify-start  cursor-pointer px-5">
        <div className="flex items-center justify-start gap-5 mt-5">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0b4ea1] text-xl transition-colors duration-300 shadow-md ">
        {icon}
        
      </div>
      <h3 className="text-xl font-semibold text-gray-800  transition-colors duration-300">{title}</h3></div>
      <p className="text-sm text-gray-500 mt-2 ">{subtitle}</p>
    </div>
  );
};

export default ProjectCard;
