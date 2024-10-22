import "../styles/App.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";
import { Link } from "react-router-dom";

const Almacen = ({ almacenValues, selectedOption, setIsHovered, updateLocation }) => {
  const Componente =
    selectedOption === "Cantidad de incidencias" ? Incidencias : Porcentaje;

  return (
    <div className="almacen">
      {almacenValues.map((values, colIndex) => (
        <div className="columna" key={colIndex}>
          {values.map((value, index) => (
            <Link to="/rack" key={index} onMouseEnter={() => updateLocation(`${colIndex}-${index}`)}>
              <Componente value={value} setIsHovered={setIsHovered} />
            </Link>
          ))}
        </div>
      ))}
      <div className="columna">
        <div className="oficina" />
        <div className="oficina" />
      </div>
    </div>
  );
};

export default Almacen;
