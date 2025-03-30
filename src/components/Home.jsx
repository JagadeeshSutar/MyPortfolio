import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="divHome row">
      <div className="col-6 textSection">
        <div className="greetingHeading">
          <h1>G'day, I am</h1>
          <h1>Jagadeesh Sutar</h1>
        </div>
        <p>
          "I am a Computer Science and Engineering graduate with a strong
          passion for technology and problem-solving. Skilled in full-stack web
          development, I specialize in the MERN stack (MongoDB, Express.js,
          React, and Node.js) to build dynamic and responsive applications.
          Currently, I am enhancing my problem-solving abilities by learning
          Data Structures and Algorithms (DSA) using Java. Throughout my
          journey, I have developed numerous projects that have provided me with
          hands-on experience and a deeper understanding of practical
          applications. I am always eager to learn, collaborate, and contribute
          to impactful solutions in the tech world."
        </p>
      </div>
      <div className="col-6">
        <div className="homeCircle"></div>
        <div className="resume">
          <h1 className="downloadHead">Download Resume</h1>
          <a
            href="https://drive.google.com/file/d/10fR6BuRVt48Ku1gNgLVirceuuRq9Joj-/view?usp=drive_link"
            download="Jagadeesh_Sutar_Resume.pdf"
            class="download-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
