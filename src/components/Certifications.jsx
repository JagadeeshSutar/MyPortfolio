import React from "react";
import "./Certifications.css";

function Certifications() {
  return (
    <>
      <div className="row certification">
        <div className="certCircle1"></div>
        <div className="col-md-9 certContainer">
          <div className="certHead">
            <h2>
              <i class="fa-solid fa-award"></i>Certifications
              <i class="fa-solid fa-award"></i>
            </h2>
          </div>
          <div className="web row">
            <div className="col-6">
              <h1>
                Full Stack Web Development <i class="fa-solid fa-medal"></i>
              </h1>
              <h3>by - Apna College</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptates deleniti rerum ullam officiis, ducimus corporis.
                Laudantium, dolor reprehenderit ut qui optio nihil commodi
                repudiandae velit. Soluta a culpa alias. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-6 certificate">
              <img src="../images/certificate.jpeg" alt="" />
            </div>
          </div>
          <div className="dsa row">
            <div className="col-6">
              <h1>
                DSA with Java <i class="fa-solid fa-medal"></i>
              </h1>
              <h3>by - Apna College</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                voluptates deleniti rerum ullam officiis, ducimus corporis.
                Laudantium, dolor reprehenderit ut qui optio nihil commodi
                repudiandae velit. Soluta a culpa alias. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-6 certificate">
              <img src="../images/certificate.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="certCircle2"></div>
      </div>
    </>
  );
}

export default Certifications;
