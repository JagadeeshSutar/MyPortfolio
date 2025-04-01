import React from "react";
import "./NavbarMenu.css";

function NavbarMenu() {
  const btnClick = () => {
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
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbarMenu fixed-top navbarMenu">
        <div class="container-fluid menuContainer">
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={btnClick}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About
              </a>
              <a class="nav-link" href="#">
                Skills
              </a>
              <a class="nav-link" href="#">
                Projects
              </a>
              <a class="nav-link" href="#">
                Education
              </a>
              <a class="nav-link" href="#">
                Certifications
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu;
