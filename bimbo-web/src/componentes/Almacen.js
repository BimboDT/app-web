import "../styles/Almacen.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";
import { Link, useLocation } from "react-router-dom";

const Almacen = ({ almacenValues, selectedOption, setIsHovered, locations, info, setSelectedRack }) => {
  const Componente =
    selectedOption === "Cantidad de incidencias" ? Incidencias : Porcentaje;

  const loc = useLocation();

  return (
    <div className="almacen">
      {almacenValues.map((values, colIndex) => (
        <div className="columna" key={colIndex}>
          {values.map((value, index) => {
            const location = locations[colIndex][index];
            let extra = '';

            if (selectedOption === "Cantidad de producto en racks") {
              extra = " palletes almacenados";
            } else if (selectedOption === "Cantidad de incidencias") {
              extra = " incidencias reportadas";
            } else {
              extra = " % de conteo realizado";
            }

            return (
              <div style={{width: "100%", maxWidth: "200px", margin: "5px"}} key={`${colIndex}-${index}`}>
                <Link
                  to="/rack"
                  state={{ from: loc }}
                  onMouseEnter={() => setSelectedRack(info[colIndex][index] + extra)}
                  onMouseLeave={() => setIsHovered(false)
                  }
                >
                  <Componente value={value} setIsHovered={setIsHovered} />
                </Link>
                <div className="ubicacion"> {location} </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Almacen;
