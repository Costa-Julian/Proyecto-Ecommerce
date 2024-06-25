import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getProductById } from '../Services/productService';

const ProductDetail = ({listaProductos,agregarAlCarrito,eliminar,actualizarProducto}) => {
    const { id } = useParams();

    const [product, setProducto] = useState([]);

    useEffect(()=>{
        getProductById(id).then((data) => setProducto(data))
    },[])

    const handleClickAdd = () => {
        agregarAlCarrito(product);
    };
    const handleClickEliminar = () => {
        eliminar(product.id);
    };
    return (
        <div>
            <div className="offcanvas-menu-overlay"></div>
            <section className="shop-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container">
                    <div className="product__details__pic" style={{ flex: '0 0 auto', marginRight: '20px' }}>
                        {product && (
                            <div className="product__details__pic__item">
                                <img src="../img/product/product-1.jpg" alt={product.nombre} style={{ width: 'auto', maxHeight: '400px' }} />
                            </div>
                        )}
                    </div>
                    <div className="product__details__content" style={{ flex: '1 1 auto' }}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text" style={{ fontSize: '14px' }}>
                                    <h4>{product ? product.nombre : ''}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span> - 5 Reviews</span>
                                    </div>
                                    <h3>{product ? `$${product.precio}` : ''}</h3>
                                    <p>{product ? product.descripcion : ''}</p>
                                    <div className="product__details__option">
                                    </div>
                                    <div className="product__details__cart__option">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1" />
                                            </div>
                                        </div>
                                        <p onClick={handleClickAdd} className="primary-btn">add to cart</p>
                                    </div>
                                    <div className="product__details__btns__option">
                                        <button className="primary-btn" onClick={handleClickEliminar}>Eliminar</button>
                                        <Link to=
                                            {{ pathname: '/ModificarProducto/'+id, 
                                                state: {product, actualizarProducto} }} >
                                            <button className="primary-btn">Modificar</button>
                                        </Link>
                                        
                                    </div>
                                    <div className="product__details__last__option">
                                        <h5><span>Guaranteed Safe Checkout</span></h5>
                                        <img src="img/shop-details/details-payment.png" alt="" />
                                        <ul>
                                            <li><span>SKU:</span> {product ? product.id : ''}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ProductDetail;
