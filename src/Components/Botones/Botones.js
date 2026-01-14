import React from 'react';
import './Botones.css';

export const Botones = ({  onPelea, onResolucion,  onReiniciar, estaDesactivado, juegoTerminado }) => {

  return (
    <div className="contenedor-botones">

      {/* BOTÓN PELEAR: Se deshabilita si la ronda está en curso (estaDesactivado) o si alguien ya ganó la partida (juegoTerminado) */}
      <button className="boton pelear" onClick={onPelea}  disabled={estaDesactivado || juegoTerminado} > ¡ PELEAR ! </button>

      {/* BOTÓN RESOLUCIÓN: Solo esta habilitado después de elegir habilidad (!estaDesactivado) y se bloquea permanentemente si el juego termina */}
      <button className="boton resolucion" onClick={onResolucion} disabled={juegoTerminado || !estaDesactivado}> ! RESOLUCIÓN ! </button>

      {/* BOTÓN REINICIAR: Siempre disponible para volver a empezar desde cero */}
      <button className="boton reiniciar" onClick={onReiniciar} > REINICIAR JUEGO </button>

    </div>
  );
};

export default Botones;