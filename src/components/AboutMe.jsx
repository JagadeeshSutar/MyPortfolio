import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="aboutMe row">
        <div className="col-6 heroImage">
          <img src="../images/jagadeesh.png" alt="My Image" />
        </div>
        <div className="col-6">
          <h1 className="aboutMeTag">About Me</h1>
          <p>
            "Hello, I’m Jagadeesh Sutar, a passionate Computer Science and
            Engineering graduate. With a strong interest in software development
            and problem-solving, I love turning ideas into reality through code.
            From building full-stack applications to exploring emerging
            technologies, I continually push my boundaries and embrace new
            challenges. I thrive on solving complex problems and believe every
            project is an opportunity to grow and innovate. Beyond coding, I’m
            fascinated by how technology shapes our world, and I enjoy
            collaborating with like-minded individuals to bring impactful ideas
            to life. Feel free to explore my work and reach out — I’d be excited
            to connect!"
          </p>
          <a href="https://www.linkedin.com/in/jagadeesh-sutar/">
            <button className="connectBtn">Know more about me on LinkedIN</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
