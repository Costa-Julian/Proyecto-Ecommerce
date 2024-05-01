import { ItemCarrito } from './ItemCarrito';
import React from 'react';
import { CheckOut } from '../Pages/CheckOut';

export const CarritoDeCompras = ({ productosEnCarrito, eliminarProducto }) => {
    // Calcular el total del carrito
    console.log( productosEnCarrito);
    const calcularTotal = () => {
        let total = 0;
        productosEnCarrito.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    };

    return (
        <>
        
        </>
    );
};



