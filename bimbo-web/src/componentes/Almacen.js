import "../styles/Almacen.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Almacen = ({ almacenValues, selectedOption, setIsHovered, locations, info, setSelectedRack, selectedLocation, onFetchData, setRack }) => {
  const Componente = selectedOption === "Cantidad de incidencias" ? Incidencias : Porcentaje;
  const loc = useLocation();

  // Se implemento la lógica para obtener los datos de los racks pero por falta de datos solo se simuló
  useEffect(() => {
    // const date = new Date();
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const day = String(date.getDate()).padStart(2, '0');
    // const formattedDate = `${year}-${month}-${day}`;

    // const api = process.env.REACT_APP_API_URL;
    // const ubi = selectedLocation;

    // const filter1 = `http://${api}/conteo/numeroRacks/${ubi}/${fecha}`;
    // const filter2 = `http://${api}/conteo/numeroIncidencias/${ubi}/${fecha}`;
    // const filter3 = `http://${api}/conteo/numeroConteos/${ubi}/${fecha}`;

    const fetchData = async () => {
      try {
        // const [data1, data2, data3] = await Promise.all([
        //   fetch(filter1).then((res) => {
        //     if (!res.ok) throw new Error("Error en filter1");
        //     return res.json();
        //   }),
        //   fetch(filter2).then((res) => {
        //     if (!res.ok) throw new Error("Error en filter2");
        //     return res.json();
        //   }),
        //   fetch(filter3).then((res) => {
        //     if (!res.ok) throw new Error("Error en filter3");
        //     return res.json();
        //   }),
        // ]);

        // console.log("DATA FILTRO 1:", data1);
        // console.log("DATA FILTRO 2:", data2);
        // console.log("DATA FILTRO 3:", data3);

        const resp1 = {
          values: [[6, 4, 6, 8, 1, 1], [3, 8, 7, 8, 7, 5], [3, 4, 0, 8, 2, 2],[0, 5, 6, 3, 1, 8]],
          info: [[6156, 4341, 6827, 8789, 1043, 1925], [3152, 8945, 7371, 8283, 7427, 5710], [3982, 4315, 220, 8501, 2894, 2120], [500, 5798, 6241, 3710, 1926, 8031]]
        };

        const resp2 = {
          values: [[2, 3, 1, 0, 5, 2], [4, 1, 2, 6, 3, 5], [1, 2, 0, 3, 2, 1], [8, 0, 0, 1, 0, 7]],
          info: [[5, 7, 2, 0, 12, 5], [10, 3, 5, 15, 8, 13], [2, 5, 0, 8, 5, 2], [20, 0, 0, 3, 0, 17]]
        };

        const resp3 = {
          values: [[7, 8, 5, 0, 8, 8], [8, 6, 8, 2, 6, 7], [0, 3, 8, 4, 8, 1], [8, 3, 5, 8, 6, 2]],
          info: [[97, 100, 62, 0, 100, 100], [100, 75, 100, 25, 75, 88], [0, 38, 100, 50, 100, 13], [100, 37, 63, 100, 75, 25]]
        };

        onFetchData(resp1, resp2, resp3);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedLocation]);

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
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setRack(location)}
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
