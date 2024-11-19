import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Almacen from "./componentes/Almacen";
import ReservaSmall from "./componentes/ReservaSmall";
import ReservaBig from "./componentes/ReservaBig";
import Filtro from "./componentes/Filtro";
import Rack from "./componentes/Rack";
import Rack2 from "./componentes/Rack2";
import Mapa from "./componentes/Mapa";
import Data from "./componentes/Data";

function App() {
  const [almacenData, setAlmacenData] = useState({
    almacenValues: [],
    almacenLocations: [],
    almacenInfo: [],
    reservaSvalues: [],
    reservaSlocations: [],
    reservaSinfo: [],
    reservaBvalues: [],
    reservaBlocations: [],
    reservaBinfo: [],
  });

  const [updateMethods, setUpdateMethods] = useState({
    updateAlmacenValues: () => {},
    updateReservaSValues: () => {},
    updateReservaBValues: () => {},
  });

  // const [almacenValues, setAlmacenValues] = useState([
  //   [6, 4, 6, 8, 1, 1],
  //   [3, 8, 7, 8, 7, 5],
  //   [3, 4, 0, 8, 2, 2],
  //   [0, 5, 6, 3, 1, 8],
  // ]);

  // const [almacenLocations, ] = useState([
  //   ["Pasillo P1", "Pasillo Q1", "Pasillo R1", "Pasillo S1", "Pasillo T1", "Pasillo U1"],
  //   ["Pasillo P2", "Pasillo Q2", "Pasillo R2", "Pasillo S2", "Pasillo T2", "Pasillo U2"],
  //   ["Pasillo P3", "Pasillo Q3", "Pasillo R3", "Pasillo S3", "Pasillo T3", "Pasillo U3"],
  //   ["Pasillo P4", "Pasillo Q4", "Pasillo R4", "Pasillo S4", "Pasillo T4", "Pasillo U4"],
  // ]);

  // const [almacenInfo, setAlmacenInfo] = useState([
  //   [6156, 4341, 6827, 8789, 1043, 1925],
  //   [3152, 8945, 7371, 8283, 7427, 5710],
  //   [3982, 4315, 220, 8501, 2894, 2120],
  //   [500, 5798, 6241, 3710, 1926, 8031],
  // ]);

  // const [reservaSvalues, setReservaSvalues] = useState([
  //   [6, 4, 6, 8, 1, 1],
  //   [3, 8, 7, 8, 7, 5],
  // ]);

  // const [reservaSlocations, ] = useState([
  //   ["Rack A", "Rack B", "Rack C", "Rack D", "Rack E", "Rack F"],
  //   ["Rack L", "Rack K", "Rack J", "Rack I", "Rack H", "Rack G"],
  // ]);

  // const [reservaSinfo, setReservaSinfo] = useState([
  //   [6156, 4341, 6827, 8789, 1043, 1925],
  //   [3152, 8945, 7371, 8283, 7427, 5710],
  // ]);

  // const [reservaBvalues, setReservaBvalues] = useState([
  //   [4, 8, 2],
  //   [6, 3, 1],
  // ]);

  // const [reservaBlocations, ] = useState([
  //   [],
  //   ["Rack M", "Rack N", "Rack O"],
  // ]);

  // const [reservaBinfo, setReservaBinfo] = useState([
  //   [4315, 8501, 2894],
  //   [6241, 3710, 1926],
  // ]);

  // const updateAlmacenValues = (selection) => {
  //   switch (selection) {
  //     case "Cantidad de producto en racks":
  //       setAlmacenValues([
  //         [6, 4, 6, 8, 1, 1],
  //         [3, 8, 7, 8, 7, 5],
  //         [3, 4, 0, 8, 2, 2],
  //         [0, 5, 6, 3, 1, 8],
  //       ]);
  //       setAlmacenInfo([
  //         [6156, 4341, 6827, 8789, 1043, 1925],
  //         [3152, 8945, 7371, 8283, 7427, 5710],
  //         [3982, 4315, 220, 8501, 2894, 2120],
  //         [500, 5798, 6241, 3710, 1926, 8031],
  //       ]);
  //       break;
  //     case "Cantidad de incidencias":
  //       setAlmacenValues([
  //         [2, 3, 1, 0, 5, 2],
  //         [4, 1, 2, 6, 3, 5],
  //         [1, 2, 0, 3, 2, 1],
  //         [8, 0, 0, 1, 0, 7],
  //       ]);
  //       setAlmacenInfo([
  //         [5, 7, 2, 0, 12, 5],
  //         [10, 3, 5, 15, 8, 13],
  //         [2, 5, 0, 8, 5, 2],
  //         [20, 0, 0, 3, 0, 17],
  //       ]);
  //       break;
  //     case "Porcentaje de conteo realizado":
  //       setAlmacenValues([
  //         [7, 8, 5, 0, 8, 8],
  //         [8, 6, 8, 2, 6, 7],
  //         [0, 3, 8, 4, 8, 1],
  //         [8, 3, 5, 8, 6, 2],
  //       ]);
  //       setAlmacenInfo([
  //         [97, 100, 62, 0, 100, 100],
  //         [100, 75, 100, 25, 75, 88],
  //         [0, 38, 100, 50, 100, 13],
  //         [100, 37, 63, 100, 75, 25],
  //       ]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const updateReservaSValues = (selection) => {
  //   switch (selection) {
  //     case "Cantidad de producto en racks":
  //       setReservaSvalues([
  //         [6, 4, 6, 8, 1, 1],
  //         [3, 8, 7, 8, 7, 5],
  //       ]);
  //       setReservaSinfo([
  //         [6156, 4341, 6827, 8789, 1043, 1925],
  //         [3152, 8945, 7371, 8283, 7427, 5710],
  //       ]);
  //       break;
  //     case "Cantidad de incidencias":
  //       setReservaSvalues([
  //         [2, 3, 1, 0, 5, 2],
  //         [4, 1, 2, 6, 3, 5],
  //       ]);
  //       setReservaSinfo([
  //         [5, 7, 2, 0, 12, 5],
  //         [10, 3, 5, 15, 8, 13],
  //       ]);
  //       break;
  //     case "Porcentaje de conteo realizado":
  //       setReservaSvalues([
  //         [7, 8, 5, 0, 8, 8],
  //         [8, 6, 8, 2, 6, 7],
  //       ]);
  //       setReservaSinfo([
  //         [97, 100, 62, 0, 100, 100],
  //         [100, 75, 100, 25, 75, 88],
  //       ]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const updateReservaBValues = (selection) => {
  //   switch (selection) {
  //     case "Cantidad de producto en racks":
  //       setReservaBvalues([
  //         [4, 8, 2],
  //         [6, 3, 1],
  //       ]);
  //       setReservaBinfo([
  //         [4315, 8501, 2894],
  //         [6241, 3710, 1926],
  //       ]);
  //       break;
  //     case "Cantidad de incidencias":
  //       setReservaBvalues([
  //         [1, 2, 0],
  //         [8, 0, 0],
  //       ]);
  //       setReservaBinfo([
  //         [2, 5, 0],
  //         [20, 0, 0],
  //       ]);
  //       break;
  //     case "Porcentaje de conteo realizado":
  //       setReservaBvalues([
  //         [4, 8, 1],
  //         [8, 6, 2],
  //       ]);
  //       setReservaBinfo([
  //         [50, 100, 13],
  //         [100, 75, 25],
  //       ]);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const [selectedOption, setSelectedOption] = useState("Cantidad de producto en racks");

  const [isHovered, setIsHovered] = useState(false);

  const [selectedRack, setSelectedRack] = useState(null);

  const Informacion = ({ visible }) => {
    return visible && (
      <div className="info">En este rack hay {selectedRack}</div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Data
          onDataLoaded={setAlmacenData}
          onUpdateValues={setUpdateMethods}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/mapa" />} />
          <Route
            path="/mapa"
            element={<Mapa/>}
          />
          <Route
            path="/almacen"
            element={
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to="/mapa" className="btn-back-almacen">
                    <IoIosArrowBack size={34} />
                  </Link>
                  <Filtro
                    updateAlmacenValues={updateMethods.updateAlmacenValues}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <Almacen
                  almacenValues={almacenData.almacenValues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={almacenData.almacenLocations}
                  info={almacenData.almacenInfo}
                  setSelectedRack={setSelectedRack}
                />
              </>
            }
          />
          <Route
            path="/reservaSmall"
            element={
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to="/mapa" className="btn-back-almacen">
                    <IoIosArrowBack size={34} />
                  </Link>
                  <Filtro
                    updateAlmacenValues={updateMethods.updateReservaSValues}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <ReservaSmall
                  almacenValues={almacenData.reservaSvalues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={almacenData.reservaSlocations}
                  info={almacenData.reservaSinfo}
                  setSelectedRack={setSelectedRack}
                />
              </>
            }
          />
          <Route
            path="/reservaBig"
            element={
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to="/mapa" className="btn-back-almacen">
                    <IoIosArrowBack size={34} />
                  </Link>
                  <Filtro
                    updateAlmacenValues={updateMethods.updateReservaBValues}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <ReservaBig
                  almacenValues={almacenData.reservaBvalues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={almacenData.reservaBlocations}
                  info={almacenData.reservaBinfo}
                  setSelectedRack={setSelectedRack}
                />
              </>
            }
          />
          <Route path="/rack" element={<Rack />} />
          <Route path="/rack2" element={<Rack2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
