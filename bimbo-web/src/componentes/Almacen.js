import "../styles/App.css";
import Porcentaje from "./Porcentaje";

const Almacen = () => {
  return (
    <div className="almacen">
        <div className="columna">
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
        </div>
        <div className="columna">
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
        </div>
        <div className="columna">
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
            <Porcentaje />
        </div>
        <div className="columna">
            <div className="oficina"/>
            <div className="oficina"/>
        </div>
    </div>
  );
};

export default Almacen;