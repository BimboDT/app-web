import "../styles/App.css";
import { IoIosArrowBack } from "react-icons/io";

const Rack = () => {
    return (
        <div className='rack'>
            <button className='btn-back'><IoIosArrowBack size={34} /></button>
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