import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Almacen from "./componentes/Almacen";
import Filtro from "./componentes/Filtro";
import Rack from "./componentes/Rack";

function App() {
  const [almacenValues, setAlmacenValues] = useState([
    [6, 4, 6, 8, 1, 1],
    [3, 8, 7, 8, 7, 5],
    [3, 4, 0, 8, 2, 2],
  ]);

  const [selectedOption, setSelectedOption] = useState(
    "Cantidad de producto en racks"
  );

  const updateAlmacenValues = (selection) => {
    switch (selection) {
      case "Cantidad de producto en racks":
        setAlmacenValues([
          [6, 4, 6, 8, 1, 1],
          [3, 8, 7, 8, 7, 5],
          [3, 4, 0, 8, 2, 2],
        ]);
        break;
      case "Cantidad de incidencias":
        setAlmacenValues([
          [2, 3, 1, 0, 5, 2],
          [4, 1, 2, 6, 3, 5],
          [1, 2, 0, 3, 2, 1],
        ]);
        break;
      case "Porcentaje de conteo realizado":
        setAlmacenValues([
          [7, 8, 5, 0, 8, 8],
          [8, 6, 8, 2, 6, 7],
          [0, 3, 8, 4, 8, 1],
        ]);
        break;
      default:
        break;
    }
  };

  const Ubicacion = ({ visible }) => {
    return visible && <div className="ubicacion">Ubicación: ---</div>;
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/almacen"
            element={
              <>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                  <Filtro
                    updateAlmacenValues={updateAlmacenValues}
                    setSelectedOption={setSelectedOption}
                  />
                  <Ubicacion visible={isHovered} />
                </div>
                <Almacen
                  almacenValues={almacenValues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
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
