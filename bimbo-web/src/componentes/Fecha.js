import "../styles/App.css";
import React, { useState } from 'react';

function Fecha() {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [depth, setDepth] = useState('');

  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0') + ':00';
    return hour;
  });

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const handleDepthChange = (e) => {
    setDepth(e.target.value);
  };

  const handleFilter = () => {
    if (date && hour && depth) {
      const dateTime = `${date}T${hour}:00`;
      console.log("Fecha y hora y profundidad seleccionada:", dateTime, depth);
    } else {
      console.log("Por favor selecciona fecha, hora y profundidad.");
    }
  };

  return (
    <div className="filtros">
      <div>
        <label style={{marginRight: "8px"}} htmlFor="dateFilter">Fecha:</label>
        <input
          type="date"
          id="dateFilter"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label style={{marginRight: "8px"}} htmlFor="hourFilter">Hora:</label>
        <select
          id="hourFilter"
          value={hour}
          onChange={handleHourChange}
        >
          <option value="">Selecciona una hora:</option>
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label style={{marginRight: "8px"}} htmlFor="depthFilter">Profundidad del tunel:</label>
        <select
          id="depthFilter"
          value={depth}
          onChange={handleDepthChange}
        >
          <option value="">Selecciona una profundidad:</option>
          {Array.from({ length: 7 }, (_, i) => i + 1).map((depth) => (
            <option key={depth} value={depth}>
              {depth}
            </option>
          ))}
        </select>
      </div>
      <button className="boton" onClick={handleFilter}>
        Filtrar
      </button>
    </div>
  );
}

export default Fecha;
