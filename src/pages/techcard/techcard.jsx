import React from "react";

const TechCard = ({ name, grayLogo, colorLogo }) => {
  return (
    <div className="w-36 sm:w-40 h-42   xl:h-38 bg-white rounded-xl border border-gray-100 shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg flex flex-col items-center justify-center cursor-pointer">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 group">
        {/* Gray Logo */}
        <img
          src={grayLogo}
          alt={`${name} Gray Logo`}
          className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
        />
        {/* Color Logo */}
        <img
          src={colorLogo}
          alt={`${name} Color Logo`}
          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <p className="mt-3 text-base sm:text-lg md:text-sm text-gray-700 font-semibold transition-colors duration-300 text-center">
        {name}
      </p>
    </div>
  );
};

export default TechCard;
