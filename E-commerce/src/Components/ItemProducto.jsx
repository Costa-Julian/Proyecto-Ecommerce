import {BtnAgregarCarrito} from './BtnAgregarCarrito'

export const ItemProducto = ({ producto, agregarAlCarrito }) => {
    const handleClick = () => {
        agregarAlCarrito(producto);
    };

    return (
        <li>
        <span>{producto.nombre}</span>
        <span>Precio: ${producto.precio}</span>
        <span>Cantidad: {producto.cantidad}</span>
        <BtnAgregarCarrito producto={producto} onAgregarAlCarrito={agregarAlCarrito} />
        </li>
    );
    };