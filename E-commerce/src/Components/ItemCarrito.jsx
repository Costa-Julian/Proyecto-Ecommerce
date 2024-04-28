export const ItemCarrito = ({ producto }) => {
    return (
            <li>{producto.nombre}, Unidades : {producto.cantidad} <span>${producto.precio}</span></li>
    );
    };