import React from 'react';
import './ColumnaCentral.css';

const ColumnaCentral = ({ mensaje }) => {
  return (
    <div className="columna-central">
      <div className="vs-texto">VS</div>
      <div className="mensaje-panel">
        {mensaje}
      </div>
    </div>
  );
};

export default ColumnaCentral;
