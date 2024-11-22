import "../styles/ReservaBig.css";
import Porcentaje from "./Porcentaje";
import Incidencias from "./Incidencias";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ReservaBig = ({ almacenValues, selectedOption, setIsHovered, locations, info, setSelectedRack, selectedLocation, onFetchData, setRack }) => {
  const Componente = selectedOption === "Cantidad de incidencias" ? Incidencias : Porcentaje;
  const loc = useLocation();

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    console.log("FECHA:", formattedDate);

    const fecha = "2024-10-10";
    const api = process.env.REACT_APP_API_URL;
    const ubi = selectedLocation;
    console.log("UBICACION:", ubi);

    const filter1 = `http://${api}/conteo/numeroRacks/${ubi}/${fecha}`;
    const filter2 = `http://${api}/conteo/numeroIncidencias/${ubi}/${fecha}`;
    const filter3 = `http://${api}/conteo/numeroConteos/${ubi}/${fecha}`;

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

        const data1 = {
          values: [[4, 8, 2]],
          info: [[4315, 8501, 2894]]
        };

        const data2 = {
          values: [[1, 2, 0]],
          info: [[2, 5, 0]]
        };

        const data3 = {
          values: [[8, 6, 2]],
          info: [[100, 75, 25]]
        };

        onFetchData(data1, data2, data3);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedLocation]);

  return (
    <div className="reserva">
      {almacenValues.map((values, colIndex) => (
        <div className="fila" key={colIndex}>
          {values.map((value, index) => {
            const location = locations[colIndex][index];
            let extra = "";

            if (selectedOption === "Cantidad de producto en racks") {
              extra = " palletes almacenados";
            } else if (selectedOption === "Cantidad de incidencias") {
              extra = " incidencias reportadas";
            } else {
              extra = " % de conteo realizado";
            }

            return (
              <div style={{marginRight: "4rem"}} key={`${colIndex}-${index}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  key={`${colIndex}-${index}`}
                >
                  <Link
                    to="/rack2"
                    state={{ from: loc }}
                    onMouseEnter={() => setSelectedRack(info[colIndex][index] + extra)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setRack(location)}
                  >
                    <Componente
                      value={value}
                      setIsHovered={setIsHovered}
                      origin={"Big"}
                    />
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

export default ReservaBig;
