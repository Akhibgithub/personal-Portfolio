import React from "react";
import ReactCrud from "./ReactCrud.jpg";

const WorkProjTwo = () => {
  return (
    <div className="work">
      <div className="work-sub-container">
        <div>
          <div className="projects">
            <h6>Featured Project</h6>
            <a href="">React Crud Application</a>
          </div>
          <div className="caldesc">
            <p>
              React Crud Application with the help of JSON. Performed CRUD
              operations using React and React Hooks! all operations like Get,
              Put, Post and Delete request with the help of json server.
            </p>
          </div>
          <div></div>
          <div className="cal-tech">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Reactjs</li>
              <li>Bootstrap</li>
            </ul>
            <ul>
              <li>Material UI</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="project-img-container">
            <div className="Img-border"></div>
            <div className="project-cal-Img">
              <a href="">
                <img src={ReactCrud} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjTwo;
