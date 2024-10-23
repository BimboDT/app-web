import "../styles/App.css";
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Info from "./Info";

const Rack = () => {

    const [showInfo, setShowInfo] = useState(false);

    const handleBoxClick = () => {
        setShowInfo(true);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
    };

    return (
        <div className='rack'>
            <Link to="/almacen" className='btn-back'>
                <IoIosArrowBack size={34} />
            </Link>
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

        </div>

        {showInfo && <Info onClose={handleCloseInfo} />}
        </div>


    );
};

export default Rack;