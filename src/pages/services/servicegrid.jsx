
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import ServiceCard from "./servicecard";

const services = [
  { icon: <FaCode />, title: "Web Development", subtitle: "Robust and scalable websites tailored to your business needs." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", subtitle: "Cross-platform mobile apps with seamless user experience." },
  { icon: <FaCloud />, title: "Cloud Services", subtitle: "Reliable AWS & cloud-based infrastructure solutions." },
  { icon: <IoMdColorPalette />, title: "UI/UX Design", subtitle: "Modern, user-centered design built for usability and beauty." },
  { icon: <MdOutlineSecurity />, title: "Cybersecurity", subtitle: "Protecting your systems and users with advanced security." },
  { icon: <FaHandsHelping />, title: "Consulting", subtitle: "Guiding your tech decisions with expert strategies and planning." },
];

const ServicesGrid = () => {
  return (
   <div className="py-12 px-4 sm:px-6 md:px-10 xl:px-20 mt-10">
  {/* Section Tagline */}
  <div className="text-[#0b4ea1] text-center text-sm sm:text-base md:text-lg font-bold mb-3">
    OUR SERVICES
  </div>

  {/* Main Heading */}
  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-4">
    What We Offer
  </div>

  {/* Description Paragraph */}
  <div className="text-sm sm:text-base md:text-lg text-center mb-10 text-gray-700 max-w-3xl mx-auto px-2">
    We empower your business with complete end-to-end digital services,
    <br className="hidden sm:block" />
    from design to deployment and beyond.
  </div>

  {/* Grid of Service Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        icon={service.icon}
        title={service.title}
        subtitle={service.subtitle}
      />
    ))}
  </div>
</div>

  );
};

export default ServicesGrid;
