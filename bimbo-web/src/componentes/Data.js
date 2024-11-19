import { useState, useEffect } from "react";

const Data = ({ onDataLoaded, onUpdateValues }) => {
  const [loading, setLoading] = useState(true);
  const [almacenValues, setAlmacenValues] = useState([]);
  const [almacenLocations, setAlmacenLocations] = useState([]);
  const [almacenInfo, setAlmacenInfo] = useState([]);
  const [reservaSvalues, setReservaSvalues] = useState([]);
  const [reservaSlocations, setReservaSlocations] = useState([]);
  const [reservaSinfo, setReservaSinfo] = useState([]);
  const [reservaBvalues, setReservaBvalues] = useState([]);
  const [reservaBlocations, setReservaBlocations] = useState([]);
  const [reservaBinfo, setReservaBinfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const loadedAlmacenValues = [
        [6, 4, 6, 8, 1, 1],
        [3, 8, 7, 8, 7, 5],
        [3, 4, 0, 8, 2, 2],
        [0, 5, 6, 3, 1, 8],
      ];
      const loadedAlmacenLocations = [
        [
          "Pasillo P1",
          "Pasillo Q1",
          "Pasillo R1",
          "Pasillo S1",
          "Pasillo T1",
          "Pasillo U1",
        ],
        [
          "Pasillo P2",
          "Pasillo Q2",
          "Pasillo R2",
          "Pasillo S2",
          "Pasillo T2",
          "Pasillo U2",
        ],
        [
          "Pasillo P3",
          "Pasillo Q3",
          "Pasillo R3",
          "Pasillo S3",
          "Pasillo T3",
          "Pasillo U3",
        ],
        [
          "Pasillo P4",
          "Pasillo Q4",
          "Pasillo R4",
          "Pasillo S4",
          "Pasillo T4",
          "Pasillo U4",
        ],
      ];
      const loadedAlmacenInfo = [
        [6156, 4341, 6827, 8789, 1043, 1925],
        [3152, 8945, 7371, 8283, 7427, 5710],
        [3982, 4315, 220, 8501, 2894, 2120],
        [500, 5798, 6241, 3710, 1926, 8031],
      ];

      const loadedReservaSvalues = [
        [6, 4, 6, 8, 1, 1],
        [3, 8, 7, 8, 7, 5],
      ];
      const loadedReservaSlocations = [
        ["Rack A", "Rack B", "Rack C", "Rack D", "Rack E", "Rack F"],
        ["Rack L", "Rack K", "Rack J", "Rack I", "Rack H", "Rack G"],
      ];
      const loadedReservaSinfo = [
        [6156, 4341, 6827, 8789, 1043, 1925],
        [3152, 8945, 7371, 8283, 7427, 5710],
      ];

      const loadedReservaBvalues = [
        [4, 8, 2],
        [6, 3, 1],
      ];
      const loadedReservaBlocations = [[], ["Rack M", "Rack N", "Rack O"]];
      const loadedReservaBinfo = [
        [4315, 8501, 2894],
        [6241, 3710, 1926],
      ];

      // Actualizamos el estado
      setAlmacenValues(loadedAlmacenValues);
      setAlmacenLocations(loadedAlmacenLocations);
      setAlmacenInfo(loadedAlmacenInfo);
      setReservaSvalues(loadedReservaSvalues);
      setReservaSlocations(loadedReservaSlocations);
      setReservaSinfo(loadedReservaSinfo);
      setReservaBvalues(loadedReservaBvalues);
      setReservaBlocations(loadedReservaBlocations);
      setReservaBinfo(loadedReservaBinfo);

      setLoading(false);
    }, 1000);
  }, []);

  const updateAlmacenValues = (selection) => {
    switch (selection) {
      case "Cantidad de producto en racks":
        setAlmacenValues([
          [6, 4, 6, 8, 1, 1],
          [3, 8, 7, 8, 7, 5],
          [3, 4, 0, 8, 2, 2],
          [0, 5, 6, 3, 1, 8],
        ]);
        setAlmacenInfo([
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
        setAlmacenInfo([
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
        setAlmacenInfo([
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

  const updateReservaSValues = (selection) => {
    switch (selection) {
      case "Cantidad de producto en racks":
        setReservaSvalues([
          [6, 4, 6, 8, 1, 1],
          [3, 8, 7, 8, 7, 5],
        ]);
        setReservaSinfo([
          [6156, 4341, 6827, 8789, 1043, 1925],
          [3152, 8945, 7371, 8283, 7427, 5710],
        ]);
        break;
      case "Cantidad de incidencias":
        setReservaSvalues([
          [2, 3, 1, 0, 5, 2],
          [4, 1, 2, 6, 3, 5],
        ]);
        setReservaSinfo([
          [5, 7, 2, 0, 12, 5],
          [10, 3, 5, 15, 8, 13],
        ]);
        break;
      case "Porcentaje de conteo realizado":
        setReservaSvalues([
          [7, 8, 5, 0, 8, 8],
          [8, 6, 8, 2, 6, 7],
        ]);
        setReservaSinfo([
          [97, 100, 62, 0, 100, 100],
          [100, 75, 100, 25, 75, 88],
        ]);
        break;
      default:
        break;
    }
  };

  const updateReservaBValues = (selection) => {
    switch (selection) {
      case "Cantidad de producto en racks":
        setReservaBvalues([
          [4, 8, 2],
          [6, 3, 1],
        ]);
        setReservaBinfo([
          [4315, 8501, 2894],
          [6241, 3710, 1926],
        ]);
        break;
      case "Cantidad de incidencias":
        setReservaBvalues([
          [1, 2, 0],
          [8, 0, 0],
        ]);
        setReservaBinfo([
          [2, 5, 0],
          [20, 0, 0],
        ]);
        break;
      case "Porcentaje de conteo realizado":
        setReservaBvalues([
          [4, 8, 1],
          [8, 6, 2],
        ]);
        setReservaBinfo([
          [50, 100, 13],
          [100, 75, 25],
        ]);
        break;
      default:
        break;
    }
  };

  // Una vez que los datos se hayan cargado, pasamos las funciones al componente principal
  useEffect(() => {
    if (!loading) {
      onDataLoaded({
        almacenValues,
        almacenLocations,
        almacenInfo,
        reservaSvalues,
        reservaSlocations,
        reservaSinfo,
        reservaBvalues,
        reservaBlocations,
        reservaBinfo,
      });
      onUpdateValues({
        updateAlmacenValues,
        updateReservaSValues,
        updateReservaBValues,
      });
    }
  }, [
    loading,
    almacenValues,
    almacenLocations,
    almacenInfo,
    reservaSvalues,
    reservaSlocations,
    reservaSinfo,
    reservaBvalues,
    reservaBlocations,
    reservaBinfo,
    onDataLoaded,
    onUpdateValues,
  ]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return null;
};

export default Data;
