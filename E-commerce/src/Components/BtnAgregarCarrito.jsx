import React from 'react'

export const BtnAgregarCarrito = ({ producto, onAgregarAlCarrito }) => {
    const handleClick = () => {
        onAgregarAlCarrito(producto);
        };
    
        return (
        <button onClick={handleClick}>Agregar al Carrito</button>
        );
    };
