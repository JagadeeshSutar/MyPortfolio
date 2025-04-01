import React from "react";
import "./Education.css";

function Education() {
  return (
    <>
      <div className="row eduSection">
        <h2>Education</h2>
        <div className="col-md-6 eduDetails">
          <div>
            <h3>
              Bachelor of Engineering <span>– </span>Computer Science and
              Engineering
            </h3>
            <p>Visvesvaraya Technological University, Belgavi</p>
          </div>
          <div>
            <h3>2021 -2025</h3>
          </div>
        </div>
        <div className="col-md-6 eduDetailsShadow"></div>
      </div>
    </>
  );
}

export default Education;
