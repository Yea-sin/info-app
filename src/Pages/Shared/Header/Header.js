import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <section>
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand className="common-font logo" href="#home">
            Info App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu-items">
              <Nav.Link active as={HashLink} to="/form">
                Form
              </Nav.Link>
              <Nav.Link active as={HashLink} to="/storedDetails">
                Stored Details
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
