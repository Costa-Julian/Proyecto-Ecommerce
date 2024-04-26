import  { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarritoDeCompras } from '../Pages/CarritoDeCompras';
import './LogoCarrito.css';

const calcularCantidadTotal = (productosEnCarrito) => {
    let total = 0;
    productosEnCarrito.forEach(producto => {
        total += producto.cantidad;
    });
    return total;
};

export const LogoCarrito = ({ productosEnCarrito, eliminarProducto }) => {
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    const handleCarritoClick = () => {
        setCarritoAbierto(!carritoAbierto);
    };

    // Obtener la cantidad total de productos en el carrito
    const cantidadTotal = calcularCantidadTotal(productosEnCarrito);

    return (
        <div className="carrito-container">
            <div className="carrito" onClick={handleCarritoClick}>
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>{cantidadTotal}</span>
            </div>
            {carritoAbierto && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCarritoClick}>&times;</span>
                        <CarritoDeCompras
                            productosEnCarrito={productosEnCarrito}
                            eliminarProducto={eliminarProducto}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

