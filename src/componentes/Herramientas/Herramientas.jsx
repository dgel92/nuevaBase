import React, { useState } from 'react';

import AdelantoOpen from "../../componentes/Media/Img/adelantoOpen.png";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const OpenAdelanto2 = () => {
    const [key, setKey] = useState('tab1');
    const copyToClipboard = () => {
        const data = 
            `
            U:
            Sector Operativo:
            Localidad:
            N de orden:
            Tipo de OT: 
            N de cliente:
            Dni de cte:
            Tecnologia (HFC/FTTH):
            Telefono: 
            Disponibilidad horaria:
            Día original de la cita:
            Zona 900 (SI/NO): 
            Detalle del caso: 
    
            Elige el error que da la agenda:
    
            OP1: ZONA NO PARAMETRIZADA
            OP2: ZONA 900
            OP3: SIN FECHA DISPONIBLE
            OP4: ERROR SALESFORCE, NO SE GUARDARON LOS DATOS CRM
    
            *CAPTURA.
            `;
    
        const el = document.createElement('textarea');
        el.value = data;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Texto copiado al portapapeles');
    };

    return (
        <section className='tab-container'>
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 tab-card"
            >
            <Tab eventKey="tab1" title="Adelanto y error de agenda">
                <div className="tab-content ">
                <h2>I-TRACKER: Adelanto y aseguramiento de agenda</h2>
                <Image src={AdelantoOpen} fluid />
                <p>
                    <br/>
                    <hr/>
                    <h6>Sucede en pedidos de instalacion o service tecnico que al momento de citar la orden no hay fechas proximas o errores en la aplicacion de agenda, por lo cual cargando este itracker solicitamos que se adelante y confirme un turno con el cliente.</h6>
                </p>
                <p>
                    Esta gestión aplica únicamente cuando:<br/><br/>
                    - La agenda no te da fechas o franjas horarias para cargar la cita.<br/>
                    - La fecha que brinda la agenda es muy lejana y el cliente no la acepta.<br/>
                    - La agenda da un error (por ejemplo: zona o base operativa no normalizada).<br/>
                    - Si es zona peligrosa o si tiene comentarios de tecnicos que han ido o tenian la orden asignada y cancelaron la cita y notificaron zona peligrosa.<br/>
                    - En caso de ser zona 900.
                    <br/>
                <br/>
                Verificar<br/><br/>
                -Que domicilio y referencia de contacto para el tecnico esten bien.<br/>
                -Brindar ref de whatsapp para que clienta pueda consultar dudas sobre la cita.
                </p>
                </div>
            </Tab>
            <Tab eventKey="tab2" title="Flujo en Base de conocimiento">
                <div className="tab-content">
                <h2>Flujo en Base de conocimiento</h2>
                <p>
                    <br></br>
                Te compartimos el flujo de la base de conocimientos en caso de que quieras leer mas a fondo este procedimiento.
                </p>
                <Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/8564/kw/agenda" className='button'><Button variant="outline-secondary">Procedimiento Error agenda, haz click!</Button></Link>
                </div>
            </Tab>
            <Tab eventKey="tab3" title="Planilla - Itracker">
                <div className="tab-content">
                <h2>Planilla - Itracker</h2>
                <p>
                    <br />
                Por favor, llena la planilla con todos los datos, como se solicitan, para evitar que rechacen la solicitud.
                </p>
                <br />
                
                    <div className='planilla'>
                                        <p>
                                        U:<br/>
                                        Sector Operativo:<br/>
                                        Localidad:<br/>
                                        N de orden:<br/>
                                        Tipo de OT: <br/>
                                        N de cliente:<br/>
                                        Dni de cte:<br/>
                                        Tecnologia (HFC/FTTH):<br/>
                                        Telefono: <br/>
                                        Disponibilidad horaria:<br/>
                                        Día original de la cita:<br/>
                                        Zona 900 (SI/NO): <br/>
                                        Detalle del caso: <br/><br/>
                                        Elige el error que da la agenda:<br/><br/>
                                        OP1: ZONA NO PARAMETRIZADA<br/>
                                        OP2: ZONA 900<br/>
                                        OP3: SIN FECHA DISPONIBLE<br/>
                                        OP4: ERROR SALESFORCE, NO SE GUARDARON LOS DATOS CRM<br/><br/>
                                        *CAPTURA.
                                        </p>
                        <button onClick={copyToClipboard}>Copiar planilla</button>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="tab4" title="Ejemplos">
                <div className="tab-content">
                <h2>Ejemplos</h2>
                <p>
                    Investment funds are pooled collections of money from multiple investors that are managed collectively by professionals or on behalf of the investors. The main objective of these funds is to provide both individual and institutional investors access to a wider range of securities than they might be able to access individually. By doing so, they can achieve diversification, professional management, and economies of scale in investment.
                </p>
                </div>
            </Tab>
            </Tabs>
        </section>
    );
    };

export default OpenAdelanto2;