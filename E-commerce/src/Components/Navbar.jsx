import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export const Navbar = ({ products, setProductosFiltrados }) => {
    
    return (
    <div>
        <nav className="header__menu mobile-menu">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><a href="#">Pages</a>
                    <ul className="dropdown">
                        <li><Link to="/CheckOut">CheckOut</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/Lista_Carrito">Carrito</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
                </li>
                <Searchbar products={products} setProductosFiltrados={setProductosFiltrados} />
                
            </ul>
        </nav>
    </div>
    )
    }