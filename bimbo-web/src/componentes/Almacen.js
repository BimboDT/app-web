import "../styles/App.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";

const Almacen = ({ almacenValues, selectedOption }) => {
  return (
    <div className="almacen">
      <div className="columna">
        {almacenValues[0].map((value, index) => {
          return selectedOption === "Cantidad de incidencias" ? (
            <Incidencias key={index} value={value} />
          ) : (
            <Porcentaje key={index} value={value} />
          );
        })}
      </div>
      <div className="columna">
        {almacenValues[1].map((value, index) => {
          return selectedOption === "Cantidad de incidencias" ? (
            <Incidencias key={index} value={value} />
          ) : (
            <Porcentaje key={index} value={value} />
          );
        })}
      </div>
      <div className="columna">
        {almacenValues[2].map((value, index) => {
          return selectedOption === "Cantidad de incidencias" ? (
            <Incidencias key={index} value={value} />
          ) : (
            <Porcentaje key={index} value={value} />
          );
        })}
      </div>
      <div className="columna">
        <div className="oficina" />
        <div className="oficina" />
      </div>
    </div>
  );
};

export default Almacen;
