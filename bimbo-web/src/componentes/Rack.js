import "../styles/Rack.css";
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import Info from "./Info";
import DateTimeFilter from "./Fecha";

const Rack = () => {
    const location = useLocation();
    const previousRoute = location.state?.from || "/mapa";

    const [showInfo, setShowInfo] = useState(false);

    const handleBoxClick = () => {
        setShowInfo(true);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
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
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
            </div>
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
            </div>
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
                <div className ='caja' onClick={handleBoxClick}><div className='etiqueta'></div></div>
            </div>
            <div className='estante'>
            </div>
            {showInfo && <Info onClose={handleCloseInfo} />}
            </div>
        </div>
    );
};

export default Rack;
