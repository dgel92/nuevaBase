import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import PendienteDeInstalacion from "../../componentes/Media/Img/pendienteDeInstalacion.png"
import PendienteDeInstalacion2 from "../../componentes/Media/Img/pendienteDeInstalacion2.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import imagenPendiente from "../Media/Img/imagenPendiente.jpg"
import serializable from "../Media/Img/serializable.png"
import serializable2 from "../Media/Img/serializable02.png"
import reduccionOpen1 from "../Media/Img/reduccionOPEN1.png"
import reduccionOpen2 from "../Media/Img/reduccionOPEN2.png"
import reduccionOpen3 from "../Media/Img/reduccionOPEN3.png"

function RegularizarSerializable() {
    return (
        <div className='cardFAN'>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
            <br/>
        <div className='img-procedimientos'><Image src={serializable} fluid /></div>;
        <div className='img-procedimientos'><Image src={serializable2} fluid /></div>;
        <br/>
        <br/>
            <Accordion.Header >Regularizar Serializable </Accordion.Header>
                <Accordion.Body>
                Este inconveniente ocurre cuando el cliente tuvo una cita tecnica o instalacion y al momento de certificar (cerrar la orden), habia una contingencia en las herramientas, inconvenientes tecnicos (potencia, falla de equipo, falta de equipos, etc),
                y el tecnico deja orden cerrada, bloqueada, suspendida, pendiente de contacto y dentro de la OT esta la observacion del tecnico informando el inconveniente.
                <br/><br/>Esta gestión aplica únicamente cuando:<br/><br/>

                - No coincide la MAC del CM / SN ONT instalado en el domicilio del cliente con el que figura en OPEN/FAN/CODI<br/>
                - No coincide SN del Decodificador instalado en el domicilio del cliente con el SN registrado en OPEN/FAN/CODI.<br/>
                - Equipo dado de baja por error, se necesita activar en CRM.<br/>
                <br/>
                Antes de realizar escalamiento, verificar:<br/><br/>

                Que el equipo no se encuentre instalado en otro domicilio. De ser así debemos indicarle que el equipo solo se puede utilizar en el domicilio que figura registrado en sistema. En caso que nos informe que se mudó se deberá gestionar un TRASLADO DE PRODUCTO.

                La MAC / SN ONT / SN Deco del equipo a reclamar, sea la correcta (ver opciones a continuación).

                </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Flujo en Base de conocimiento</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-secondary"><Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/3934/kw/regularizar">Procedimiento Regularizar Serializable</Link></Button>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Planilla - Contrato reducido sin deuda por pago/ajuste pero con servicio funcionando</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Contrato reducido sin deuda por pago/ajuste</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        Si el cliente tiene un contrato reducido sin deuda por pago/ajuste, no será necesario que cargues el manifiesto de pago.Escalá estos casos al Callback completando correctamente la planilla con los siguientes datos:
                        <br/>  <br/>    
                            - ID (DNI del cliente):<br/>
                            - Contrato:<br/>
                            - Tel:<br/>
                            - Motivo: ACTIVAR SERVICIO-REDUCIDO SIN DEUDA-EXCLUIR DEL CIRCUITO DE REDUCCIÓN<br/>
                            - Componente afectado: (Deco, Cablemodem, Flow App, etc)<br/>
                            - Pop Up en Open: SI/NO<br/>                  
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="3">
            <Accordion.Header>Planilla - Contrato reducido CON deuda, pero con ajuste pendiente.</Accordion.Header>
            <Accordion.Body>
                    <Image src={imagenPendiente} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Contrato reducido CON deuda, pero con ajuste pendiente.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        En los casos de reducción con ajuste pendiente por:<br/><br/>
                            -Financiación no aplicada<br/>
                            -Ajuste Legales<br/>
                            -Ajuste Reclamo Facturación<br/>
                            -Pago no impactado<br/><br/>

                            Se deberá:<br/><br/>
                            -Cargar Manifiesto de Pago para restauración a nivel contrato .<br/>
                            -Enviar mail a la casilla Gestión de Mora para exclusión de acciones de morosidad.<br/>
                            <br/>
                            En el margen inferior derecho (PROCESOS DE CONTRATOS) se encuentran una serie de acciones. Seleccionar la opción REGISTRO DE PLAZO DE SUSPENSIÓN                                             
                            <br/><br/>
                            La leyenda “El proceso terminó con éxito” indica que se restablecerá el servicio en 60 minutos.

                            En Open, el pop up de servicio reducido demorará poco más de una hora en desaparecer.

                            En el caso de ser contrato PDX (Pendiente de Desconexión), la activación es inmediata.
                            </td>
                        </tr>
                        <Image src={reduccionOpen1} fluid /><br/><br/>
                        <Image src={reduccionOpen2} fluid />
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="4">
            <Accordion.Header>Planilla - Servicio reducido en OPEN sin Deuda </Accordion.Header>
            <Accordion.Body>
            <Image src={imagenPendiente} fluid />
                <Table striped bordered hover size="xl">
                    <thead>
                        <tr>
                        <th>Servicio reducido en OPEN sin Deuda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                        <br/>
                        Para clientes con servicio reducido sin deuda (verificar en OPEN que el Cliente no tenga deuda) y verificar que no este en portal cautivo:<br/><br/>
                        Si no tiene deuda o indicios de una, se deberá:<br/><br/>
                        -Enviar mail a la casilla Gestión de Moras solo para exclusión de acciones de morosidad.<br/>
                        -Cargar ITracker para la restauración del servicio completando la siguiente planilla:<br/><br/>
                        
                        Planillla<br/><br/>
                        ID (DNI del cliente):<br/>
                        Contrato:<br/>
                        Tel:<br/>
                        Motivo: ACTIVAR SERVICIO-REDUCIDO SIN DEUDA-EXCLUIR DEL CIRCUITO DE REDUCCIÓN<br/>
                        Componente afectado: (Deco, Cablemodem, Flow App, etc)<br/>
                        Pop Up en Open: SI/NO<br/>
                        SERVICIO REDUCIDO POR MORA SIN SALDO PENDIENTE (Servicio Reducido sin deuda + 48hs) <br/><br/>                     
                            </td>
                        </tr>
                    </tbody>
                    <Image src={reduccionOpen3} fluid />
                </Table>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="5">
            <Accordion.Header>Ejemplos</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered hover size="sm">
                
                <Image src={imagenPendiente} fluid />;

                </Table>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </div>
    );
}

export default RegularizarSerializable;