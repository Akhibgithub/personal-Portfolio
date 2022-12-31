import React from "react";
import calculator from "./calculatorImg.jpg";

const Work = () => {
  return (
    <div className="work">
      <div className="work-sub-container">
        <div>
          <div className="work-heading">
            <h1 className="work-head" id="work">
              <span className="nanNum">02.</span>Some Things I’ve Built
            </h1>
            <div className="line linetwo"></div>
          </div>
          <div className="projects">
            <h6>Featured Project</h6>
            <a href="">A Calculator With JavaScript</a>
          </div>
          <div className="caldesc">
            <p>
              Projects are the best way to learn JavaScript, and a calculator is
              one of the best projects to choose. A calculator covers all the
              complex interactions with UI and JavaScript while still being
              simple enough for people of any skill level.
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
                <img src={calculator} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
