import React from "react";
import ECommerce from "./E-Commerce.png";

const WorkProjThree = () => {
  return (
    <div className="work">
      <div className="work-sub-container">
        <div>
          <div className="projects">
            <h6>Featured Project</h6>
            <a href="">E-Commerce Website With Reactjs & Reduxjs</a>
          </div>
          <div className="caldesc">
            <p>
            Building an e-Commerce application with React & Redux. Covered component basics, rendering various items in components, parent-to-child component communication, Hooks!, forms, REST-API calls with JSON server and basic routing.
            </p>
          </div>
          <div></div>
          <div className="cal-tech">
            <ul>
              <li>HTML,</li>
              <li>CSS,</li>
              <li>JavaScript (ES6+),</li>
              <li>Reactjs,</li>
              <li>Reduxjs</li>
            </ul>
            <ul>
              <li>Bootstrap,</li>
              <li>Material UI</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="project-img-container">
            <div className="Img-border"></div>
            <div className="project-cal-Img">
              <a href="">
                <img src={ECommerce} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjThree;
