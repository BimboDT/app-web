import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Almacen from "./componentes/Almacen";
import Filtro from "./componentes/Filtro";
import Rack from "./componentes/Rack";
import Mapa from "./componentes/Mapa";

function App() {
  const [almacenValues, setAlmacenValues] = useState([
    [6, 4, 6, 8, 1, 1],
    [3, 8, 7, 8, 7, 5],
    [3, 4, 0, 8, 2, 2],
    [0, 5, 6, 3, 1, 8],
  ]);

  const [locations, ] = useState([
    ["Pasillo AA", "Pasillo AB", "Pasillo AC", "Pasillo AD", "Pasillo AE", "Pasillo AF"],
    ["Pasillo AG", "Pasillo AH", "Pasillo AI", "Pasillo AJ", "Pasillo AK", "Pasillo AL"],
    ["Pasillo AM", "Pasillo AN", "Pasillo AO", "Pasillo AP", "Pasillo AQ", "Pasillo AR"],
    ["Pasillo AS", "Pasillo AT", "Pasillo AU", "Pasillo AV", "Pasillo AW", "Pasillo AX"],
  ]);

  const [info, setInfo] = useState([
    [6156, 4341, 6827, 8789, 1043, 1925],
    [3152, 8945, 7371, 8283, 7427, 5710],
    [3982, 4315, 220, 8501, 2894, 2120],
    [500, 5798, 6241, 3710, 1926, 8031],
  ]);

  const [selectedOption, setSelectedOption] = useState("Cantidad de producto en racks");

  const [isHovered, setIsHovered] = useState(false);

  const [selectedRack, setSelectedRack] = useState(null);

  const updateAlmacenValues = (selection) => {
    switch (selection) {
      case "Cantidad de producto en racks":
        setAlmacenValues([
          [6, 4, 6, 8, 1, 1],
          [3, 8, 7, 8, 7, 5],
          [3, 4, 0, 8, 2, 2],
          [0, 5, 6, 3, 1, 8],
        ]);
        setInfo([
          [6156, 4341, 6827, 8789, 1043, 1925],
          [3152, 8945, 7371, 8283, 7427, 5710],
          [3982, 4315, 220, 8501, 2894, 2120],
          [500, 5798, 6241, 3710, 1926, 8031],
        ]);
        break;
      case "Cantidad de incidencias":
        setAlmacenValues([
          [2, 3, 1, 0, 5, 2],
          [4, 1, 2, 6, 3, 5],
          [1, 2, 0, 3, 2, 1],
          [8, 0, 0, 1, 0, 7],
        ]);
        setInfo([
          [5, 7, 2, 0, 12, 5],
          [10, 3, 5, 15, 8, 13],
          [2, 5, 0, 8, 5, 2],
          [20, 0, 0, 3, 0, 17],
        ]);
        break;
      case "Porcentaje de conteo realizado":
        setAlmacenValues([
          [7, 8, 5, 0, 8, 8],
          [8, 6, 8, 2, 6, 7],
          [0, 3, 8, 4, 8, 1],
          [8, 3, 5, 8, 6, 2],
        ]);
        setInfo([
          [97, 100, 62, 0, 100, 100],
          [100, 75, 100, 25, 75, 88],
          [0, 38, 100, 50, 100, 13],
          [100, 37, 63, 100, 75, 25],
        ]);
        break;
      default:
        break;
    }
  };

  const Informacion = ({ visible }) => {
    return visible && selectedRack && (
      <div className="info">En este rack hay {selectedRack}</div>
    );
  };

  return (
    <Router>
      <div className="App">
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
                    updateAlmacenValues={updateAlmacenValues}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <Almacen
                  almacenValues={almacenValues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={locations}
                  info={info}
                  setSelectedRack={setSelectedRack}
                />
              </>
            }
          />
          <Route path="/rack" element={<Rack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
