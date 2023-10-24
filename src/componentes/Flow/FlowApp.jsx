import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import CmHfc from "../Media/Img/cmHFC.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import DecoSerializable from "../Media/Img/DecosSerializable.png"
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import OntSerializable from "../Media/Img/OntSerializable.png"
import PendienteDeInstalacion from "../../componentes/Media/Img/pendienteDeInstalacion.png"
import PendienteDeInstalacion2 from "../../componentes/Media/Img/pendienteDeInstalacion2.png"
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function FlowApp() {
    return (
        <div>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
        </div>
    );
}

export default FlowApp;