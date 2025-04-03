import Navbar from "./components/navbar";
import Name from "./components/Name";
import MainContent from "./components/MainContent";
import React, { useState, useEffect } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);
  return <>{showSplash ? <Name /> : <MainContent />}</>;
}

export default App;

// const btnClick = () => {
//   let menuContainer = document.getElementsByClassName("menuContainer")[0];

//   if (menuContainer) {
//     let currentColor = window.getComputedStyle(menuContainer).backgroundColor;

//     if (currentColor === "rgba(0, 0, 0, 0.086)") {
//       menuContainer.style.backgroundColor = "white";
//     } else {
//       menuContainer.style.backgroundColor = "rgba(0, 0, 0, 0.086)";
//     }
//   }
// };

// const handleButtonClick = (event, section) => {
//   event.preventDefault();

//   const sectionElement = document.getElementById(section);

//   // Ensure the element exists before scrolling
//   if (sectionElement instanceof HTMLElement) {
//     sectionElement.scrollIntoView({ behavior: "smooth" });
//   } else {
//     console.warn(`Section "${section}" not found!`);
//   }

//   // Collapse the navbar after clicking a link
//   const navbarToggler = document.querySelector(".navbar-toggler");
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   if (navbarToggler && navbarCollapse.classList.contains("show")) {
//     navbarToggler.click(); // Simulates a click to close the navbar
//   }
// };