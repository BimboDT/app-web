import "../styles/Stats.css";

const Porcentaje = ({value, setIsHovered, origin}) => {
  const bars = [];
  const squareClass = origin === "Small" ? "cuadradoSmall" : origin === "Big" ? "cuadradoBig" : "cuadrado";
  const circleClass = origin === "Small" ? "circuloSmall" : origin === "Big" ? "circuloBig" : "circulo";
  const barClassPrefix = origin === "Small" ? "Small" : origin === "Big" ? "Big" : "";

  if (value >= 7) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"V"} className={`barra-verde${barClassPrefix}`}/>);
    }
  } else if (value >= 4) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"A"} className={`barra-amarilla${barClassPrefix}`}/>);
    }
  } else {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"R"} className={`barra-roja${barClassPrefix}`}/>);
    }
  }

  if (value < 8) {
    for (let i = 0; i < 8-value; i++) {
      bars.push(<div key={i+"G"} className={`barra-gris${barClassPrefix}`}/>);
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
