import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="./images/jagadeesh.png"
              alt="My Image"
              className="myImageLogo"
            />
          </a>
        </div>
      </nav>
    </>
  );
}

export default navbar;
