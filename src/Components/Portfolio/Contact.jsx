import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const x = {
    "&:hover": {
      color: "#64ffda",
    },
  };
  const buttonSX = {
    marginTop: "5rem",
    color: "#64ffda",
    border: "1px solid #64ffda",
    padding: "15px 30px",
    "&:hover": {
      border: "1px solid yellow",
      color: "yellow",
    },
  };
  return (
    <div id="contact" className="Contact-container">
      <div className="contc-sub-cont">
        <div className="main-heading">
          <span>04. </span>What’s Next?
        </div>
        <h1 className="cont-heading">Get In Touch</h1>
        <p className="contact-text">
          Although I’m currently looking for any new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <a
          style={{ textDecoration: "none" }}
          href="mailto:dev.shaikhaaqib@gmail.com"
          target="_blank"
        >
          <Button variant="outlined" size="medium" sx={buttonSX}>
            Say Hello
          </Button>
        </a>
          <div className="button-icons">
        <div className="">
            <a href="https://github.com/Akhibgithub" target={"_blank"}>
              <GitHubIcon className="logo-trans" sx={x} />
            </a>
          </div>
          <div className="">
            <a href="https://www.instagram.com/shaikh_akhib_" target={"_blank"}>
              <InstagramIcon className="logo-trans" sx={x} />
            </a>
          </div>
          <div className="">
            <a href="#" target={"_blank"}>
            <TwitterIcon className="logo-trans" sx={x} />
            </a>
            
          </div>
          <div className="">
            <a href="#" target={"_blank"}>
            <LinkedInIcon className="logo-trans" sx={x} />
            </a>
          </div>
      </div>
        <p className="copy-right">Designed & Built by Shaikh Aaqib</p>
      </div>
    </div>
  );
};

export default Contact;
