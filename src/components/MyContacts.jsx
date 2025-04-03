import React from "react";
import "./MyContacts.css";

function MyContacts() {
  return (
    <>
      <div className="row contactsContainer">
        <div className="col-9">
          <h1 className="contactsTitle">Connect with me</h1>
          <div className="row">
            <div className="col-9 socialsContainer">
              <h2>My Socials</h2>
              <ul className="socialList">
                <li>
                  <div className="socialIconContainer">
                    <a
                      href="https://github.com/JagadeeshSutar"
                      className="github"
                    >
                      <i class="fa-brands fa-github"></i>Github
                    </a>
                  </div>
                </li>
                <li>
                  <div className="socialIconContainer">
                    <a
                      href="https://www.linkedin.com/in/jagadeesh-sutar/"
                      className="linkedin"
                    >
                      <i class="fa-brands fa-linkedin"></i>LinkedIn
                    </a>
                  </div>
                </li>
                <li className="instagram">
                  <div className="socialIconContainer">
                    <a href="https://www.instagram.com/jagadeesh_sutar/">
                      <i class="fa-brands fa-instagram"></i>Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h1 className="feedback">
        "I’d love to hear your feedback! Feel free to share your thoughts
        through the feedback form or connect with me anytime on
        <a href="https://www.linkedin.com/in/jagadeesh-sutar/">LinkedIn</a> ."
      </h1>
    </>
  );
}

export default MyContacts;
