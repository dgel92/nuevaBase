import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Placeholder from 'react-bootstrap/Placeholder';
import img from "../Media/Img/SinTítulo.jpg";
import imgMantenimiento from "../Media/Img/novedades/contingSiebel.jpg"
import imgMantenimiento2 from "../Media/Img/novedades/contingOpen.jpg"
import imgMantenimiento3 from "../Media/Img/novedades/NovedadFlow.jpg"
import migra from "../Media/Img/novedades/migraFAN.jpg"

function Novedades() {
    return(
    <div className="d-flex justify-content-around novedades-container">
        <div className="novedad-title"><h1>Novedades</h1></div>
      
        <div className="novedades-card">
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="" src={migra} />
            <Card.Body>
            <Card.Title>Migracion de Clientes OPEN a FAN</Card.Title>
            <Card.Text>
            ID Placa: 10060
            <br/>
                Se realizara un proceso de migracion el dia 05-10-23, en las cuentas de estos clientes no se podran realizar una serie de gestiones. Informarle al cliente que se comunique despues de la fecha 05-10 y hay podremos gestionar su pedido
                <br/>Inicio: 04-10-23
                <br/>Termino: 05-10-23
            </Card.Text>
            <Button variant="primary" href="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10060">Informacion en BC</Button>
            </Card.Body>
            </Card>
            </div>
            
            <div className="novedades-card">
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="" src={imgMantenimiento2} />
            <Card.Body>
            <Card.Title>Mantenimiento OPEN</Card.Title>
            <Card.Text>
                ID Placa: 6550 <br/>Se realizaran tareas de mantenimiento en OPEN, por lo cual no estara disponible.
                <br/>Inicio: 23-10-23 00:30hrs
                <br/>Termino estimado: 23-10-23 06:30hrs
            </Card.Text>
            <Button variant="primary" href="https://basedeconocimientos.custhelp.com/app/answers/detail/a_id/10060">Mas informacion</Button>
            </Card.Body>
            </Card>
            </div>

            <div className="novedades-card">
            <Card style={{ width: '24rem' }}>
            <Card.Img variant="" src={imgMantenimiento3} />
            <Card.Body>
            <Card.Title>Sin Stock - Control Android TV V3</Card.Title>
            <Card.Text>
                No habra disponibilidad para instalaciones nuevas o cambios de control remoto.
                Para suplantar ingresa un nuevo control remoto que su principal diferencia es que no tiene el boton de Google asistant
                <br/>Inicio: A mediados de Mitad de Octubre.
                <br/> No reportado
            </Card.Text>
            <Button variant="primary">Mas informacion</Button>
            </Card.Body>
            </Card>
            </div>
    </div>
  );
}

export default Novedades;