import { useState } from 'react';
import './App.css';
import CartaPersonaje from './Components/CartaPersonaje/CartaPersonaje';
import Botones from './Components/Botones/Botones';
import ColumnaCentral from './Components/ColumnaCentral/ColumnaCentral';

function App() {
  // DATOS ESTÁTICOS 
  const marioHabilidades = { fuerza: 60, velocidad: 70, salto: 80 };
  const bowserHabilidades = { fuerza: 90, velocidad: 30, salto: 40 };

  // ESTADOS DE LA INTERFAZ 
  // [valorActual, funcionParaCambiarlo] = useState(valorInicial)
  const [subtitulo, setSubtitulo] = useState("PULSA ¡PELEAR!");
  const [mensajePanel, setMensajePanel] = useState("HERE WE GO!");
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  // ESTADOS DE LA LÓGICA DE JUEGO
  const [habilidadElegida, setHabilidadElegida] = useState(null);
  const [monedasMario, setMonedasMario] = useState(3);
  const [monedasBowser, setMonedasBowser] = useState(3);
  const [puntosExtra, setPuntosExtra] = useState({ 
    mario: { dado: 0, total: 0 }, 
    bowser: { dado: 0, total: 0 } 
  });

  // Función para elegir la categoría de la batalla al azar
  const botonPelea = () => {
    if (juegoTerminado) return; // Si el juego acabó no hacemos nada
    
    const habilidades = ["fuerza", "velocidad", "salto"];
    const elegida = habilidades[Math.floor(Math.random() * habilidades.length)];
    
    setHabilidadElegida(elegida);
    setSubtitulo("BATALLA POR: " + elegida.toUpperCase() + "!");
    setMensajePanel("¡CARACTERÍSTICA ELEGIDA!");

    // Limpiamos los dados de la ronda anterior para nueva ronda
    setPuntosExtra({ mario: { dado: 0, total: 0 }, bowser: { dado: 0, total: 0 } });
    setBotonDesactivado(true);
  };

  // Calcula resultados, resta monedas y verifica si el juego termina
  const botonResolucion = () => {
    if (!habilidadElegida || juegoTerminado) return;

    // Generamos un número aleatorio
    const randomMario = Math.floor(Math.random() * 100) + 1;
    const randomBowser = Math.floor(Math.random() * 100) + 1;

    // Calculamos el total
    const totalM = marioHabilidades[habilidadElegida] + randomMario;
    const totalB = bowserHabilidades[habilidadElegida] + randomBowser;

    // Actualizamos resultado
    setPuntosExtra({ 
      mario: { dado: randomMario, total: totalM }, 
      bowser: { dado: randomBowser, total: totalB } 
    });

    // Variables temporales para el cálculo de vidas
    let vidasM = monedasMario;
    let vidasB = monedasBowser;

    // Comparamos totales para ver quién gana la ronda
    if (totalM > totalB) {
      setMensajePanel("¡MARIO GANA LA RONDA!");
      vidasB = monedasBowser - 1;
      setMonedasBowser(vidasB);
    } else if (totalB > totalM) {
      setMensajePanel("¡BOWSER GANA LA RONDA!");
      vidasM = monedasMario - 1;
      setMonedasMario(vidasM);
    } else {
      setMensajePanel("¡EMPATE!");
    }

    // Comprobación de fin de Partida
    if (vidasM === 0) {
      setMensajePanel("¡BOWSER GANA LA BATALLA!");
      setSubtitulo("FIN DEL JUEGO");
      setJuegoTerminado(true);
    } else if (vidasB === 0) {
      setMensajePanel("¡MARIO GANA LA BATALLA!");
      setSubtitulo("FIN DEL JUEGO");
      setJuegoTerminado(true);
    } else {
      // Si nadie ha perdido, habilitamos el botón de pelea para la siguiente ronda
      setBotonDesactivado(false); 
    }
  };

  // Función para resetear todos los valores y empezar de cero
  const botonReiniciar = () => {
    setSubtitulo("PULSA ¡PELEAR!");
    setMensajePanel("HERE WE GO!");
    setHabilidadElegida(null);
    setPuntosExtra({ mario: { dado: 0, total: 0 }, bowser: { dado: 0, total: 0 } });
    setMonedasMario(3);
    setMonedasBowser(3);
    setBotonDesactivado(false);
    setJuegoTerminado(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>SUPER MARIO BATALLA</h2>
        <h4>{subtitulo}</h4>

        <div className="contenedor-batalla">
          <CartaPersonaje 
            nombre="MARIO" 
            habilidad={marioHabilidades} 
            puntos={puntosExtra.mario}
            monedas={monedasMario} 
            imagen="/mario.png" 
            color="#ff4d4d"
          />

          <ColumnaCentral mensaje={mensajePanel} />
      
          <CartaPersonaje 
            nombre="BOWSER" 
            habilidad={bowserHabilidades} 
            puntos={puntosExtra.bowser}
            monedas={monedasBowser} 
            imagen="/bowser.png" 
            color="#2ecc71"
          />
        </div>

        <Botones 
          onPelea={botonPelea} 
          onResolucion={botonResolucion} 
          onReiniciar={botonReiniciar}
          estaDesactivado={botonDesactivado} 
          juegoTerminado={juegoTerminado} 
        />
      </header>
    </div>
  );
}

export default App;