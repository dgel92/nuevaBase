import './linksUtiles.scss';

import BaseConocimiento from "../Media/Img/baseDeConocimiento.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Codi from "../Media/Img/codi.png"
import { Link } from "react-router-dom";
import appVentas from "../Media/Img/appVentas.png"
import ccip from "../Media/Img/ccip.png"
import ememo from "../Media/Img/ememo.png"
import fan from "../Media/Img/fan.png"
import hub from "../Media/Img/hub.png"
import itracker from "../Media/Img/itracker.png"
import symphonica from "../Media/Img/symphonica.png"
import tecdata from "../Media/Img/tecdata.png"

function LinksUtiles(){
    return (
        <div className='containerLinkUtiles'>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Links utiles</h1>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
          <Card.Img variant="top" src={BaseConocimiento} />
          <Card.Body>
          <Link to="https://basedeconocimientos.custhelp.com/#"><Card.Title>Base de Conocimiento</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
    
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={ccip} />
          <Card.Body>
          <Link to="https://ccip/"><Card.Title>CCIP</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={Codi} />
          <Card.Body>
          <Link to="https://codi.telecom.com.ar/login"><Card.Title>CODI</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={itracker} />
          <Card.Body>
          <Link to="https://consultaitracker/"><Card.Title>Itrackers</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={ememo} />
          <Card.Body>
          <Link to="http://srv-webcv2.corp.cablevision.com.ar/ememo/"><Card.Title>E-Memo</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>

        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={fan} />
          <Card.Body>
          <Link to="https://telecomcrm.my.salesforce.com/console"><Card.Title>FAN SalesForc</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={hub} />
          <Card.Body>
          <Link to="https://nuevosender.corp.cablevision.com.ar/"><Card.Title>HUB</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        
        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={symphonica} />
          <Card.Body>
          <Link to="http://10.9.44.132/symphonica/v2_7/#/"><Card.Title>Symphonica</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>

        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={tecdata} />
          <Card.Body>
          <Link to="https://mimundo-prod1.corp.cablevision.com.ar/IDPAdmin/#/Login/MGUAdmin"><Card.Title>TecData</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>

        <div className='CardLinkUtiles'>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={appVentas} />
          <Card.Body>
          <Link to="https://click/customer/condiciones/condiciones/APPS/app-ventas"><Card.Title>App Ventas y contencion</Card.Title></Link>
          </Card.Body>
        </Card>
        </div>
        </div>
      );
    }

export default LinksUtiles