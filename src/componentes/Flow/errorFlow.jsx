import React, { useState } from 'react';

import Data from "./erroresFLow";

function ErrorFlow() {
  const [codigoInput, setCodigoInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handleBuscarClick = () => {
    const array = Array.isArray(Data) ? Data : [];
    const codigoBuscado = codigoInput.toUpperCase();
    const elementoEncontrado = array.find(item => item.CÓDIGO === codigoBuscado);

    if (elementoEncontrado) {
      setResultado(`Código encontrado: ${elementoEncontrado.AFECTACIÓN_Y_PROCEDIMIENTO}`);
    } else {
      setResultado('Código no encontrado');
    }
  };

  const handleBorrarClick = () => {
    setCodigoInput('');
    setResultado('');
  };

  return (
    <>
    <section className='buscadorContainer'>
        <div className='buscadorCard'>
            <h4>Coloca el error que ve el cliente</h4>
            <input
            type="text"
            value={codigoInput}
            onChange={(e) => setCodigoInput(e.target.value)}
            placeholder="Ejemplo: S1039"
            />
            <div className='buscadorbutton'>
                <button onClick={handleBuscarClick}>Buscar</button>
                <button onClick={handleBorrarClick}>Borrar búsqueda</button>
            </div>
            <div id="resultado" className="resultado">{resultado}</div>
        </div>
      </section>
    </>
  );
}

export default ErrorFlow;