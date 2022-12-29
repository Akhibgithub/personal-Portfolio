import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AsideLeft = () => {
  const logoSx = {
    "&:hover": {
      color: "#64ffda",
    },
  };
  return (
    <div>
      <aside>
        <div className="left-container">
          <div className="logos">
            <a href="https://github.com/Akhibgithub" target={"_blank"}>
              <GitHubIcon className="logo-trans" sx={logoSx} />
            </a>
          </div>
          <div className="logos">
            <a href="https://www.instagram.com/shaikh_akhib_" target={"_blank"}>
              <InstagramIcon className="logo-trans" sx={logoSx} />
            </a>
          </div>
          <div className="logos">
            <a href="#" target={"_blank"}>
            <TwitterIcon className="logo-trans" sx={logoSx} />
            </a>
            
          </div>
          <div className="logos linkin">
            <a href="#" target={"_blank"}>
            <LinkedInIcon className="logo-trans" sx={logoSx} />
            </a>
            
          </div>
          <div className="verLines"></div>
        </div>
      </aside>
    </div>
  );
};

export default AsideLeft;
