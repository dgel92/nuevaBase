import Button from 'react-bootstrap/Button';

function LinksEmpresa() {
    return(
        <>
        <div className='contenedortitulo'>
            <h2>Links Utiles</h2>
        </div>
        <div className='contenedorPortada'>
        <section>
            <h3><a href="https://miportal.grupokonecta.com.ar/login/deslogueo" className='botonPortada'>Cargar deslogueo</a></h3>
            <h3><a href="https://acichat.grupokonecta.com.ar/#/login" className='botonPortada'>Chat ACI</a></h3>
            <h3><a href="https://konecta.turecibo.com/e/" className='botonPortada'>TU RECIBO WEB</a></h3>
        </section>
        <section>
            <h3><a href="https://miportal.grupokonecta.com.ar/login" className='botonPortada'>Mi portal Konecta</a></h3>
            <h3><a href="https://reseteadorweb.grupokonecta.com.ar/login" className='botonPortada'>Reseteador de window</a></h3>
            <h3><a href="/" className='botonPortada'>Bton sin definir1</a></h3>
        </section>
        <section>
            <h3><a href="https://www.galenoseguros.com.ar/seguros/art/art-home.html" className='botonPortada'>ART</a></h3>
            <h3><a href="https://miportal.grupokonecta.com.ar/login" className='botonPortada'>Registro de ausentismo</a></h3>
            <h3><a href="/" className='botonPortada'>Bton sin definir2</a></h3>
        </section>
    </div>
    </>
        )}

export default LinksEmpresa;