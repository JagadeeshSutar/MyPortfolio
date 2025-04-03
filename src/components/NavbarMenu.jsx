import React, { useEffect } from "react";
import "./NavbarMenu.css";

function NavbarMenu({ scrollToSection }) {
  const handleClick = (event, sectionId) => {
    event.preventDefault(); // Stop default link behavior

    // Scroll to section if it exists
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement instanceof HTMLElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section "${sectionId}" not found!`);
    }

    // Change navbar background color based on height
    let menuContainer = document.querySelector(".menuContainer");
    if (menuContainer) {
      let currentHeight = window.getComputedStyle(menuContainer).height;
      menuContainer.style.backgroundColor =
        currentHeight === "99.6px" ? "white" : "rgba(0, 0, 0, 0.086)";
    }

    // Collapse the navbar after clicking a link
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Simulates a click to close the navbar
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
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          <i class="hamburger-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M36.57,73.14h182.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57 
    C16.39,146.29,0,129.89,0,109.71C0,89.5,16.39,73.14,36.57,73.14z M292.57,365.71h182.86c20.21,0,36.57,16.36,36.57,36.57 
    c0,20.18-16.36,36.57-36.57,36.57H292.57c-20.18,0-36.57-16.39-36.57-36.57C256,382.07,272.39,365.71,292.57,365.71z 
    M36.57,219.43 h438.86c20.21,0,36.57,16.36,36.57,36.57c0,20.18-16.36,36.57-36.57,36.57H36.57C16.39,292.57,0,276.18,0,256 
    C0,235.79,16.39,219.43,36.57,219.43z"
              />
            </svg>
          </i>
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
