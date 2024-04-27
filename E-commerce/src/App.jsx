import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import VistaProductos from './Pages/VistaProductos';
import { CarritoDeCompras } from './Pages/CarritoDeCompras';

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10, cantidad: 1 },
    { id: 2, nombre: 'Producto 2', precio: 15, cantidad: 1 },
    { id: 3, nombre: 'Producto 3', precio: 20, cantidad: 1 }
];

const App = () => {
    const [carrito, setCarrito] = useState([]);
    const [cantidadProductos, setCantidadProductos] = useState(0);

    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            const nuevoCarrito = carrito.map(item => {
                if (item.id === producto.id) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
        setCantidadProductos(cantidadProductos + 1);
    };

    const eliminarProducto = (id) => {
        const nuevosProductos = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevosProductos);
        setCantidadProductos(cantidadProductos - 1);
    };

    return (
        <Router>
            <Header productosEnCarrito={carrito} eliminarProducto={eliminarProducto} />
            <Routes>
                <Route path="/" element={<VistaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/carrito" element={<CarritoDeCompras productosEnCarrito={carrito} eliminarProducto={eliminarProducto} />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;

