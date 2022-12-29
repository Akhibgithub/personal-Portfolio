import React from "react";
import "./porfolio.css";
import NavBar from "./NavBar";
import SubContainer from "./SubContainer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import AboutMe from "./AboutMe";
import Work from "./Work";
import WorkProjTwo from "./WorkProjTwo";
import WorkProjThree from "./WorkProjThree";
import Contact from "./Contact";
import WorkProjFour from "./WorkProjFour";



const Portfolio = () => {
  return (
    <div className="Container">
      <NavBar />
      <SubContainer />
      <AsideLeft />
      <AsideRight />
      <AboutMe />
      <Work/>
      <WorkProjFour/>
      <WorkProjTwo/>
      <WorkProjThree/>
      <Contact/>
    </div>
  );
};

export default Portfolio;
