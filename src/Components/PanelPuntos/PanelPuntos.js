import React from 'react';
import './PanelPuntos.css'

const PanelPuntos = ({ puntos }) => {
  if (!puntos || puntos.total === 0) {
    return <button className="resultado">?</button>;
  }

  return (
    <button className="resultado">
      <div className="detalle-resultado">
        <span>🎲 {puntos.dado}</span>
        <span className="texto-total">(Total: {puntos.total})</span>
      </div>
    </button>
  );
};

export default PanelPuntos;