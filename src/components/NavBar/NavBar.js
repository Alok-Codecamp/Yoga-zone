import React from 'react';
import './NavBar.css'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../logo.png'

const NavBar = () => {
    return (
        <div>
             <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >
  <NavLink to="/home" className="link-style">
        yoga zone
  </NavLink>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
     <NavLink to="/home" className="link-style">Home</NavLink>
     <NavLink to="/Courses" className="link-style">Courses</NavLink>
     <NavLink to="/about" className="link-style">About</NavLink>
     <NavLink to="/SignIn" className="link-style">Sign In</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;