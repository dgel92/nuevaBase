import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function Itrackers(){
    return(
        <>
        <section className='itracker-contenedor'>
        <div className='itracker-title'><h2>Itrackers y procedimientos</h2></div>
        <div className='itracker-container'>
            
            <div>
                <NavDropdown title="FAN" id="basic-nav-dropdown" className='fs-5'>
                    <NavDropdown.Item>
                    <Link to="/FAN/ServicioReducido">Servicio reducido por mora sin saldo pendiente (Servicio Reducido sin deuda + 48hs)</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="FAN/EsperaDeEjecucion">Instalado fisicamente pero sin activacion o en espera de ejecucion - FAN</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="FAN/ErrorDeAgenda">Error de agenda sin caso relacionado - Itracker Agenda FAN</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="FAN/cambioDomicilioErroFan">Cambio de domicilio con error en FAN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="FAN/SinReduccionen360">Sin reduccion en 360° pero "Reduccion" solamente en Codi</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="FAN/SuspendidoRecurrenteCCIP">Servicio suspendido en CCIP recurrentemente</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div>
                <NavDropdown title="OPEN" id="basic-nav-dropdown" className='fs-5'>
                    <NavDropdown.Item>
                    <Link to="/Open/AdelantoAseguramiento">I-TRACKER: Adelanto y aseguramiento de agenda</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Open/PosibleMasivo">Posible Masivo</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    <Link to="/Open/OtAnularCerrar">OT a anular - cerrar - solicitud pendiente</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/ReduccionOpen">Reduccion de servicio en OPEN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/PaseARedes">Pase a redes</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/ReduccionOpen">Reduccion de servicio en OPEN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/">Servicio suspendido en CCIP recurrentemente</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/">FTTH Error equipos (ccip/pendiente)</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/">Reducido en open sin deuda</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div>
                <NavDropdown title="CBS" id="basic-nav-dropdown" className='fs-5'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div>
                <NavDropdown title="CBC" id="basic-nav-dropdown" className='fs-5'>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
        </section>
        </>
    )
}
    
export default Itrackers;