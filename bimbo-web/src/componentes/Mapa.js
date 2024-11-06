import "../styles/Mapa.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Mapa = () => {
  const navigate = useNavigate();

  const handleSectionClick = () => {
    navigate("/almacen");
  };

  return (
    <div className="mapa">
      <div className="texto">
        <h2>Mapa del Almacén</h2>
      </div>
      <div className="area">
        <div className="seccion seccion1" onClick={() => handleSectionClick()}> Inbound 1 </div>
        <div className="seccion seccion1" onClick={() => handleSectionClick()}> Inbound 2 </div>
        <div className="seccion seccion1" onClick={() => handleSectionClick()}> Inbound 3 </div>
        <div className="seccion seccion6" onClick={() => handleSectionClick()}> Outbound 1 </div>
        <div className="seccion seccion4" onClick={() => handleSectionClick()}> Control de calidad 1 </div>
        <div className="seccion seccion4" onClick={() => handleSectionClick()}> Control de calidad 2 </div>
      </div>
      <div className="area">
        <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 1 </div>
        <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 2 </div>
        <div className="seccion seccion2" onClick={() => handleSectionClick()}> Almacenamiento 3 </div>
        <div className="seccion seccion6" onClick={() => handleSectionClick()}> Outbound 2 </div>
        <div className="seccion seccion0" onClick={() => handleSectionClick()}> Packing 1 </div>
        <div className="seccion seccion0" onClick={() => handleSectionClick()}> Packing 2 </div>
      </div>
      <div className="area">
        <div className="seccion seccion8" onClick={() => handleSectionClick()}> Picking 1 </div>
        <div className="seccion seccion8" onClick={() => handleSectionClick()}> Picking 2 </div>
        <div className="seccion seccion8" onClick={() => handleSectionClick()}> Picking 3 </div>
        <div className="seccion seccion6" onClick={() => handleSectionClick()}> Outbound 3 </div>
        <div className="seccion seccion3" onClick={() => handleSectionClick()}> Devoluciones 1 </div>
        <div className="seccion seccion7" onClick={() => handleSectionClick()}> Cross-docking 1 </div>
      </div>
      <div className="area">
        <div className="seccion seccion9" onClick={() => handleSectionClick()}> Área de productos dañados 1 </div>
        <div className="seccion seccion9" onClick={() => handleSectionClick()}> Área de productos dañados 2 </div>
        <div className="seccion seccion5" onClick={() => handleSectionClick()}> Carga y descarga 1 </div>
        <div className="seccion seccion5" onClick={() => handleSectionClick()}> Carga y descarga 2 </div>
        <div className="seccion seccion3" onClick={() => handleSectionClick()}> Devoluciones 2 </div>
        <div className="seccion seccion7" onClick={() => handleSectionClick()}> Cross-docking 2 </div>
      </div>
    </div>
  );
};

export default Mapa;
