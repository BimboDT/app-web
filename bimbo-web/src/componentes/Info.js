import "../styles/App.css";
import gansito from "../img/gansito.png";

const Info = ({ onClose }) => {
    return (
        <div className="info-popup">
            <div className="info-content">
                <div className="img-producto">
                    <img src={gansito} alt="Gansito" />
                </div>
                <div className="info-producto">
                    <div className="titulo-producto">
                        <p><span className="datos-producto">Producto:</span> Gansito Bimbo</p>
                        <p><span className="datos-producto">Categoría:</span> Pan Dulce</p>
                        <p><span className="datos-producto">Presentación:</span> Empaque Individual de 40 g (12 unidades por caja)</p>
                        <p><span className="datos-producto">Código de artículo:</span> 12345678</p>
                        <p><span className="datos-producto">Descripción de artículo:</span> PAN 40G</p>
                        <p><span className="datos-producto">Fecha de vencimiento:</span> 31/12/2024</p>
                    </div>
                    <div className="cantidad-producto">
                        <p><span className="cantidad-productos">-Cantidad original:</span> 110</p>
                        <p><span className="cantidad-productos">-Cantidad:</span> 110</p>
                        <p><span className="cantidad-productos">-Cantidad ajustada:</span> 0</p>
                        <p><span className="cantidad-productos">-Fecha de modificación:</span> 30/09/2024 04:51</p>
                    </div>
                </div>
                <button onClick={onClose} className="close-btn">Cerrar</button>
            </div>
        </div>
    );
};

export default Info;