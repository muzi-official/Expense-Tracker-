import React, { useContext } from "react";

// img logo import  //
import LightLogo from "../../assets/lightLogo.png";
import DarkLogo from "../../assets/darkLogo.png";

// Styles
import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Navbar
        variant="light"
        className={darkMode ? "darkNav navbar" : "lightNav navbar"}
      >
        <Container fluid>
          <Navbar.Brand
            href="https://www.facebook.com/officialmuzi"
            target="blank"
          >
            {darkMode ? (
              <Image src={DarkLogo} alt="Logo" />
            ) : (
              <Image src={LightLogo} alt="Logo" />
            )}
          </Navbar.Brand>
          <Nav className="ms-auto">
            <ToggleSwitch />
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default Header;
