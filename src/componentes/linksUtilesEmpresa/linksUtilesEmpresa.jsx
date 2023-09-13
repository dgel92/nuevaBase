import Button from 'react-bootstrap/Button';

function LinksEmpresa() {
    return(
        <>
        <div className='contenedortitulo'>
            <h2>Links Utiles</h2>
        </div>
        <div className='contenedorPortada'>
        <section>
            <h3><a href="https://miportal.grupokonecta.com.ar/login/deslogueo" className='botonPortada'>CARGAR DESLOGUEO</a></h3>
            <h3><a href="https://acichat.grupokonecta.com.ar/#/login" className='botonPortada'>CHAT ACI</a></h3>
            <h3><a href="https://sites.google.com/view/konecta2/" className='botonPortada'>CHAT CAIS</a></h3>
        </section>
        <section>
            <h3><a href="https://miportal.grupokonecta.com.ar/login" className='botonPortada'>MI PORTAL</a></h3>
            <h3><a href="https://docs.google.com/document/d/1nHsGX7mKbftBaRLckL1Xzzj39WRyKC4K/edit" className='botonPortada'>PARO DE TRANSPORTE</a></h3>
            <h3><a href="https://miportal.grupokonecta.com.ar/login" className='botonPortada'>REGISTROS DE AUSENTISMO</a></h3>
        </section>
        <section>
            <h3><a href="https://rst.telefonica.com.ar/authorization.do" className='botonPortada'>ART</a></h3>
            <h3><a href="https://reseteadorweb.grupokonecta.com.ar/login" className='botonPortada'>RESETEADOR DE WINDOWS</a></h3>
            <h3><a href="https://konecta.turecibo.com/e/" className='botonPortada'>TU RECIBO WEB</a></h3>
        </section>
    </div>
    </>
        )}

export default LinksEmpresa;