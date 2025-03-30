import React from "react";
import "./NavbarMenu.css";

function NavbarMenu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbarMenu fixed-top navbarMenu">
        <div class="container-fluid menuContainer">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
