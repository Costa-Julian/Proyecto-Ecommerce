import React, { useState } from 'react';
import { LogoCarrito } from './LogoCarrito';
import './Header.css';
import {Navbar} from './Navbar'
import { Link } from 'react-router-dom';

const Header = ({ productosEnCarrito, eliminarProducto }) => {
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    const toggleCarrito = () => {
        setCarritoAbierto(!carritoAbierto);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                           <Navbar />
                    </div>
                    <div className="col-lg-3 col-md-3">
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

