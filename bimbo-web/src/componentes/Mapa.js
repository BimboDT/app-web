import "../styles/Mapa.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Mapa = () => {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate("/almacen");
  };

  return (
    <div className="container">
      <div className="ladoIzquierdo">
        Sección en construcción...
      </div>
      <div className="mapa">
        <div className="texto">
          <h2>Mapa del Almacén</h2>
        </div>
        <div className="area">
          <div className="seccion seccion1" onClick={() => handleSectionClick()}> Picking 1 </div>
          <div className="seccion seccion1" onClick={() => handleSectionClick()}> Picking 2 </div>
          <div className="seccion seccion1" onClick={() => handleSectionClick()}> Picking 3 </div>
        </div>
        <div className="area">
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 1 </div>
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 2 </div>
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 3 </div>
        </div>
        <div className="area">
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 4 </div>
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 5 </div>
          <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 6 </div>
        </div>
        <div className="area">
          <div className="seccion seccion3" onClick={() => handleSectionClick()}> Packing 1 </div>
          <div className="seccion seccion4" onClick={() => handleSectionClick()}> Carga y descarga 1 </div>
          <div className="seccion seccion4" onClick={() => handleSectionClick()}> Carga y descarga 2 </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
