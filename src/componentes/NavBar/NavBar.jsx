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
      <div className="text-center p-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
      </div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary-" backfrou>
      <Container>
        <Navbar.Brand><Link to="/"><img src={imgBC} alt="120" className='nav-img'></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='nav-collapse'>
          <Nav className="me-auto">
          <NavDropdown title="Itrackers FAN" id="collapsible-nav-dropdown" className='nav-title'>
              <NavDropdown.Item ><Link to="/Fan/CambioDomicilioErrorFan"><span>Cambio de domicilio con error en FAN</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Fan/ErrorAgenda"><span>Errores de agenda</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Fan/EsperaDeEjecucion"><span>Instalado fisicamente y orden en espera de ejecucion</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Fan/ServicioReducido"><span>Servicio Reducido</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Fan/SinReduccion360"><span>Reducido en CODI-FAN pero sin reduccion en vista 360</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>Suspension recurrente en CCIP</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://consultaitracker/app/incidentes.php"><span>Seguimiento de Itrackers</span></NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Itrackers OPEN" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to="/Open/ReduccionOpen"><span>Servicio Reducido en OPEN</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Error de agenda / Adelanto / aseguramiento de cita</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>Suspension recurrente en CCIP</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/RegularizarSerializable"><span>Regularizar serializable</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://consultaitracker/app/incidentes.php"><span>Seguimiento de Itrackers</span></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Manual" id="collapsible-nav-dropdown">
              <NavDropdown.Item ><Link to="/ErrorFlow"><span>Errores Flow</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsHFC'>HFC - Difiere velocidad en CODI/OPEN-FAN</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsHFC'>HFC - CM figura en CODI pero no en OPEN-FAN</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item><Link to="/Open"><span className='cbsToip'>TOIP - Sin tono</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsToip'>TOIP - Destino inalcanzable</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsToip'>TOIP - Linea inactiva</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsToip'>TOIP - Inconveniente con SVA</span></Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsFlow'>FLOW - S1039 / S1043 (deco no enlistado)</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsFlow'>FLOW - Error en guia / faltan canales</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsFlow'>FLOW - Grilla incorrecta, saltea canales</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"><span className='cbsFlow'>FLOW - Falla en funcionalidades</span></Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFtth'><a>FTTH - Serializable</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFtth'><a>FTTH - ONT con señal pero sin sesion activa</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFtth'><a>FTTH - ONT con lentitud</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFtth'><a>FTTH - Error de suscriber ID en CCIP</a></Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFlowApp'><a>Flow-APP - Error de registracion</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsFlowApp'><a>Flow-APP - Estado inactivo en CRM o CODI</a></Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open" className='cbsRedes'><a>Redes - Pase a red OT generada</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"  className='cbsRedes'><a>Redes - Pase a red OT no generada</a></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open"  className='cbsRedes'><a>Redes - Armario de edificio sin armar</a></Link></NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
          <NavDropdown title="FLOW" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>Flow Full - Ip / Android</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Flow Box - hibrido</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Flow Music</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Flow-App</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Flow-Flex</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/RegularizarSerializable"><span>Errores de flow app y en Decos</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Registro Flow app y sitio Cliente</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Pack Premium</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Equipos (controles y decodificadores)</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Compatibilidad</span></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="FTTH" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/FTTH/AdoHome"><span>ADO HOME</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Soporte tecnico</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>CCIP y symphonica</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Equipos</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Puerta de Enlace</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/RegularizarSerializable"><span>Habilitacion de puertos</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>UPNP y DMZ</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Bloqueo por MAC y IP</span></NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="HFC" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>La tecnologia y su estructura de red</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Soporte tecnico</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Equipos</span></Link></NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="TOIP" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>Linea telefonica IP - Diferencias</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Soporte tecnico</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Migracion EMTA a TOIP</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Portabilidad numerica</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Cambio de numero</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/RegularizarSerializable"><span>Bloquear numero de la guia telefonica</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>SVA - OPEN y FAN</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/SeguimientoItrackers"><span>Varios telefonos interconectados</span></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sector" id="collapsible-nav-dropdown">
            <NavDropdown.Item><Link to="/FAN/SuspendidoRecurrenteCCIP"><span>Arnet - Fibertel lite</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Telecom - Fibertel lite</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Personal Flow - Hogar</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/AdelantoAseguramiento"><span>Personal Flow - Movil</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link to="/Flow/FlowApp"><span>Personal Flow - SubContratas</span></Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/Open/RegularizarSerializable"><span>Telecom Corporativo</span></Link></NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
    
export default Navbarmenu;

