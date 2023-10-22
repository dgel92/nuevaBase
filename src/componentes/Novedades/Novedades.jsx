import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Placeholder from 'react-bootstrap/Placeholder';
import img from "../Media/Img/SinTítulo.jpg";
import imgMantenimiento from "../Media/Img/novedades/contingSiebel.jpg"
import imgMantenimiento2 from "../Media/Img/novedades/contingOpen.jpg"
import imgMantenimiento3 from "../Media/Img/novedades/NovedadFlow.jpg"

function Novedades() {
    return(
    <div className="d-flex justify-content-around novedades-container">
        <div className="novedad-title"><h1>Novedades</h1></div>
      
        <div className="novedades-card">
            <Card style={{ width: '40rem' }}>
            <Card.Img variant="" src={imgMantenimiento} />
            <Card.Body>
            <Card.Title>Mantenimiento Siebel Fija</Card.Title>
            <Card.Text>
                ID Placa: 6556 <br/>Se realizaran tareas de mantenimiento en Siebel, por lo cual no estara disponible.
                <br/>Inicio: 22-10-23 21:00hrs
                <br/>Termino: 23-10-23 06:00hrs
            </Card.Text>
            <Button variant="primary">Mas informacion</Button>
            </Card.Body>
            </Card>
            </div>
            
            <div className="novedades-card">
            <Card style={{ width: '40rem' }}>
            <Card.Img variant="" src={imgMantenimiento2} />
            <Card.Body>
            <Card.Title>Mantenimiento OPEN</Card.Title>
            <Card.Text>
                ID Placa: 6550 <br/>Se realizaran tareas de mantenimiento en OPEN, por lo cual no estara disponible.
                <br/>Inicio: 23-10-23 00:30hrs
                <br/>Termino estimado: 23-10-23 06:30hrs
            </Card.Text>
            <Button variant="primary">Mas informacion</Button>
            </Card.Body>
            </Card>
            </div>

            <div className="novedades-card">
            <Card style={{ width: '40rem' }}>
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