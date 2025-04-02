import React, { useRef } from "react";
import Home from "./Home";
import Navbar from "./navbar";
import "./MainContent.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import MyContacts from "./MyContacts";
import NavbarMenu from "./NavbarMenu";

function MainContent() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      education: educationRef,
      certifications: certificationsRef,
      contact: contactRef,
    };

    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <NavbarMenu scrollToSection={scrollToSection} />{" "}
      {/* ✅ Pass scrollToSection here */}
      <div className="containerBody">
        <Navbar />
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <AboutMe />
        </div>
        <div ref={skillsRef} id="skills">
          <Skills />
        </div>
        <div ref={projectsRef} id="projects">
          <Projects />
        </div>
        <div ref={educationRef} id="education">
          <Education />
        </div>
        <div ref={certificationsRef} id="certifications">
          <Certifications />
        </div>
        <div ref={contactRef} id="contact">
          <MyContacts />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default MainContent;
