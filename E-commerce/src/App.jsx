import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import VistaProductos from './Pages/VistaProductos';
import { CheckOut } from './Pages/CheckOut';
import Carousel from './Components/Carrusel'
import Profile from './Pages/Profile'

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
            {/* <Carousel/> */}
            <Routes>
                <Route path="/home" element={ <Carousel/> }></Route>
                <Route path="/productos" element={ <VistaProductos productos={productos} agregarAlCarrito={agregarAlCarrito}/> }></Route>
                <Route path="/carrito" element={<CheckOut productosEnCarrito={carrito} eliminarProducto={eliminarProducto}/>} />
                <Route path="/" element={<VistaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />} />
                <Route path="/perfil" element={ <Profile /> }></Route>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;

