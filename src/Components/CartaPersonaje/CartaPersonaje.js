import React from 'react';
import './CartaPersonaje.css';
import PanelHabilidades from '../PanelHabilidades/PanelHabilidades';
import Monedas from '../Monedas/Monedas';
import PanelPuntos from '../PanelPuntos/PanelPuntos';

const CartaPersonaje = ({ nombre, habilidad, puntos, monedas, imagen, color }) => {
  
  // Creamos un color de fondo con transparencia basado en el color del personaje
  const panelHabilidadesStyle = {
    backgroundColor: color + "30", 
    color: color,
    borderColor: color
  };

  return (
    <div className="carta" style={{ borderColor: color }}>
      <h1 className="nombre-personaje" style={{ color: color }}> {nombre} </h1>

      <Monedas cantidad={monedas}/>

      <div className="imagen">
        <img src={imagen} alt={nombre} className="personaje"/>
      </div>

      <PanelHabilidades habilidad={habilidad} estilo={panelHabilidadesStyle} />

      <PanelPuntos puntos={puntos}/>

    </div>
  );
};

export default CartaPersonaje;