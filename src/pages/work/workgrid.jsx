import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import WorkCard from "./workcard";

const Work = [
  { icon: <FaCode />, title: "Discovery", subtitle: "We understand your business goals and challenges before we begin." },
  { icon: <FaMobileAlt />, title: "Design", subtitle: "Wireframes and prototypes to visualize seamless user experiences." },
  { icon: <FaCloud />, title: "Development", subtitle: "Clean, scalable code with the latest technologies." },
  { icon: <IoMdColorPalette />, title: "Testing", subtitle: "Rigorous QA to ensure top-notch performance and reliability." },
  { icon: <MdOutlineSecurity />, title: "Launch & Support", subtitle: "Smooth launch and ongoing optimization support." },
];

const WorkGrid = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-10 xl:px-20 mt-10 bg-gradient-to-br from-black to-blue-950">
      {/* Heading */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
        How We Work
      </div>

      {/* Subheading */}
      <div className="text-sm sm:text-base md:text-lg text-center mb-10 text-white max-w-3xl mx-auto px-2">
        We follow a structured and collaborative approach to turn your ideas into powerful
        <br className="hidden sm:block" />
        digital products.
      </div>

      {/* Responsive Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {Work.map((work, index) => (
            <WorkCard
              key={index}
              icon={work.icon}
              title={work.title}
              subtitle={work.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkGrid;
