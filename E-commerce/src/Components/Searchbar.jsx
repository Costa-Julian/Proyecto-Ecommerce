import React, { useState } from 'react';

const Searchbar = ({ products, setProductosFiltrados }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        const filteredProducts = products.filter(producto =>
            producto.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProductosFiltrados(filteredProducts);
    };

    return (
        <li className="search-bar">
            <input type="text" placeholder="Buscar..." value={searchTerm} onChange={handleChange} />
            <button onClick={handleClick}>Buscar</button>
        </li>
    )
}

export default Searchbar;
