import Button from 'react-bootstrap/Button';

function LinksEmpresa() {
    return(
        <>
        <div className='contenedortitulo'>
            <h2>Links Utiles</h2>
        </div>
        <div className='contenedorPortada'>
        <section>
            <h3><a href="https://chat.konectados.com.ar/" className='botonPortada'>Chat konectados</a></h3>
            <h3><a href="https://acichat.grupokonecta.com.ar/#/login" className='botonPortada'>Chat ACI</a></h3>
            <h3><a href="https://www.turecibo.com/" className='botonPortada'>Tu recibo web</a></h3>
        </section>
        <section>
            <h3><a href="https://basedeconocimientos.custhelp.com/#" className='botonPortada'>Base de Conocimientos</a></h3>
            <h3><a href="https://caischat.grupokonecta.com.ar/" className='botonPortada'>Chat CAIS</a></h3>
            <h3><a href="https://www.atacc.com.ar/" className='botonPortada'>ATTAC</a></h3>
        </section>
        <section>
            <h3><a href="https://miportal.grupokonecta.com.ar/login" className='botonPortada'>Registro de ausentismo</a></h3>
            <h3><a href="https://miportal.grupokonecta.com.ar/" className='botonPortada'>Mi portal konecta</a></h3>
            <h3><a href="/" className='botonPortadaOculto'>Bton sin definir2</a></h3>
        </section>
    </div>
    </>
        )}

export default LinksEmpresa;