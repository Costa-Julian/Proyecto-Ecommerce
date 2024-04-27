import React, { useState } from 'react';
import { LogoCarrito } from './LogoCarrito';
import './Header.css';
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
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li className="active"><a href="./shop.html">Shop</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="dropdown">
                                        <li><a href="./about.html">About Us</a></li>
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contacts</a></li>
                            </ul>
                        </nav>
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

