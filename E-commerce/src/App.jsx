
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Profile from './Pages/Profile'
import  { useState } from 'react';
import {LogoCarrito} from './Components/LogoCarrito'
import VistaProductos from './Pages/VistaProductos';

const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10, cantidad: 1 },
    { id: 2, nombre: 'Producto 2', precio: 15, cantidad: 1 },
    { id: 3, nombre: 'Producto 3', precio: 20, cantidad: 1 }
];


function App() {
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
        <>
        <Header/>
            <LogoCarrito
                productosEnCarrito={carrito}
                eliminarProducto={eliminarProducto}
            />
            <VistaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
            <Footer/>
        </>
    );
};

export default App
