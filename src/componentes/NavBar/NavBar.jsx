import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import imgBC from "../Media/Img/baseDeConocimiento.png"

function Navbarmenu() {
  return(
    <div className='nav-container'>
    <Navbar collapseOnSelect expand="lg" className="background-color bg-body-tertiary-" backfrou>
      <Container>
        <Navbar.Brand><Link to="/"><img src={imgBC} alt="120"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Itrackers" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to="/Fan"><a>FAN</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><a>OPEN</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><a>Seguimiento Itrackers</a></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Manuales</Nav.Link>
            <Nav.Link href="#pricing">Simulador</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Modo oscuro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
    
export default Navbarmenu;

