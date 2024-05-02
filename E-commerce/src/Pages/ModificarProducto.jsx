import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function buscarProductoPorId(array, idBuscado) {
    if (array.length === 0) return null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == idBuscado) {
            return array[i]; 
        }
    }
    return null; 
}

export const ModificarProducto = ({ productos,actualizarProducto }) => {

    const { id } = useParams();
    const item = buscarProductoPorId(productos,id)
    const [productoModificado, setProductoModificado] = useState(item);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoModificado(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleGuardarCambios = () => {
        actualizarProducto(productoModificado);
    };
    return (
        <div className='container'>
            <h2>Modificar Producto</h2>
            <div className='row'>
                <div class="col-6">
                    <form class="contact__form" onSubmit={(e) => e.preventDefault()}>
                        <div class="checkout__input">
                            <label htmlFor="titulo">Título:</label>
                            <input
                                type="text"
                                id="titulo"
                                name="title"
                                value={productoModificado.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="checkout__input">
                            <label htmlFor="precio">Precio:</label>
                            <input
                                type="number"
                                id="precio"
                                name="price"
                                value={productoModificado.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="checkout__input">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea
                                id="descripcion"
                                name="description"
                                value={productoModificado.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button className='primary-btn' onClick={handleGuardarCambios}>Guardar cambios</button>
                    </form>
                </div>
                <div class="col-6">
                    <img 
                        src={productoModificado.image} 
                        style={{ width: '100%', minHeight: '250px', maxHeight: '100%', objectFit: 'cover' }}  
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
