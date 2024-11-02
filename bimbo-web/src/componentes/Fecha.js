import React, { useState } from 'react';

function Fecha() {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');


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

  const handleFilter = () => {
    if (date && hour) {
      const dateTime = `${date}T${hour}:00`;
      console.log("Fecha y hora seleccionada:", dateTime);
    } else {
      console.log("Por favor selecciona fecha y hora.");
    }
  };

  return (
    <div>
      <label htmlFor="dateFilter">Selecciona Fecha:</label>
      <input
        type="date"
        id="dateFilter"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="hourFilter">Selecciona Hora:</label>
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

      <button onClick={handleFilter}>
        Filtrar
      </button>
    </div>
  );
}

export default Fecha;
