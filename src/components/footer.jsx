import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-blue-950 text-white pt-10 pb-6 px-6 md:px-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
         <img
        src="https://www.devlayers.org/static/media/Group%2015%20(2).0c02355fab0ef3a5ec00.png"
        alt="Logo"
        className="h-10 w-40"
      />
          <p className="text-sm leading-relaxed text-[#e5e7eb]">
            Building robust web, mobile, and cloud solutions. Your trusted
            software development partner.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-blue-500 transition cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="bg-gray-700 p-2 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li className="text-gray-300 hover:text-white cursor-pointer">Home</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">About Us</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">Services</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>Graphic Designing</li>
            <li>UX/UI Designing</li>
            <li>App Development</li>
            <li>Website Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 " />
              <span className="text-gray-300 hover:text-white cursor-pointer">info@devlayers.org</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-gray-300 hover:text-white cursor-pointer" />
              <span className="text-gray-300 hover:text-white cursor-pointer">+92 304 6193793</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-white" />
              <span>
                Canal Avenue, Abbasia Town, near Cafe Asia, Rahim Yar Khan
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 Devlayers. All rights reserved.
      </div>

     
    </footer>
  );
};

export default Footer;
