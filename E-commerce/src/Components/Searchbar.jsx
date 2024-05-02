import React, { useState } from 'react';

const Searchbar = ({ products, setProductosFiltrados }) => { 
    const [busqueda, setBusqueda] = useState('');

    const actualizarEstado = (event) => {
        setBusqueda(event.target.value);
    };

    const filtrarBusqueda = () => {
        const filteredProducts = products.filter(producto =>
            producto.title.toLowerCase().includes(busqueda.toLowerCase())
        );
        setProductosFiltrados(filteredProducts);
    };

    return (
        <li className="search-bar">
            <input type="text" placeholder="Buscar..." value={busqueda} onChange={actualizarEstado} />
            <button onClick={filtrarBusqueda}>Buscar</button>
        </li>
    )
}

export default Searchbar;
