import "../styles/Rack.css";
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import Info from "./Info";
import DateTimeFilter from "./Fecha";

const Rack = ({selectedRack}) => {
    const location = useLocation();
    const previousRoute = location.state?.from || "/mapa";

    const [showInfo, setShowInfo] = useState(false);
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleBoxClick = (index) => {
        setSelectedProduct(productos[index]);
        setShowInfo(true);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        const api = process.env.REACT_APP_API_URL;
        const rack = selectedRack.split(" ")[1];

        const informacion = `http://${api}/imagen/obtenDescProd/${rack}`;

        const fetchData = async () => {
          try {
            const response = await fetch(informacion);
            if (!response.ok) {
              throw new Error('Error en información');
            }

            const data = await response.json();
            setProductos(data);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);

    let productoIndex = 0;
    const renderCajas = () => {
        const elementos = [];

        for (let i = 0; i < 3; i++) {
            elementos.push(<div className="estante" key={`estante-${i}`} />);

            const cajas = (
                <div className="cajas" key={`cajas-${i}`}>
                    {Array.from({ length: 6 }).map((_, index) => {
                        if (productoIndex < productos.length) {
                            const currentIndex = productoIndex;
                            productoIndex++;
                            return (
                                <div className="caja" key={`caja-${i}-${index}`} onClick={() => handleBoxClick(currentIndex)}>
                                    <div className="etiqueta" />
                                </div>
                            );
                        } else {
                            return (
                                <div className="caja" key={`caja-${i}-${index}`}>
                                    <div className="etiqueta" />
                                </div>
                            );
                        }
                    })}
                </div>
            );

            elementos.push(cajas);
        }
        return elementos;
    };

    return (
        <div className="contenedor">
            <div style={{margin: "10px"}}>
                <Link to={previousRoute} className='btn-back'>
                    <IoIosArrowBack size={34} />
                </Link>
                <DateTimeFilter/>
            </div>
            <div className={`rack ${showInfo ? 'blur' : ''}`}>
                <div className= 'background-cols'>
                    <div className='col'></div>
                    <div className='col'></div>
                    <div className='col'></div>
                </div>
                {renderCajas()}
                <div className='estante' />
                {showInfo && selectedProduct && (
                    <Info
                        onClose={handleCloseInfo}
                        sku={selectedProduct.SKU}
                        nombre={selectedProduct.Nombre}
                        categoria={selectedProduct.Categoria}
                        descripcion={selectedProduct.Descripcion}
                        normaEstiba={selectedProduct.NormaEstiba}
                        piezasXCaja={selectedProduct.PiezasXCaja}
                        imagenUrl={selectedProduct.ImagenUrl}
                    />
                )}
            </div>
        </div>
    );
};

export default Rack;
