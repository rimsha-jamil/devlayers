import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const NavBar = ({
  onHomeClick,
  onServicesClick,
  onAboutClick,
  onContactClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the user has scrolled down
  // This will change the navbar background color and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5 sm:px-10">
        {/* Logo */}
        <div >
          <img
            src="https://www.devlayers.org/static/media/Group%2015%20(2).0c02355fab0ef3a5ec00.png"
            alt="Logo"
            className="h-10 w-40"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          <div
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1] cursor-pointer"
            onClick={onHomeClick}
          >
            Home
          </div>

          <div
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1] cursor-pointer"
            onClick={onServicesClick}
          >
            Services
          </div>
          <div className="relative group">
            <div
              onClick={onAboutClick}
              className="flex items-center gap-1 text-xl font-medium italic text-black hover:text-[#0b4ea1] cursor-pointer"
            >
              About Us
              <ChevronDownIcon className="w-5 h-5 text-black group-hover:text-[#0b4ea1]" />
            </div>

            {/* Dropdown Content */}
            <div className="absolute mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20">
              <div className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic cursor-pointer">
                Our Story
              </div>
              <div
                to="/team"
                className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic cursor-pointer"
              >
                Team
              </div>
              <div
                to="/values"
                className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic cursor-pointer"
              >
                Values
              </div>
            </div>
          </div>

          <div
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1] cursor-pointer"
            onClick={onContactClick}
          >
            Contact
          </div>
        </div>

        {/* Button (desktop only) */}

        <div
          className={`hidden lg:inline-block bg-[#0b4ea1] text-white font-bold px-7 py-2 rounded-full shadow-md transition duration-300 hover:bg-blue-900 cursor-pointer
    ${
      isScrolled
        ? "opacity-100 visible pointer-events-auto"
        : "opacity-0 invisible pointer-events-none"
    }
  `}
          onClick={onContactClick}
        >
          Let's Talk
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3Icon className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-5 pb-6 space-y-4 bg-white shadow-md">
          <div
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => {
              setIsMenuOpen(false);
              onHomeClick();
            }}
          >
            Home
          </div>
          <div
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => {
              setIsMenuOpen(false);
              onServicesClick();
            }}
          >
            Services
          </div>
          <div
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => {
              setIsMenuOpen(false);
              onAboutClick();
            }}
          >
            About Us
          </div>
          <div
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => {
              setIsMenuOpen(false);
              onContactClick();
            }}
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
