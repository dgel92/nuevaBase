import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='navBartitulo'>
        <Button variant="dark" onClick={handleShow}>
            Menu
        </Button>
      </div>
    <div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <br/><br/><br/><br/><br/>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to="./Itrackers">Itrackers</Link></Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Guia</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Manuales</Navbar.Brand>
        </Container>
      </Navbar>
      <br /><br />
      <NavDropdown title="Herramientas" id="collapsible-nav-dropdown" className="tittleNavBar fs-5"  >

        <NavDropdown.Item>
          <Link to="https://click/customer/condiciones/condiciones/APPS/app-ventas" className='cardtext'>App de ventas</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link to="https://basedeconocimientos.custhelp.com/#" className='cardtext'>Base de conocimiento</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://click/customer/condiciones/condiciones/APPS/calc-dias-sin-servicio/" className='cardtext'>Calculadora de ajuste</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link to="https://ccip/" className='cardtext'>CCIP</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link to="https://codi.telecom.com.ar/login" className='cardtext'>CODI</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link to="https://consultaitracker/" className='cardtext'>Consulta itrackers</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://webgestionmovil/default.aspx" className='cardtext'>Consulta Linea fija</Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link to="http://srv-webcv2.corp.cablevision.com.ar/ememo/" className='cardtext'>E-memo</Link>
        </NavDropdown.Item>

        <NavDropdown.Item >
          <Link to="https://telecomcrm.my.salesforce.com/console" className='cardtext'>FAN salesForce</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item >
          <Link to="https://click/customer/condiciones/condiciones/APPS/grillaCanales/" className='cardtext'>Grilla de canales</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://nuevosender.corp.cablevision.com.ar/" className='cardtext'>HUB</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="http://webcx/" className='cardtext'>Portal CSAT</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://frontocs.personal.corp/#/home" className='cardtext'>SNAP</Link>
        </NavDropdown.Item>
              
        <NavDropdown.Item>
          <Link to="http://10.9.44.132/symphonica/v2_7/#/" className='cardtext'>Symphonica</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://click/customer/condiciones/condiciones/APPS/sucursales/index.html" className='cardtext'>Sucursales</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="https://mimundo-prod1.corp.cablevision.com.ar/IDPAdmin/#/Login/MGUAdmin" className='cardtext'>TecData</Link>
        </NavDropdown.Item>
        
        <NavDropdown.Item>
          <Link to="http://watchdog.corp.cablevision.com.ar/CVWebWatchdog/faces/auth/Login.jsp" className='cardtext'>Watchdog</Link>
        </NavDropdown.Item>
        
        
      </NavDropdown>


        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default NavBar