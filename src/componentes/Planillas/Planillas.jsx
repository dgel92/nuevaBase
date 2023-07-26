import './Planillas.scss';

import {Link} from 'react-router-dom';

function Planillas() {
    return (
        <div className="header">
                <ul className="nav menu">
                    <li className="categorias">Itracker - CBS
                        <ul className="desplegable">
                            <li><Link to="# " className="active link" title="COMPONENTES DE PC">FAN</Link>
                                <ul>
                                    <li><Link to="category/discosSolidos" className="link">Adelanto / aseguramiento / error de agenda</Link></li>
                                    <li><Link to="category/memoriasRam" className="link">MEMORIA RAM</Link></li>
                                    <li><Link to="category/procesadores" className="link">MICROPROCESADORES</Link></li>
                                    <li><Link to="category/motherboards" className="link">MOTHERBOARDS</Link></li>
                                    <li><Link to="category/placasDeVideo" className="link">PLACAS DE VIDEO</Link></li>
                                    <li><Link to="category/gabinetes" className="link">GABINETES</Link></li>
                                    <li><Link to="category/fuentesDePoder" className="link">FUENTES DE PODER</Link></li>
                                    <li><Link to="category/refrigeracion" className="link">REFRIGERACION</Link></li>
                                    <li><Link to="category/placasDeRed" className="link">PLACAS DE RED</Link></li>
                                </ul>
                            </li>
                            <li title="Perifericos"> <Link to="category/perifericos" className="active link">OPEN</Link>
                                <ul>
                                    <li><Link to="category/teclados" className="link">Teclados</Link></li>
                                    <li><Link to="category/mousepads" className="link">Mousepads</Link></li>
                                    <li><Link to="category/mouse" className="link">Mouses</Link></li>
                                    <li><Link to="category/auriculares" className="link">Auriculares</Link></li>
                                    <li><Link to="category/parlantes" className="link">Parlantes</Link></li>
                                    <li><Link to="category/yoysticks" className="link">Yoystick y Volantes</Link></li>
                                    <li><Link to="category/microfonos" className="link">Microfonos</Link></li>
                                </ul>
                            </li>
                            <li title="AlMACENAMIENTO"><Link to="category/almacenamiento" className="active link">CBS/CBC</Link>
                                <ul>
                                    <li><Link to="category/memoriaFlash" className="link">Memoria Flahs</Link></li>
                                    <li><Link to="category/pendrives" className="link">Pendrives</Link></li>
                                    <li><Link to="category/discosExternos" className="link">Discos Externos</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
    )
}

export default Planillas;