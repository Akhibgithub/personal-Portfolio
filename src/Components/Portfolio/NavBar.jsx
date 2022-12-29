import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "@mui/material/Button";
import AkhibResume from "./AkhibResume.pdf";

const NavBar = () => {
  const buttonSX = {
    color: "#64ffda",
    border: "1px solid #64ffda",
    "&:hover": {
      border: "1px solid yellow",
      color: "yellow",
    },
  };
  return (
    <div>
      <Navbar
        className="navBar p-3"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container id="home">
          <Navbar.Brand href="#home">Logo Space</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="links">
              <Nav.Link className="me-3" href="#about">
                <span className="nanNum">01.</span>About
              </Nav.Link>
              <Nav.Link className="me-3" href="#work">
                <span className="nanNum">02.</span>Work
              </Nav.Link>
              <Nav.Link className="me-3" href="#contact">
                <span className="nanNum">03.</span>Contact
              </Nav.Link>
              <a
                style={{ textDecoration: "none" }}
                href={AkhibResume}
                target="_blank"
              >
                <Button variant="outlined" size="medium" sx={buttonSX}>
                  Resume
                </Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
