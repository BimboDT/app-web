import "../styles/App.css";

const Porcentaje = ({value}) => {
  const bars = [];

  if (value >= 7) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"V"} className="barra-verde"/>);
    }
  } else if (value >= 4) {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"A"} className="barra-amarilla"/>);
    }
  } else {
    for (let i = 0; i < value; i++) {
      bars.push(<div key={i+"R"} className="barra-roja"/>);
    }
  }

  if (value < 8) {
    for (let i = 0; i < 8-value; i++) {
      bars.push(<div key={i+"G"} className="barra-gris"/>);
    }
  }

  return (
    <div className="cuadrado">
      <div className="circulo">
        {bars}
      </div>
    </div>
  );
};

export default Porcentaje;
