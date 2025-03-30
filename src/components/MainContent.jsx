import React from "react";
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
  return (
    <>
      <div className="containerBody">
        <Navbar />
        <NavbarMenu/>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <MyContacts/>
        <Contact />
      </div>
    </>
  );
}

export default MainContent;
