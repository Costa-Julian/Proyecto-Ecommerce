import { ItemCarrito } from './ItemCarrito';
import React from 'react';
import { CheckOut } from '../Pages/CheckOut';

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
        <>
        <div class="checkout__order">
            <h4 class="order__title">Your order</h4>
            <div class="checkout__order__products">  Product <span>Total</span></div>
            <ul class="checkout__total__products">
                {productosEnCarrito.map(producto => (
                    <div key={producto.id} className="">
                        {/* <button id='boton' onClick={() => handleEliminarProducto(producto.id)} className="cart__close" >x</button> */}
                        <ItemCarrito producto={producto} />
                    </div>
                ))}
            </ul>
            <ul class="checkout__total__all">
                <li>Total <span>${calcularTotal()}</span></li>
            </ul>
            <button type="submit" class="site-btn">PLACE ORDER</button>
        </div>
        </>
    );
};



