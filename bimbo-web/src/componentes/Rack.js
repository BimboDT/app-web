import "../styles/App.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Rack = () => {
    return (
        <div className='rack'>
            <Link to="/almacen" className='btn-back'>
                <IoIosArrowBack size={34} />
            </Link>
            <div className='rack'>
            <div className= 'background-cols'>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col'></div>
            </div>
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
            </div>
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
            </div>
            <div className='estante'>
            </div>
            <div className = 'cajas'>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
                <div className ='caja'><div className='etiqueta'></div></div>
            </div>
            
            
            
            <div className='estante'>
            </div>
        </div>
        </div>
        
    );
};

export default Rack;