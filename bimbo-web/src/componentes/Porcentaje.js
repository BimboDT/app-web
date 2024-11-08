import "../styles/Stats.css";

const Porcentaje = ({value, setIsHovered, origin}) => {
  const bars = [];
  const squareClass = origin === "Small" ? "cuadradoSmall" : "cuadrado";
  const circleClass = origin === "Small" ? "circuloSmall" : "circulo";
  const rotateBars = origin === "Small";

  if (value >= 7) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"V"} className={`barra-verde ${rotateBars ? "barra-verdeSmall" : ""}`}/>);
    }
  } else if (value >= 4) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"A"} className={`barra-amarilla ${rotateBars ? "barra-amarillaSmall" : ""}`}/>);
    }
  } else {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"R"} className={`barra-roja ${rotateBars ? "barra-rojaSmall" : ""}`}/>);
    }
  }

  if (value < 8) {
    for (let i = 0; i < 8-value; i++) {
      bars.push(<div key={i+"G"} className={`barra-gris ${rotateBars ? "barra-grisSmall" : ""}`}/>);
    }
  }

  return (
    <div className={squareClass} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={circleClass}>
        {bars}
      </div>
    </div>
  );
};

export default Porcentaje;
