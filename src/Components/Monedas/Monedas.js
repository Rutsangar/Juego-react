import React from 'react';
import './Monedas.css';

const Monedas = ({ cantidad }) => {
  const listaMonedas = [];

  for (let i = 0; i < 3; i++) {
    let claseMoneda = "moneda-icon";
    if (i >= cantidad) {
      claseMoneda = "moneda-icon moneda-off";
    }
    listaMonedas.push(
      <img key={i} src="/monedaActivada.png" className={claseMoneda} alt="vida" />
    );
  }
  return <div className="monedas">{listaMonedas}</div>;
};

export default Monedas;