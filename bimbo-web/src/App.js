import "./styles/App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Almacen from "./componentes/Almacen";
import ReservaSmall from "./componentes/ReservaSmall";
import ReservaBig from "./componentes/ReservaBig";
import Filtro from "./componentes/Filtro";
import Rack from "./componentes/Rack";
import Rack2 from "./componentes/Rack2";
import Mapa from "./componentes/Mapa";

function App() {
  const [alm1, setAlm1] = useState(null);
  const [alm2, setAlm2] = useState(null);
  const [alm3, setAlm3] = useState(null);
  const [small1, setSmall1] = useState(null);
  const [small2, setSmall2] = useState(null);
  const [small3, setSmall3] = useState(null);
  const [big1, setBig1] = useState(null);
  const [big2, setBig2] = useState(null);
  const [big3, setBig3] = useState(null);

  const AlmacenDataFetch = (fetchedData1, fetchedData2, fetchedData3) => {
    setAlm1(fetchedData1);
    setAlm2(fetchedData2);
    setAlm3(fetchedData3);
  };

  const SmallDataFetch = (fetchedData1, fetchedData2, fetchedData3) => {
    setSmall1(fetchedData1);
    setSmall2(fetchedData2);
    setSmall3(fetchedData3);
  };

  const BigDataFetch = (fetchedData1, fetchedData2, fetchedData3) => {
    setBig1(fetchedData1);
    setBig2(fetchedData2);
    setBig3(fetchedData3);
  };

  const [selectedOption, setSelectedOption] = useState("Cantidad de producto en racks");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRackInfo, setSelectedRackInfo] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [rack, setRack] = useState(null);

  const [almacenValues, setAlmacenValues] = useState([]);
  const [almacenInfo, setAlmacenInfo] = useState([]);
  const [reservaSvalues, setReservaSvalues] = useState([]);
  const [reservaSinfo, setReservaSinfo] = useState([]);
  const [reservaBvalues, setReservaBvalues] = useState([]);
  const [reservaBinfo, setReservaBinfo] = useState([]);

  const [almacenLocations, ] = useState([
    ["Pasillo P1", "Pasillo Q1", "Pasillo R1", "Pasillo S1", "Pasillo T1", "Pasillo U1"],
    ["Pasillo P2", "Pasillo Q2", "Pasillo R2", "Pasillo S2", "Pasillo T2", "Pasillo U2"],
    ["Pasillo P3", "Pasillo Q3", "Pasillo R3", "Pasillo S3", "Pasillo T3", "Pasillo U3"],
    ["Pasillo P4", "Pasillo Q4", "Pasillo R4", "Pasillo S4", "Pasillo T4", "Pasillo U4"],
  ]);

  const [reservaSlocations, ] = useState([
    ["Rack A", "Rack B", "Rack C", "Rack D", "Rack E", "Rack F"],
    ["Rack G", "Rack H", "Rack I", "Rack J", "Rack K", "Rack L"],
  ]);

  const [reservaBlocations, ] = useState([["Rack M", "Rack N", "Rack O"]]);

  useEffect(() => {
    if (alm1) {
      setAlmacenValues(alm1.values);
      setAlmacenInfo(alm1.info);
    }
    if (small1) {
      setReservaSvalues(small1.values);
      setReservaSinfo(small1.info);
    }
    if (big1) {
      setReservaBvalues(big1.values);
      setReservaBinfo(big1.info);
    }
  }, [alm1, small1, big1]);

  const updateAlmacenValues = (selection) => {
    if (!alm1 || !alm2 || !alm3) return;

    switch (selection) {
      case "Cantidad de producto en racks":
        setAlmacenValues(alm1.values);
        setAlmacenInfo(alm1.info);
        break;
      case "Cantidad de incidencias":
        setAlmacenValues(alm2.values);
        setAlmacenInfo(alm2.info);
        break;
      case "Porcentaje de conteo realizado":
        setAlmacenValues(alm3.values);
        setAlmacenInfo(alm3.info);
        break;
      default:
        break;
    }
  };

  const updateReservaSValues = (selection) => {
    if (!small1 || !small2 || !small3) return;

    switch (selection) {
      case "Cantidad de producto en racks":
        setReservaSvalues(small1.values);
        setReservaSinfo(small1.info);
        break;
      case "Cantidad de incidencias":
        setReservaSvalues(small2.values);
        setReservaSinfo(small2.info);
        break;
      case "Porcentaje de conteo realizado":
        setReservaSvalues(small3.values);
        setReservaSinfo(small3.info);
        break;
      default:
        break;
    }
  };

  const updateReservaBValues = (selection) => {
    if (!big1 || !big2 || !big3) return;

    switch (selection) {
      case "Cantidad de producto en racks":
        setReservaBvalues(big1.values);
        setReservaBinfo(big1.info);
        break;
      case "Cantidad de incidencias":
        setReservaBvalues(big2.values);
        setReservaBinfo(big2.info);
        break;
      case "Porcentaje de conteo realizado":
        setReservaBvalues(big3.values);
        setReservaBinfo(big3.info);
        break;
      default:
        break;
    }
  };

  const Informacion = ({ visible }) => {
    return visible && (
      <div className="info">En este rack hay {selectedRackInfo}</div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/mapa" />} />
          <Route
            path="/mapa"
            element={<Mapa setSelectedLocation={setSelectedLocation}/>}
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
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <Almacen
                  almacenValues={almacenValues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={almacenLocations}
                  info={almacenInfo}
                  setSelectedRack={setSelectedRackInfo}
                  selectedLocation={selectedLocation}
                  onFetchData={AlmacenDataFetch}
                  setRack={setRack}
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
                    updateAlmacenValues={updateReservaSValues}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <ReservaSmall
                  almacenValues={reservaSvalues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={reservaSlocations}
                  info={reservaSinfo}
                  setSelectedRack={setSelectedRackInfo}
                  selectedLocation={selectedLocation}
                  onFetchData={SmallDataFetch}
                  setRack={setRack}
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
                    updateAlmacenValues={updateReservaBValues}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                  <Informacion visible={isHovered} />
                </div>
                <ReservaBig
                  almacenValues={reservaBvalues}
                  selectedOption={selectedOption}
                  setIsHovered={setIsHovered}
                  locations={reservaBlocations}
                  info={reservaBinfo}
                  setSelectedRack={setSelectedRackInfo}
                  selectedLocation={selectedLocation}
                  onFetchData={BigDataFetch}
                  setRack={setRack}
                />
              </>
            }
          />
          <Route path="/rack" element={<Rack selectedRack={rack}/>} />
          <Route path="/rack2" element={<Rack2 selectedRack={rack}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
