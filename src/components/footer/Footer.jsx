import React, { useContext } from "react";
import "./footer.css";
import { Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../ThemeContexts/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="fixed-bottom bottom-0">
        <Row className="align-items-center justify-content-center text-center">
          <footer
            className={
              darkMode
                ? "footer align-items-center justify-content-center text-center footerDark"
                : "footer align-items-center justify-content-center text-center footerLight"
            }
          >
            Developer&nbsp;&nbsp;
            <a href="https://www.facebook.com/officialmuzi" target="blank">
              Muzammil
            </a>
            &nbsp;&nbsp;Expense Tracker App © 2022
          </footer>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
