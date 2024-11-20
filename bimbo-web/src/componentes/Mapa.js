import "../styles/Mapa.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Bubble, Doughnut, Line } from "react-chartjs-2";
import * as ChartJS from 'chart.js';

ChartJS.Chart.register(
  ChartJS.CategoryScale,   // para el eje X basado en categorías
  ChartJS.LinearScale,     // para el eje Y
  ChartJS.BarElement,      // para los gráficos de barras
  ChartJS.Title,           // para los títulos
  ChartJS.Tooltip,         // para las tooltips
  ChartJS.Legend,          // para la leyenda
  ChartJS.ArcElement,      // para gráficos de tipo Doughnut y Pie
  ChartJS.LineElement,     // para gráficos de líneas
  ChartJS.PointElement,    // para los puntos (marcadores) en gráficos de líneas
  ChartJS.Filler,          // para llenar el área bajo los gráficos de líneas
  ChartJS.BarController,   // para controlar los gráficos de barras
  ChartJS.LineController   // para controlar los gráficos de líneas
);

const Mapa = ({ setSelectedLocation }) => {
  const navigate = useNavigate();

  const AlmacenClick = (location) => {
    setSelectedLocation(location);
    navigate("/almacen");
  };

  const ReservaSmallClick = () => {
    setSelectedLocation("Reserva2");
    navigate("/reservaSmall");
  };

  const ReservaBigClick = () => {
    setSelectedLocation("Reserva1");
    navigate("/reservaBig");
  };

  return (
    <div className="container">
      <div className="stats">
        <div className="texto" style={{margin: "20px"}}>
          <h2>Estadísticos</h2>
        </div>
        <div style={{overflow: "auto"}}>
        <div className="area2">
          <div className="grafico">
            <Bar
              data={{
                labels: ["Enero", "Febrero", "Marzo"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Loss",
                    data: [2, 3, 1, 0, 5, 2],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                  },
                ],
              }}/>
          </div>
          <div className="grafico">
            <Doughnut
              data={{
                labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 215, 0, 0.6)'
                    ],
                    borderColor: [
                      'rgba(75, 192, 192, 1)',
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 215, 0, 1)'
                    ],
                    borderWidth: 1,
                  },
                ],
              }}/>
          </div>
        </div>
        <div className="area2">
          <div className="grafico">
            <Line
              data={{
                labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: "rgba(5, 5, 210, 0.2)",
                    borderColor: "rgba(5, 5, 210, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Loss",
                    data: [2, 3, 1, 0, 5, 2],
                    backgroundColor: "rgba(180, 109, 10, 0.5)",
                    borderColor: "rgba(180, 109, 10, 1)",
                    borderWidth: 1,
                  },
                ],
              }}/>
          </div>
          <div className="grafico">
            <Bubble
              data={{
                labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [
                      { x: 10, y: 12, r: 10 },
                      { x: 20, y: 19, r: 12 },
                      { x: 30, y: 3, r: 6 },
                      { x: 40, y: 5, r: 8 },
                      { x: 50, y: 2, r: 7 },
                      { x: 60, y: 3, r: 5 },
                    ],
                    backgroundColor: "rgba(46, 204, 113, 0.2)",
                    borderColor: "rgba(46, 204, 113, 1)",
                    borderWidth: 1,
                  },
                  {
                    label: "Loss",
                    data: [
                      { x: 15, y: 2, r: 6 },
                      { x: 25, y: 3, r: 5 },
                      { x: 35, y: 1, r: 4 },
                      { x: 45, y: 0, r: 3 },
                      { x: 55, y: 5, r: 6 },
                      { x: 65, y: 2, r: 7 },
                    ],
                    backgroundColor: "rgba(26, 188, 156, 0.5)",
                    borderColor: "rgba(26, 188, 156, 1)",
                    borderWidth: 1,
                  },
                ],
              }}/>
          </div>
        </div>
        </div>
      </div>
      <div className="mapa">
        <div className="texto" style={{marginBottom: "20px"}}>
          <h2>Mapa del Almacén</h2>
        </div>
        <div className="area">
          <div className="seccion seccionBig img1" onClick={() => AlmacenClick('Outbound')}> Outbound </div>
          <div className="seccion seccionSmall img1" onClick={() => AlmacenClick('Picking')}> Picking </div>
        </div>
        <div className="area">
          <div className="seccion seccionSmall img2" onClick={() => ReservaBigClick()}> Reserva 1 </div>
          <div className="seccion seccionBig img2" onClick={() => ReservaSmallClick()}> Reserva 2 </div>
        </div>
        <div className="area">
          <div className="seccion seccionBig img3" onClick={() => AlmacenClick('Packing')}> Packing </div>
          <div className="seccion seccionSmall img4" onClick={() => AlmacenClick('Inbound')}> Inbound </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
