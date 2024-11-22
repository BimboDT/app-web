import "../styles/Info.css";
// import gansito from "../img/gansito.png";

const Info = ({ onClose, sku, nombre, categoria, descripcion, normaEstiba, piezasXCaja, imagenUrl }) => {
    return (
        <div className="info-popup">
            <div className="info-content">
                <div className="img-producto">
                    <img src={imagenUrl} alt="producto" />
                </div>
                <div className="info-producto">
                    <div className="titulo-producto">
                        <p><span className="datos-producto">SKU:</span> {sku}</p>
                        <p><span className="datos-producto">Producto:</span> {nombre}</p>
                        <p><span className="datos-producto">Categoría:</span> {categoria}</p>
                        <p><span className="datos-producto">Descripción:</span> {descripcion}</p>
                    </div>
                    <div className="cantidad-producto">
                        <p><span className="cantidad-productos">-Norma Estiba:</span> {normaEstiba}</p>
                        <p><span className="cantidad-productos">-Piezas por caja:</span> {piezasXCaja}</p>
                    </div>
                </div>
                <button onClick={onClose} className="close-btn">Cerrar</button>
            </div>
        </div>
    );
};

export default Info;