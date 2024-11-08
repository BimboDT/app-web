import "../styles/ReservaSmall.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";
import { Link } from "react-router-dom";

const ReservaSmall = ({ almacenValues, selectedOption, setIsHovered, locations, info, setSelectedRack }) => {
  const Componente =
    selectedOption === "Cantidad de incidencias" ? Incidencias : Porcentaje;

  return (
    <div className="reserva">
      {almacenValues.map((values, colIndex) => (
        <div className="fila" key={colIndex}>
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
                <div>
              <div style={{display:"flex" , justifyContent: "space-between", width:"8rem"}} key={`${colIndex}-${index}`}>
                <Link
                  to="/rack"
                  onMouseEnter={() => setSelectedRack(info[colIndex][index] + extra)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Componente value={value} setIsHovered={setIsHovered} origin={"Small"} />
                </Link>
              </div>
              <div className="ubicacion"> {location} </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ReservaSmall;
