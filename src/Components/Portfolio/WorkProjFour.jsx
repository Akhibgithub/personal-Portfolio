import React from "react";
import Scrollpro from "./Scrollpro.jpg";

const WorkProjFour = () => {
  return (
    <div className="work">
      <div className="work-sub-container">
        <div className="projects">
          <h6>Featured Project</h6>
          <a href="#">Scroll Project with pure Javascript</a>
        </div>
        <div className="caldesc">
          <p>
            Created a navbar that slides down when scrolling and then stays at a
            fixed position at a certain height. This is a popular feature found
            on many professional websites.
          </p>
        </div>
        <div>
          <div className="Img-border"></div>
          <div className="project-cal-Img">
            <a href="">
              <img
                src={Scrollpro}
                alt="Scroll project"
                width="500px"
                height="300px"
              />
            </a>
          </div>
        </div>
        <div className="cal-tech">
          <ul>
            <li>HTML,</li>
            <li>CSS,</li>
            <li>JavaScript (ES6+),</li>
            <br />
            <li>Font Awesome Icons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkProjFour;
