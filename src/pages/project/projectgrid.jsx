import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import ProjectCard from "./ProjectCard";

const Project = [
  {
    icon: <FaCode />,
    title: "Discovery",
    subtitle:
      "We understand your business goals and challenges before we begin.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Design",
    subtitle:
      "Wireframes and prototypes to visualize seamless user experiences.",
  },
  {
    icon: <FaCloud />,
    title: "Development",
    subtitle: "Clean, scalable code with the latest technologies.",
  },
  {
    icon: <IoMdColorPalette />,
    title: "Testing",
    subtitle: "Rigorous QA to ensure top-notch performance and reliability.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "Launch & Support",
    subtitle: "Smooth launch and ongoing optimization support.",
  },
];

const ProjectGrid = () => {
  return (
    <div className="mt-20 px-6 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-10 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Project Journey
        </h2>
        <p className="text-base text-gray-700">
          From concept to launch, we guide your software project every step of
          the way.
        </p>
      </div>

      {/* Timeline section */}
      <div className="py-16 flex justify-center ">
        <div className="relative flex flex-col items-start w-full max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-2 bottom-12 w-[3px] bg-[#0b4ea1] z-0" />

          {Project.map((step, index) => (
            <div key={index} className="relative flex items-start mb-12 w-full">
              {/* Timeline circle */}
              <div className="absolute left-3 sm:left-4 top-10 w-4 h-4 rounded-full border-[3px] border-[#0b4ea1] bg-white z-10"></div>

              {/* Card container */}
              <div className="ml-10 sm:ml-14 w-full flex justify-center px-4">
                <ProjectCard
                  icon={step.icon}
                  title={step.title}
                  subtitle={step.subtitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
