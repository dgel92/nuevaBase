import './Buscador.scss';

import { Link } from "react-router-dom";

function Buscador(){
    return(
    <div className="header">
                <ul className="nav menu">
                    <li className="categorias">Planillas
                        <ul className="desplegable">
                            <li title="Fan"><a className="active link" title="Fan">FAN</a>
                                <ul>
                                    <li><Link to="Fan/ServicioReducido" className="link">SERVICIO REDUCIDO POR MORA SIN SALDO PENDIENTE (Servicio Reducido sin deuda + 48hs)</Link></li>
                                    <li><Link to="Fan/InstaladoOService" className="link">Instalado o service con cambio de modem o decos con orden en "Espera de Ejecucion”</Link></li>
                                    <li><Link to="Fan/ErrorAgenda" className="link">Error de agenda sin caso relacionado</Link></li>
                                    <li><Link to="Fan/CambioDeDomicilio" className="link">CAMBIO DE DOMICILIO ERROR FAN</Link></li>
                                    <li><Link to="Fan/SinReduccion360" className="link">Sin reduccion en 360° pero "Reduccion" solamente en Codi</Link></li>
                                </ul>
                            </li>
                            <li title="Open"><a className="active link" title="Open">Open</a>
                                <ul>
                                    <li><Link to="Open/teclados" className="link">Teclados</Link></li>
                                    <li><Link to="Open/mousepads" className="link">Mousepads</Link></li>
                                    <li><Link to="Open/mouse" className="link">Mouses</Link></li>
                                    <li><Link to="Open/auriculares" className="link">Auriculares</Link></li>
                                </ul>
                            </li>
                            
                            <li title="CBS"><a className="active link" title="CBS">CBS - CBC</a>
                            <ul>
                                <li><Link to="category/accesPoint" className="link">Acces Point</Link></li>
                                <li><Link to="category/modemRouter" className="link">Modem Router</Link></li>
                                <li><Link to="category/router" className="link">Mouter</Link></li>
                                <li><Link to="category/switchs" className="link">Swwitchs</Link></li>
                            </ul>
                            </li>
                            <li title="TabletasDigitalizadoras"><Link to="category/tabletasDigitalizadoras" className="active link">Tabletas digitalizadoras</Link></li>
                            <li title="Tablets"><Link to="category/tablets" className="active link">Tablets</Link></li>
                            <li title="CELULARES Y TELEFONIA"><Link to="category/celulares" className="active link">Celulares y telefonia</Link>
                                <ul>
                                    <li><Link to="category/celulares" className="link">Celulares</Link></li>
                                    <li><Link to="category/modemRouter" className="link">Modem Router</Link></li>
                                    <li><Link to="category/telefonosFijos" className="link">Telefonos Fijos</Link></li>
                                    <li><Link to="category/smartwatch" className="link">Smartwatch</Link></li>
                                </ul>
                            </li>
                            <li title="ACCESORIOS Y CABLES"><Link to="category/Accesorios" className="active link">Accesorios</Link>
                                <ul>
                                    <li><Link to="category/cargadores" className="link">CARGADORES</Link></li>
                                    <li><Link to="category/cables" className="link">CABLES</Link></li>
                                </ul>
                            </li>
                            <li title="Soportes"><Link to="category/soportes" className="active link">Soportes</Link></li>
                            <li title="ESTABILIZADORES, UPS Y ZAPATILLAS"><Link to="category/estabilizadores" className="active link">Estabilizadores y UPs</Link>
                                <ul>
                                    <li><Link to="category/estabilizadores" className="link">Estabilizadores</Link></li>
                                    <li><Link to="category/ups" className="link">UPS</Link></li>
                                    <li><Link to="category/zapatillas" className="link">Zapatillas</Link></li>
                                </ul>
                            </li>
                            <hr/>
                            <li title="Informacion"><Link to="informacion/" className="active link">Informacion</Link>
                                <ul>
                                    <li><Link to="Informacion/seguiTuCompra" className="active link">Sigue tu Compra</Link></li>
                                    <li><Link to="Informacion/centroDeAyuda" className="active link">Centro de Ayuda</Link></li>
                                    <li><Link to="Informacion/metodosDeEnvio" className="active link">metodos de Retiro</Link></li>
                                </ul>
                            </li>
                            <li title="ofertas"><Link to="category/" className="active link">Ofertas</Link>
                                <ul>
                                    <li><Link to="category/imperdibles" className="active link">Imperdibles</Link></li>
                                    <li><Link to="category/notebooks" className="active link">Notebooks</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            )
        }
        
        
        
        export default Buscador