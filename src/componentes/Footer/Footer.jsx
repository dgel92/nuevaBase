import {Link} from 'react-router-dom';
import React from "react";

function Footer(){
    return(
        <div className="contenedorFooter">
            <div>
                <p><Link to="/" className="textoFooter">Para sugerencias no dudes en escribir aqui</Link></p>
            </div>
        </div>
    )
}

export default Footer;