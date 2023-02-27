import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import Logo from "../assets/rocket.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OurNavbar() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img className='rocket' src={Logo} height="40px" alt="rocket_logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/practice">Practice</Nav.Link>
            <Nav.Link href="/roadmap">RoadMap</Nav.Link>
            <Nav.Link href="/pro">Pro</Nav.Link>
          </Nav>
            <div className=''>
              <Button variant="primary">
              <i class="fa-solid fa-sun"></i>
              </Button >
              <Button variant="primary" style={{marginLeft: "25px"}}>
                 Sign In
              </Button>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default OurNavbar;