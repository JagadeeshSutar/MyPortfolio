import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="row projects">
        <h1>Projects</h1>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div className="leftProjectCardText">
              <h2>Airbnb</h2>
              <p>
                A fully responsive full stack web application inspired by
                Airbnb, developed using EJS, Bootstrap, Node.js, Express.js, and
                MongoDB. The platform includes secure user authentication,
                complete CRUD functionality for listings, user reviews, image
                uploads via Cloudinary, and interactive maps powered by Mapbox.
                It features dynamic server-rendered pages, session management,
                and input validation to ensure a seamless and secure user
                experience.
              </p>

              <a href="https://airbnb-43d3.onrender.com">Project Link</a>
              <a href="https://github.com/JagadeeshSutar/airbnb">GitHub</a>
            </div>
            <div>
              <div className="leftBox">
                <img src="../images/laptop.png" alt="Project" />
                <img
                  src="../images/airbnb.png"
                  alt="Project Image"
                  className="leftProjectImage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div>
              <div className="rightBox">
                <img src="../images/laptop.png" alt="" />
                <img
                  src="../images/zoom.png"
                  alt="Project Image"
                  className="rightProjectImage"
                />
              </div>
            </div>
            <div className="rightProjectCardText">
              <h2>Zoom</h2>
              <p>
                A real-time video conferencing app built with React, Node.js,
                WebRTC, and Socket.io. It supports peer-to-peer video calls,
                screen sharing, and dynamic room creation. Real-time signaling
                is handled via Socket.io, while WebRTC manages direct media
                streams for smooth and responsive communication.
              </p>

              <a href="https://zoom-s4ln.onrender.com/">Project Link</a>
              <a href="https://github.com/JagadeeshSutar/Zoom.git">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div className="leftProjectCardText">
              <h2>Apna College Clone</h2>
              <p>
                A fully responsive frontend clone of the Apna College website
                built using HTML, CSS, and JavaScript. The project focuses on
                replicating the UI and layout of the original platform while
                ensuring mobile-friendly design and smooth user interactions.
                Key features include responsive navigation, structured content
                sections, and clean styling that mirrors the original branding
                and layout.
              </p>
              <a href="https://apnacollegejs.netlify.app/">Project Link</a>
              <a href="https://github.com/JagadeeshSutar/Apna-College-Web.git">
                Git Hub
              </a>
            </div>
            <div>
              <div className="leftBox">
                <img src="../images/laptop.png" alt="" />
                <img
                  src="../images/apnacollege.png"
                  alt="Project Image"
                  className="leftProjectImage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div>
              <div className="rightBox">
                <img src="../images/laptop.png" alt="" />
                <img
                  src="../images/spotify.png"
                  alt="Project Image"
                  className="rightProjectImage"
                />
              </div>
            </div>
            <div className="rightProjectCardText">
              <h2>Netflix Clone</h2>
              <p>
                A responsive frontend clone of the Spotify website built using
                HTML, CSS, and JavaScript. The project emphasizes creating a
                visually appealing and functional layout that mimics Spotify's
                interface. It features dynamic content sections, smooth
                navigation, and media controls, ensuring a seamless user
                experience across various screen sizes and devices.
              </p>

              <a href="https://apnacollegespotifyclone.netlify.app/">
                Project Link
              </a>
              <a href="https://github.com/JagadeeshSutar/SpotifyClone.git">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
