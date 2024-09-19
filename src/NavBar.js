import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome } from 'react-icons/ai'; 
import { FaBusinessTime, FaLaptopCode, FaGlobe } from 'react-icons/fa'; 
import { GiCricketBat } from 'react-icons/gi'; 

function NavBar() {
  return (
    <Navbar  collapseOnSelect  style={{ background: "#81ecec", padding: "15px", width: "100%",  }}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>BBC India</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link><AiFillHome /> All</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/business">
              <Nav.Link><FaBusinessTime /> Business</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/technology">
              <Nav.Link><FaLaptopCode /> Technology</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cricket">
              <Nav.Link><GiCricketBat /> Cricket</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/international">
              <Nav.Link><FaGlobe /> International</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
