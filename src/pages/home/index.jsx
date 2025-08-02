import React, { useRef } from "react";
import TechStackGrid from "../../pages/techcard/techstackgrid";
import ServicesGrid from "../../pages/services/servicegrid";
import WorkGrid from "../../pages/work/workgrid";
import ProjectGrid from "../../pages/project/projectgrid";
import ChoseGrid from "../../pages/choseus/chosegrid";
import ContactPage from "../../pages/contact/contact";
import HomeVedioPage from "./homevedio";
import NavBar from "../../components/navbar";

const Home = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar
        onHomeClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <div ref={homeRef}>
        <HomeVedioPage />
      </div>

      <div ref={servicesRef}>
        <ServicesGrid />
      </div>

      <div ref={aboutRef}>
        <TechStackGrid />
        <WorkGrid />
        <ProjectGrid />
        <ChoseGrid />
      </div>

      <div ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
