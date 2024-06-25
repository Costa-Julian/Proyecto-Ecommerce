import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Services/productService';
import { useNavigate } from 'react-router-dom';

export const ModificarProducto = () => {

    const { id } = useParams();
    const item = getProductById(id)
    const [productoModificado, setProductoModificado] = useState(item);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categoriaNombre, setCategoriaNombre] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id).then(producto => {
            setNombre(producto.nombre);
            setDescripcion(producto.descripcion);
            setPrecio(producto.precio);
            setStock(producto.stock);
            setCategoriaId(producto.categoria.id);
            setCategoriaNombre(producto.categoria.nombre);
        });
    }, [id]);

    const handleClick = () => {
        const categoria = {
            id: parseInt(categoriaId),
            nombre: categoriaNombre
        };
        updateProduct(id, nombre, descripcion, precio, stock, categoria).then(() => {
            navigate("/productos");
        });
    }

    return (
        <div className='container'>
            <h2>Modificar Producto</h2>
            <div className='row'>
                <div class="col-6">
                <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label className="form-label">Nombre: </label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Descripción: </label>
                            <input
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="form-control"
                                type="text"
                                id="descripcion"
                                name="descripcion"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Precio: </label>
                            <input
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                className="form-control"
                                type="number"
                                id="precio"
                                name="precio"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Stock: </label>
                            <input
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                className="form-control"
                                type="number"
                                id="stock"
                                name="stock"
                            />
                        </div>
                         <div className="form-group">
                            <label className="form-label">ID de Categoría: </label>
                            <input
                                value={categoriaId}
                                onChange={(e) => setCategoriaId(e.target.value)}
                                className="form-control"
                                type="number"
                                id="categoriaId"
                                name="categoriaId"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Nombre de Categoría: </label>
                            <input
                                value={categoriaNombre}
                                onChange={(e) => setCategoriaNombre(e.target.value)}
                                className="form-control"
                                type="text"
                                id="categoriaNombre"
                                name="categoriaNombre"
                            />
                        </div>
                        <button className='btn btn-primary' role="button" onClick={handleClick}>Actualizar producto</button>
                    </form>
                </div>
                <div class="col-6">
                    <img 
                        src="../public/vite.svg"
                        style={{ width: '100%', minHeight: '250px', maxHeight: '100%', objectFit: 'cover' }}  
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
