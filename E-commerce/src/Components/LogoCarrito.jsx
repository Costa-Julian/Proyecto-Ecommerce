import  { useState } from 'react';
import { CarritoDeCompras } from './CarritoDeCompras';
import { MDBIcon } from 'mdb-react-ui-kit';

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

    const cantidadTotal = calcularCantidadTotal(productosEnCarrito);

    return (
        <div className="carrito-container">
            <div className="link-to-carrito" onClick={handleCarritoClick}>
                <img src="img/icon/cart.png" alt=""/> <span>{cantidadTotal}</span><div/>
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

