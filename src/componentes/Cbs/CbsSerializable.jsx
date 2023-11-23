import React, { useState } from 'react';

import AdelantoOpen from "../../componentes/Media/Img/adelantoOpen.png";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CbsSerializable = () => {
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
            <Tab eventKey="tab1" title="Regularizar serializable">
                <div className="tab-content ">
                <h2>Regularizar serializable</h2>
                <Image src={AdelantoOpen} fluid />
                <p>
                    <br/>
                    <hr/>
                    <h5>Esta gestión aplica únicamente cuando:<br/><br/>
                    - No coincide la MAC del CM / SN ONT instalado en el domicilio del cliente con el que figura en OPEN/FAN/CODI.<br/><br/>
                    - No coincide SN del Decodificador instalado en el domicilio del cliente con el SN registrado en OPEN/FAN/CODI.<br/><br/>
                    - Equipo dado de baja por error, se necesita activar en CRM.
                    </h5>
                </p>
                <p>
                <br/>Antes de realizar escalamiento, verificar:<br/><br/>
                -Que el equipo no se encuentre instalado en otro domicilio. De ser así debemos indicarle que el equipo solo se puede utilizar en el domicilio que figura registrado en sistema. En caso que nos informe que se mudó se deberá gestionar un TRASLADO DE PRODUCTO.<br/><br/>
                -La MAC / SN ONT / SN Deco del equipo a reclamar, sea la correcta (ver opciones a continuación).<br/><br/>

                    <h6>IMPORTANTE FAN: Verificar la última asistencia técnica en estado "Derivada" si corresponde a una gestión pendiente de CBS Serializable. En caso de demora, dar aviso al líder.<br/><br/>
                    IMPORTANTE OPEN: Si existe ya un daño abierto STE - Regularizar Serializables en Open, dar aviso al líder para pedir celeridad en el caso y tabular en PIC "En espera de respuesta Callback". NO CERRAR NI ANULAR DAÑO.
                    </h6>
                </p>
                </div>
                <hr/>
            </Tab>
            
            <Tab eventKey="tab2" title="Flujo en Base de conocimiento">
                <div className="tab-content">
                <h2>Flujo en Base de conocimiento</h2>
                <p>
                    <br></br>
                Te compartimos el flujo de la base de conocimientos en caso de que quieras leer mas a fondo este procedimiento.
                </p>
                <Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/3934/kw/serializable" className='button'><Button variant="outline-secondary">Procedimiento Error agenda, haz click!</Button></Link>
                </div>
                <br/>
                <hr />
                <div>
                    <p>
                        <br></br>
                    Como buscar un equipo en ORCOR con el MAC - SN - SN GPON
                    </p>
                    <Link to="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/3934/kw/serializable" className='button'><Button variant="outline-secondary">Como buscar en ORCOR</Button></Link>
                </div>
            </Tab>

            
            <Tab eventKey="tab3" title="Planillas">
                <div className="tab-content">
                <h2>Planillas</h2>
                <p>
                    <br />
                Por favor, llena la planilla con todos los datos, como se solicitan, para evitar que rechacen la solicitud.
                </p>
                <br />
                <section className='sect-planilla'>
                    <div className='planilla'>
                        <h5>Si es un modem HFC</h5>
                            <p>
                                MAC cliente: (la que tiene en domicilio)<br />
                                MAC en OPEN: <br />
                                MAC en CODI: <br />
                                TECNO (HFC/FTTH):<br />
                                Observaciones:<br />
                                Contrato:<br />
                                Tel:<br />
                                Como figura en comp de producto:<br />
                                Nombre de la persona a contactar:<br />
                                U:<br />
                                SISTEMA (OPEN/FAN):<br />
                                TECNO (FTTH/HFC)<br />
                            </p>
                        <button onClick={copyToClipboard.data}>Copiar planilla</button>
                    </div>
                    <div className='planilla'>
                        <h5>Si es un Decodificador</h5>
                            <p>
                                U:<br />
                                SISTEMA (OPEN/FAN):<br />
                                TECNO (HFC/FTTH):<br />
                                DNI CTE:<br />
                                S/N Deco:<br />
                                Código/Mensaje de Error:<br />
                                Recalculo Flow App: (SI/NO)<br />
                                Estado Flow App en CODI:<br />
                                Figuran decos enlistados en Flow App: SI/NO<br />
                                Tel:<br />
                                Observaciones:<br />
                            </p>
                        <button onClick={copyToClipboard}>Copiar planilla</button>
                    </div>
                    <div className='planilla'>
                        <h5>Si es una ONT</h5>
                            <p>
                                SN / PON ID cliente: (la que tiene en domicilio):<br />
                                SN / PON ID en OPEN: <br />
                                SN / PON ID en CODI:<br />
                                Se visualiza en Symphonica o CCIP: <br />
                                Observaciones:<br />
                                Contrato:<br />
                                Tel:<br />
                                Nombre de la persona a contactar:<br />
                                U:<br />
                                SISTEMA (OPEN/FAN):<br />
                                TECNO (HFC/FTTH):<br />
                            </p>
                        <button onClick={copyToClipboard}>Copiar planilla</button>
                    </div>

                    <div>
                        
                    </div>
                    </section>
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

export default CbsSerializable;