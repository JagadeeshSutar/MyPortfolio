import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="row skillSection">
        <h1>Skills</h1>
        <div className="col-4">
          <ul>
            <li>
              <img src="../images/html.png" alt="" />
              <span>HTML</span>
            </li>
            <li>
              <img src="../images/react.webp" alt="" />
              <span>ReactJS</span>
            </li>
            <li>
              <img src="../images/bootstrap.svg" alt="" />
              <span>Bootstrap</span>
            </li>
            <li>
              <img src="../images/git.webp" alt="" />
              <span>Git</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <img src="../images/css.png" alt="" />
              <span>CSS</span>
            </li>
            <li>
              <img src="../images/node.webp" alt="" />
              <span>NodeJS</span>
            </li>
            <li>
              <img src="../images/mysql.svg" alt="" />
              <span>SQL</span>
            </li>
            <li>
              <img src="../images/github.png" alt="" />
              <span>GitHub</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <img src="../images/js.webp" alt="" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src="../images/express.webp" alt="" />
              <span>ExpressJS</span>
            </li>
            <li>
              <img src="../images/mongodb.svg" alt="" />
              <span>MongoDB</span>
            </li>

            <li>
              <img src="../images/botstrap.svg" alt="" />
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
