import { ItemCarrito } from '../Components/ItemCarrito';
import React from 'react';
import { CheckOut } from './CheckOut';

export const CarritoDeCompras = ({ productosEnCarrito, eliminarProducto }) => {
    // Calcular el total del carrito
    const calcularTotal = () => {
        let total = 0;
        productosEnCarrito.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    };

    
    const handleEliminarProducto = (id) => {
        eliminarProducto(id); 
    };

    return (
        <CheckOut/>
        // <div className="">
        //     <div className="">
        //         <h2 className="">Carrito de Compras</h2>
        //         <ul className="">
        //             {productosEnCarrito.map(producto => (
        //                 <li key={producto.id} className="">
        //                     <ItemCarrito producto={producto} />
        //                     <button onClick={() => handleEliminarProducto(producto.id)} className="btn btn-danger">Eliminar</button>
        //                 </li>
        //             ))}
        //         </ul>
        //         <div className="">Total: ${calcularTotal()}</div>
        //     </div>
        // </div>
    );
};



