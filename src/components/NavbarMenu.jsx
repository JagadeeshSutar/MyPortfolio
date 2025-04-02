import React, { useEffect } from "react";
import "./NavbarMenu.css";

function NavbarMenu({ scrollToSection }) {
  // ✅ Accept the prop

  const handleClick = (e, sectionId) => {
    e.preventDefault(); // Stop default link behavior
    if (scrollToSection) {
      scrollToSection(sectionId); // ✅ Call the function
    } else {
      console.error("scrollToSection function is missing!");
    }

    let menuContainer = document.getElementsByClassName("menuContainer")[0];
    if (menuContainer) {
      let currentColor = window.getComputedStyle(menuContainer).backgroundColor;
      if (currentColor === "rgba(0, 0, 0, 0.086)") {
        menuContainer.style.backgroundColor = "white";
      } else {
        menuContainer.style.backgroundColor = "rgba(0, 0, 0, 0.086)";
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbarMenu fixed-top">
      <div className="container-fluid menuContainer">
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" onClick={(e) => handleClick(e, "home")}>
              Home
            </a>
            <a className="nav-link" onClick={(e) => handleClick(e, "about")}>
              About
            </a>
            <a className="nav-link" onClick={(e) => handleClick(e, "skills")}>
              Skills
            </a>
            <a className="nav-link" onClick={(e) => handleClick(e, "projects")}>
              Projects
            </a>
            <a
              className="nav-link"
              onClick={(e) => handleClick(e, "education")}
            >
              Education
            </a>
            <a
              className="nav-link"
              onClick={(e) => handleClick(e, "certifications")}
            >
              Certifications
            </a>
            <a className="nav-link" onClick={(e) => handleClick(e, "contact")}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMenu;
