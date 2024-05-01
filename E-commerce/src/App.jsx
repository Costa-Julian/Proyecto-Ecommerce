import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import VistaProductos from './Pages/VistaProductos.jsx';
import { CheckOut } from './Pages/CheckOut.jsx'
import Carousel from './Components/Carrusel';
import Profile from './Pages/Profile.jsx'
import ProductDetail from './Pages/ProductDetail.jsx';
import axios from 'axios';
import { Toaster, toast } from 'sonner'
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';

const App = () => {

    const [userLogged, setUserLogged] = useState([]);
      // Array de usuarios y contraseñas predefinidos
      const [users, setUsers]= useState([
        { username: 'lucas', password: '123456' },
        { username: 'francisco', password: 'abcdef' },
        { username: 'julian', password: 'qwerty' },
        { username: 'valentin1', password: 'password1' },
        { username: 'valentin2', password: 'password2' }
    ])


    const registerUser = (username, password) => {
        console.log('llego')
        console.log(username)
        console.log(password)
        const newUsers = [...users, { username, password }];
        console.log(newUsers);
        setUsers(newUsers);
    };
    const [carrito, setCarrito] = useState([]);
    const [cantidadProductos, setCantidadProductos] = useState(0);
    const [productosFiltrados, setProductosFiltrados] = useState([]); 
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchProducts();
    }, [products]);



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
            toast.success('Agregaste un producto al carrito')

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
            <Header products={products} setProductosFiltrados={setProductosFiltrados} productosEnCarrito={carrito} eliminarProducto={eliminarProducto} />
            {/* <Carousel/> */}
            <Routes>
                <Route path="/login" element={ <Login users={users} setUserLogged={setUserLogged} /> }></Route>
                <Route path="/signup" element={ <Signup users={users} registerUser={registerUser} /> }></Route>
                <Route path="/home" element={ <Carousel/> }></Route>
                <Route path="/" element={ <Carousel/> }></Route>
                <Route path="/productos" element={<VistaProductos products={productosFiltrados.length > 0 ? productosFiltrados : products} />} />
                <Route path="/carrito" element={<CheckOut productosEnCarrito={carrito} eliminarProducto={eliminarProducto}/>} />
                <Route path="/perfil" element={ <Profile /> }></Route>
                <Route path="/productos/:id" element={ <ProductDetail agregarAlCarrito={agregarAlCarrito}/> }></Route>

            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;