import React, { useState } from 'react';
import { LogoCarrito } from './LogoCarrito';
import './Header.css';
import {Navbar} from './Navbar'
import { Link } from 'react-router-dom';


const Header = ({ products, setProductosFiltrados, productosEnCarrito, eliminarProducto }) => {
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    const toggleCarrito = () => {
        setCarritoAbierto(!carritoAbierto);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="header__logo">
                            <Link to="/home"><img src="img/logo.png" alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <Navbar products={products} setProductosFiltrados={setProductosFiltrados} />
                    </div>                    
                    <div className="col-lg-2 col-md-2">
                        <div className="header__nav__option" onClick={toggleCarrito}>
                        <Link to="/carrito" className="link-to-carrito">
                                <LogoCarrito
                                    productosEnCarrito={productosEnCarrito}
                                    eliminarProducto={eliminarProducto}
                                />
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
          
        </header>
    );
};

export default Header;

