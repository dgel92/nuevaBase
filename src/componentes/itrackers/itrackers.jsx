import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import MediosDeContactos from '../MediosDeContactos/MediosDeContactos';
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
                    <Link to="/Fan/ServicioReducido" className='cardtext'>Servicio reducido por mora sin saldo pendiente (Servicio Reducido sin deuda + 48hs)</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="/Fan/EsperaDeEjecucion" className='cardtext'>Instalado fisicamente pero sin activacion o en espera de ejecucion - FAN</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="/Fan/ErrorAgenda" className='cardtext'>Error de agenda sin caso relacionado - Itracker Agenda FAN</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <Link to="/Fan/CambioDeDomicilio" className='cardtext'>Cambio de domicilio con error en FAN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Fan/SinReduccion360" className='cardtext'>Sin reduccion en 360° pero "Reduccion" solamente en Codi</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/FAN/SuspendidoRecurrenteCCIP" className='cardtext'>Servicio suspendido en CCIP recurrentemente</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div>
                <NavDropdown title="OPEN" id="basic-nav-dropdown" className='fs-5'>
                    <NavDropdown.Item>
                    <Link to="/Open/AdelantoAseguramiento" className='cardtext'>I-TRACKER: Adelanto y aseguramiento de agenda</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/Open/PosibleMasivo" className='cardtext'>Posible Masivo</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    <Link to="/Open/OtAnularCerrar" className='cardtext'>OT a anular - cerrar - solicitud pendiente</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/ReduccionOpen" className='cardtext'>Reduccion de servicio en OPEN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/PaseARedes" className='cardtext'>Pase a redes</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/Open/ReduccionOpen" className='cardtext'>Reduccion de servicio en OPEN</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                    <Link to="/FAN/SuspendidoRecurrenteCCIP" className='cardtext'>Servicio suspendido en CCIP recurrentemente</Link>
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
        
        <MediosDeContactos/>
        </section>
        </>
    )
}
    
export default Itrackers;