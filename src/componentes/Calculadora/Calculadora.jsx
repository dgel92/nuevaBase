import React, { useState } from 'react';

function DescuentoCalculator() {
  const [valorOriginal, setValorOriginal] = useState('');
  const [duracionTotalMes, setDuracionTotalMes] = useState('');
  const [diasADescontar, setDiasADescontar] = useState('');
  const [descuento, setDescuento] = useState('');

  const calcularDescuento = () => {
    // Convertir los valores a números
    const valorOriginalNumero = parseFloat(valorOriginal);
    const duracionTotalMesNumero = parseInt(duracionTotalMes, 10);
    const diasADescontarNumero = parseInt(diasADescontar, 10);

    // Verificar que los valores sean válidos
    if (
      isNaN(valorOriginalNumero) ||
      isNaN(duracionTotalMesNumero) ||
      isNaN(diasADescontarNumero) ||
      diasADescontarNumero < 0 ||
      diasADescontarNumero > duracionTotalMesNumero
    ) {
      setDescuento('Por favor, ingrese valores válidos.');
      return;
    }

    // Calcular el porcentaje de descuento
    const porcentajeDescuento =
      (diasADescontarNumero / duracionTotalMesNumero) * 100;

    // Calcular el descuento en base al porcentaje
    const descuentoCalculado = (porcentajeDescuento / 100) * valorOriginalNumero;

    // Actualizar el estado del descuento
    setDescuento(`Descuento: ${descuentoCalculado.toFixed(2)}`);
  };

  const copiarDescuento = () => {
    // Copiar el descuento al portapapeles
    navigator.clipboard.writeText(descuento);
    alert('Descuento copiado al portapapeles');
  };

  const reiniciarCalculadora = () => {
    // Limpiar todos los campos y resultados
    setValorOriginal('');
    setDuracionTotalMes('');
    setDiasADescontar('');
    setDescuento('');
  };

  return (
    <section className="body-calculadora">
      <h2>Calculadora de Descuento</h2>
      <div className="card-calculadora">
        <label htmlFor="valorOriginal">Total de la factura:</label>
        <input
          type="number"
          id="valorOriginal"
          placeholder="Ingresa el valor total"
          value={valorOriginal}
          onChange={(e) => setValorOriginal(e.target.value)}
          required
        />

        <label htmlFor="duracionTotalMes">Duración total del mes (días):</label>
        <input
          type="number"
          id="duracionTotalMes"
          placeholder="Cuantos dias tiene el mes de facturacion"
          value={duracionTotalMes}
          onChange={(e) => setDuracionTotalMes(e.target.value)}
          required
        />

        <label htmlFor="diasADescontar">Días a descontar:</label>
        <input
          type="number"
          id="diasADescontar"
          placeholder="Total de dias sin servicio"
          value={diasADescontar}
          onChange={(e) => setDiasADescontar(e.target.value)}
          required
        />
        <p id="result">{descuento}</p>
      </div>
      <div className='botones'>
        <button onClick={calcularDescuento}>Calcular Descuento</button>
        <button onClick={copiarDescuento}>Copiar Descuento</button>
        <button onClick={reiniciarCalculadora}>Reiniciar Calculadora</button>
      </div>
    </section>
  );
}

export default DescuentoCalculator;
