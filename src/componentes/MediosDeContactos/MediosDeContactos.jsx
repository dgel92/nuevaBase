import Accordion from 'react-bootstrap/Accordion';

function MediosDeContactos(){
    return(
        <>
        <section className='contactos-container'>
            <div className='contactos-title'>
                <h2>Medios De contacto</h2>
            </div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>Gestiones Telefonicas</h5></Accordion.Header>
                    <Accordion.Body>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto medioDeContacto-Container bg-dark">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl text-tittle">Area</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Referencia</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Opcion</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Horario de atencion</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-4 py-3- text-contact">Ventas</td>
                        <td className="px-4 py-3">0800 555 3569 </td>
                        <td className="px-4 py-3">OPC 1 + OPC 3</td>
                        <td className="px-4 py-3">L a V 08 a 24hs</td>
                        <td className="w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">Mudanzas</td>
                        <td className="px-4 py-3">0800 555 3569 </td>
                        <td className="px-4 py-3"> OPC 1 + OPC 3 </td>
                        <td className="px-4 py-3">L a V 08 a 24hs</td>
                        <td className="w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Corporativo</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">0800 888 0800</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24 hrs</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Arnet / Fibertel / Telecom</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">0800-888 0114 Ó *114</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">OPC 1 Tel fijo - OPC 2 Internet Hogar </td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24 hrs</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Soporte Tecnico HFC / FTTH / FLOW</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">0800 555 3569</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">OPC 1</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24 hrs</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-gray-200 px-4 py-3">Administracion y facturacion</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">0800 555 3569</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">OPC 1</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900"> L a V 08 a 24 hrs</td>
                        <td className="border-t-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
        
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Personal Movil</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 444 0800 Ó *111 </td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">OPC 1 + OPC 5</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24 hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
                </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5>Gestiones por Chat</h5></Accordion.Header>
                    <Accordion.Body>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto medioDeContacto-Container bg-dark">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl text-tittle">Area</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Referencia</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Opcion</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Horario de atencion</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Whatsapp - decos comprados por web</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1178380001</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">L a V 08 a 20hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Whatsapp - Camaras compradas por web</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1178686804</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800-199-4663 op: 2</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">L a V 08 a 20hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Whatsapp - Donde esta el tecnico</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">11 7195 0001 </td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">Bot 24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Facebook - instagram</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">@Personal Flow ayuda</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Start+ / disney+</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1120403821 / 22</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">HBOMAX</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 345 5447</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Amazon PrimeVideo</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 038 0541</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Netflix</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 345 1593</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">09 a 03hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
                </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5>Soporte Pack premium</h5></Accordion.Header>
                    <Accordion.Body>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto medioDeContacto-Container bg-dark">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl text-tittle">Area</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Referencia</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Opcion</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-tittle">Horario de atencion</th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Start+ / disney+</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">1120403821 / 22</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">HBOMAX</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 345 5447</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Amazon PrimeVideo</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 038 0541</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">24hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Netflix</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">0800 345 1593</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">09 a 03hrs</td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    <tr>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Paramount</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">-</td>
                        <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900"></td>
                        <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    </>
  );
}


export default MediosDeContactos