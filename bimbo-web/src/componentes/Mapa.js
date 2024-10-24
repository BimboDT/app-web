import "../styles/Mapa.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Mapa = ({ setSelectedRack }) => {
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setSelectedRack(section);
    navigate("/almacen");
  };

  return (
    <div className="mapa">
      <div>
        <h2>Mapa del Almacén</h2>
      </div>
      <div className="area">
        <div className="seccion" onClick={() => handleSectionClick("Sección 1")}> Sección 1 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 2")}> Sección 2 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 3")}> Sección 3 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 4")}> Sección 4 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 5")}> Sección 5 </div>
      </div>
      <div className="area">
        <div className="seccion" onClick={() => handleSectionClick("Sección 6")}> Sección 6 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 7")}> Sección 7 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 8")}> Sección 8 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 9")}> Sección 9 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 10")}> Sección 10 </div>
      </div>
      <div className="area">
        <div className="seccion" onClick={() => handleSectionClick("Sección 11")}> Sección 11 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 12")}> Sección 12 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 13")}> Sección 13 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 14")}> Sección 14 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 15")}> Sección 15 </div>
      </div>
      <div className="area">
        <div className="seccion" onClick={() => handleSectionClick("Sección 16")}> Sección 16 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 17")}> Sección 17 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 18")}> Sección 18 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 19")}> Sección 19 </div>
        <div className="seccion" onClick={() => handleSectionClick("Sección 20")}> Sección 20 </div>
      </div>
    </div>
  );
};

export default Mapa;
