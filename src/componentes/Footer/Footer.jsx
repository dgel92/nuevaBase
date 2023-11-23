import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const Footer = () => {
    return (
        <footer className='footer-body'>
            <div className='footer-card'>
                <h5>Cualquier mejora o información que consideres que debe estar en este sitio puedes enviarnos tu idea en el siguiente formulario.
                </h5>
                <ul>
                    <li className='footer-link'>
                    <a href="#!">Haz click aquí</a>
                    </li>
                </ul>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <p>© {new Date().getFullYear()} - Manual de FTTH</p>
            </div>
        </footer>
    );
};

export default Footer;
