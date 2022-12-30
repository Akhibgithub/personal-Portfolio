import React from "react";
import ProfilePicture from "./ProfilePicture.jpg";

const AboutMe = () => {
  return (
    <div className="About-container" id="about">
      <div className="About-sub-container">
        <div>
          <div className="About-heading">
            <h1>
              <span className="nanNum">01.</span>About Me
            </h1>
            <div className="line"></div>
          </div>
          <div className="praragh">
            <p>
              Hello! My name is Akhib and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>

            <p>Here are a few technologies I’ve been working with recently :</p>
            <div className="skill-container">
              <div className="s-left skills">
                <ul>
                  <li>
                    <span className="lilogo">▹</span> HTML
                  </li>
                  <li>
                    <span className="lilogo">▹</span> CSS
                  </li>
                  <li>
                    <span className="lilogo">▹</span> Bootstrap
                  </li>
                  <li>
                    <span className="lilogo">▹</span> Material UI
                  </li>
                </ul>
              </div>
              <div className="s-right skills">
                <ul>
                  <li>
                    <span className="lilogo">▹</span> JavaScript (ES6+)
                  </li>
                  <li>
                    <span className="lilogo">▹</span> Reactjs
                  </li>
                  <li>
                    <span className="lilogo">▹</span> Redux.js
                  </li>
                  <li>
                    <span className="lilogo">▹</span> TypeScript
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile-border"></div>
          <div className="profile">
            <img src={ProfilePicture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
