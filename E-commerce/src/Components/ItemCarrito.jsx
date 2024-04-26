export const ItemCarrito = ({ producto }) => {
    return (
        <div>
            <p>{producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    );
    };