import "../styles/Mapa.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar, Doughnut, Line } from "react-chartjs-2";
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

  const [infoG1, setInfoG1] = useState({labels: [], data: []});
  const [infoG2, setInfoG2] = useState({productStored:0, capacity:0});
  const [infoG3, setInfoG3] = useState({labels: [], data: []});
  const [infoG4, setInfoG4] = useState({labels: [], data: []});

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();

    const api = process.env.REACT_APP_API_URL;

    const graph1 = `http://${api}/conteo/top10Productos`;
    const graph2 = `http://${api}/conteo/porcentajeAlmacen`;
    const graph3 = `http://${api}/conteo/incidenciasPorMes/${year}`;
    const graph4 = `http://${api}/conteo/productosMasDiscrepancia`;

    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          fetch(graph1),
          fetch(graph2),
          fetch(graph3),
          fetch(graph4)
        ]);

        if (!response1.ok) {
          throw new Error('Error en graph1');
        }
        if (!response2.ok) {
          throw new Error('Error en graph2');
        }
        if (!response3.ok) {
          throw new Error('Error en graph3');
        }
        if (!response4.ok) {
          throw new Error('Error en graph4');
        }

        const dataG1 = await response1.json();
        const dataG2 = await response2.json();
        const dataG3 = await response3.json();
        const dataG4 = await response4.json();

        const labelsG1 = dataG1.map((item) => item.nombreProducto);
        const quantity = dataG1.map((item) => item.totalCajasFisico);
        setInfoG1({ labels: labelsG1, data: quantity });

        const stored = dataG2.ocupacionActual;
        const capacity = dataG2.capacidadTotal;
        setInfoG2({ productStored: stored, capacity: capacity - stored });

        const meses = Object.keys(dataG3);
        const valores = Object.values(dataG3);
        setInfoG3({ labels: meses, data: valores });

        const labelsG4 = dataG4.map((item) => item.nombreProducto);
        const cant = dataG4.map((item) => item.totalDiscrepancia);
        setInfoG4({ labels: labelsG4, data: cant });

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
                labels: infoG1.labels,
                datasets: [
                  {
                    label: "Cantidad de producto",
                    data: infoG1.data,
                    backgroundColor: "rgba(255, 165, 0, 0.2)",
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 1,
                  }
                ],
              }}
              options={{
                indexAxis: 'y',
                plugins: {
                  title: {
                    display: true,
                    text: 'Top 10 Productos con mayor cantidad en almacen'
                  },
                  legend: {
                    display: false,
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      display: true,
                    }
                  }
                },
                aspectRatio: 1,
              }}
            />
          </div>
          <div className="grafico">
            <Doughnut
              data={{
                labels: ["Espacio libre en almacen ", "Espacio ocupado en almacen"],
                datasets: [
                  {
                    data: [infoG2.capacity, infoG2.productStored],
                    backgroundColor: [
                      'rgba(26, 188, 192, 0.55)',
                      'rgba(255, 99, 132, 0.6)',
                    ],
                    borderColor: [
                      'rgba(26, 188, 192, 1)',
                      'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options = {{
                plugins: {
                  title: {
                    display: true,
                    text: 'Porcentaje de almacen ocupado'
                  },
                  legend: {
                    display: true,
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="area2">
          <div className="grafico">
          <Line
              data={{
                labels: infoG3.labels,
                datasets: [
                  {
                    label: "Incidencias",
                    data: infoG3.data,
                    backgroundColor: "rgba(200, 162, 255, 0.6)",
                    borderColor: "rgba(128, 0, 128, 1)",
                    borderWidth: 1,
                  }
                ],
              }}
              options = {{
                plugins: {
                  title: {
                    display: true,
                    text: 'Número de incidencias en el año'
                  },
                  legend: {
                    display: false,
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      display: false,
                    }
                  }
                },
                aspectRatio: 1,
              }}
            />
          </div>
          <div className="grafico">
            <Bar
              data={{
                labels: infoG4.labels,
                datasets: [
                  {
                    label: "Cantidad de producto",
                    data: infoG4.data,
                    backgroundColor: "rgba(100, 255, 0, 0.6)",
                    borderColor: 'rgba(50, 205, 50, 1)',
                    borderWidth: 1,
                  }
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: 'Top 10 Productos con más incidencias en almacen'
                  },
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    ticks: {
                      display: false,
                    }
                  }
                },
                aspectRatio: 1,
              }}
            />
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
