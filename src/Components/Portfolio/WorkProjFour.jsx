import React from "react";
import Scrollpro from "./Scrollpro.jpg";

const WorkProjFour = () => {
  return (
    <div className="work">
      <div className="work-sub-container">
        <div>
          <div className="projects">
            <h6>Featured Project</h6>
            <a href="">A Scroll Project with HTML CSS and javScript</a>
          </div>
          <div className="caldesc">
            <p>
              Created a navbar that slides down when scrolling and then stays at
              a fixed position at a certain height. This is a popular feature
              found on many professional websites.
            </p>
          </div>
          <div></div>
          <div className="cal-tech">
            <ul>
              <li>HTML,</li>
              <li>CSS,</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="project-img-container">
            <div className="Img-border"></div>
            <div className="project-cal-Img">
              <a href="">
                <img src={Scrollpro} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjFour;
