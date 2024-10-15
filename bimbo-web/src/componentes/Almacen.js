import "../styles/App.css";
import Porcentaje from "./Porcentaje";

const Almacen = () => {
  const values1 = [7, 8, 5, 0, 8, 8];
  const values2 = [8, 6, 8, 2, 6, 7];
  const values3 = [0, 3, 8, 4, 8, 1];

  return (
    <div className="almacen">
      <div className="columna">
        {values1.map((value, index) => (
          <Porcentaje key={index} value={value} />
        ))}
      </div>
      <div className="columna">
        {values2.map((value, index) => (
          <Porcentaje key={index} value={value} />
        ))}
      </div>
      <div className="columna">
        {values3.map((value, index) => (
          <Porcentaje key={index} value={value} />
        ))}
      </div>
      <div className="columna">
        <div className="oficina" />
        <div className="oficina" />
      </div>
    </div>
  );
};

export default Almacen;
