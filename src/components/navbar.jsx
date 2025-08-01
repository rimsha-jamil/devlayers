import React, { useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full">
      <div className="h-20 flex items-center justify-between px-5 sm:px-10">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://www.devlayers.org/static/media/Group%2015%20(2).0c02355fab0ef3a5ec00.png"
            alt="Logo"
            className="h-10 w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          <Link
            to="/"
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1]"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1]"
          >
            Services
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 text-xl font-medium italic text-black hover:text-[#0b4ea1] cursor-pointer">
              About Us
              <ChevronDownIcon className="w-5 h-5 text-black group-hover:text-[#0b4ea1]" />
            </div>

            {/* Dropdown Content */}
            <div className="absolute mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20">
              <Link
                to="/our-story"
                className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic"
              >
                Our Story
              </Link>
              <Link
                to="/team"
                className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic"
              >
                Team
              </Link>
              <Link
                to="/values"
                className="block px-4 py-2 text-black hover:bg-blue-100 hover:text-[#0b4ea1] rounded-md italic"
              >
                Values
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className="text-xl font-medium italic text-black hover:text-[#0b4ea1]"
          >
            Contact
          </Link>
        </div>

        {/* Button (desktop only) */}
        <Link
          to="/contact"
          className="hidden lg:inline bg-[#0b4ea1] text-white font-bold px-7 py-2 rounded-full hover:bg-blue-900 shadow-md"
        >
          Let's Talk
        </Link>

        {/* Hamburger Menu (mobile only) */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-5 pb-6 space-y-4 bg-white shadow-md">
          <Link
            to="/"
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <div className=" pt-2">
            <p className="text-lg font-medium text-black">About Us</p>
            <div className="ml-4 space-y-2 mt-2">
              <Link
                to="/our-story"
                className="block text-sm text-black hover:text-[#0b4ea1]"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                to="/team"
                className="block text-sm text-black hover:text-[#0b4ea1]"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/values"
                className="block text-sm text-black hover:text-[#0b4ea1]"
                onClick={() => setIsMenuOpen(false)}
              >
                Values
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="block text-lg font-medium text-black hover:text-[#0b4ea1]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="block w-full bg-[#0b4ea1] text-white text-center font-bold px-4 py-2 rounded-full hover:bg-blue-900 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
