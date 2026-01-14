import React from 'react';
import './PanelHabilidades.css';

const PanelHabilidades = ({ habilidad, estilo }) => {
  return (
    <div className="panel-habilidades" style={estilo}>
      <p>FUERZA: {habilidad.fuerza}</p>
      <p>VELOCIDAD: {habilidad.velocidad}</p>
      <p>SALTO: {habilidad.salto}</p>
    </div>
  );
};

export default PanelHabilidades;