import { ItemCarrito } from '../Components/ItemCarrito';

export const CarritoDeCompras = ({ productosEnCarrito, eliminarProducto }) => {
    // Calcular el total del carrito
    const calcularTotal = () => {
        let total = 0;
        productosEnCarrito.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    };

    // Manejador de evento para eliminar un producto del carrito
    const handleEliminarProducto = (id) => {
        eliminarProducto(id); // Llama a la función eliminarProducto pasando el id del producto
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {productosEnCarrito.map(producto => (
                    <li key={producto.id}>
                        <ItemCarrito producto={producto} />
                        <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <div>Total: ${calcularTotal()}</div>
        </div>
    );
};
