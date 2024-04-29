import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export const Navbar = ({ productos, setProductosFiltrados }) => {
    
    return (
    <div>
        <nav className="header__menu mobile-menu">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><a href="#">Pages</a>
                    <ul className="dropdown">
                        <li><Link to="/carrito">Carrito</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                    </ul>
                </li>
                <Searchbar productos={productos} setProductosFiltrados={setProductosFiltrados} />
            </ul>
        </nav>
    </div>
    )
    }