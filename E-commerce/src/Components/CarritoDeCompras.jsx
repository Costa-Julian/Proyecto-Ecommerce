import { ItemCarrito } from './ItemCarrito';
import React from 'react';
import { CheckOut } from '../pages/CheckOut';

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
        <div className="checkout__order">
            <h4 className="order__title">Your order</h4>
            <div className="checkout__order__products">  Product <span>Total</span></div>
            <ul className="checkout__total__products">
                {productosEnCarrito.map(producto => (
                    <div key={producto.id} className="">
                        {/* <button id='boton' onClick={() => handleEliminarProducto(producto.id)} className="cart__close" >x</button> */}
                        <ItemCarrito producto={producto} />
                    </div>
                ))}
            </ul>
            <ul className="checkout__total__all">
                <li>Total <span>${calcularTotal()}</span></li>
            </ul>
            <button type="submit" className="site-btn">PLACE ORDER</button>
        </div>
        </>
        
        
    );
};



