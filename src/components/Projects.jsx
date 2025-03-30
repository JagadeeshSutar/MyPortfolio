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
                Here are some of my projects Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Exercitationem quisquam sit
                aperiam quia tempore minima? Doloremque pariatur tenetur nisi
                quod magnam, consequuntur illum error nihil accusantium nesciunt
                sit placeat sint.
              </p>

              <a href="">Link</a>
              <a href="">Name</a>
            </div>
            <div>
              <div className="leftBox">
                <img src="../images/laptop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div>
              <div className="rightBox">
                <img src="../images/laptop.png" alt="" />
              </div>
            </div>
            <div className="rightProjectCardText">
              <h2>Zerodha</h2>
              <p>
                Here are some of my projects Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Exercitationem quisquam sit
                aperiam quia tempore minima? Doloremque pariatur tenetur nisi
                quod magnam, consequuntur illum error nihil accusantium nesciunt
                sit placeat sint.
              </p>

              <a href="">Link</a>
              <a href="">Name</a>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div className="leftProjectCardText">
              <h2>LinkedIn</h2>
              <p>
                Here are some of my projects Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Exercitationem quisquam sit
                aperiam quia tempore minima? Doloremque pariatur tenetur nisi
                quod magnam, consequuntur illum error nihil accusantium nesciunt
                sit placeat sint.
              </p>
              <a href="">Link</a>
              <a href="">Name</a>
            </div>
            <div>
              <div className="leftBox">
                <img src="../images/laptop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 cardContainer">
          <div className="projectCard">
            <div>
              <div className="rightBox">
                <img src="../images/laptop.png" alt="" />
              </div>
            </div>
            <div className="rightProjectCardText">
              <h2>Zoom</h2>
              <p>
                Here are some of my projects Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Exercitationem quisquam sit
                aperiam quia tempore minima? Doloremque pariatur tenetur nisi
                quod magnam, consequuntur illum error nihil accusantium nesciunt
                sit placeat sint.
              </p>

              <a href="">Link</a>
              <a href="">Name</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
