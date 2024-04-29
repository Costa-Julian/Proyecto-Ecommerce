import React from 'react';
import {ItemProducto} from '../Components/ItemProducto'

const VistaProductos = ({ productos, agregarAlCarrito }) => {
    return (
    <div>
        <h2>Lista de Productos</h2>
        <ul>
        {productos.map(producto => (
            <ItemProducto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
        </ul>
    </div>
    );
};

export default VistaProductos;