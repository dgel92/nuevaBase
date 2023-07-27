import './NavBar.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar(){
    return (
        <div className='containerNavBar'>
          {['sm',].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 ">
              <Container fluid>
              <Link to="" className='tittleNavBar'><Navbar.Brand>Soporte TC</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1"><Link to="">Procedimientos</Link></Nav.Link>
                    <Nav.Link href="#action2"><Link to="">Casos raros</Link></Nav.Link>
                      <NavDropdown
                        title="Itrackers - CBS"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item><Link to="/Fan">FAN</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action4"><Link to="/Open">OPEN</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5"><Link to="/Cbs">CBS - CBC</Link></NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      );
    }

export default NavBar;