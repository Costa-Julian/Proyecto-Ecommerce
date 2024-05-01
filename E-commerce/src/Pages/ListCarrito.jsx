import React from 'react'
import { ItemCarrito } from '../Components/ItemCarrito';
import { Link } from 'react-router-dom';
import { CheckOut } from './CheckOut';
import { BtnCheckout } from '../Components/BtnCheckout';

export const ListCarrito = ({ productosEnCarrito, eliminarProducto }) => {

    const handleEliminarProducto = (id) => {
        eliminarProducto(id); 
    };

    const calcularTotal = () => {
        let total = 0;
        productosEnCarrito.forEach(producto => {
            total += producto.price ;
        });
        return total;
    };
    
    return (
        <div>
        <section class="breadcrumb-blog set-bg mb-4 " >
        <img src="img\breadcrumb-bg.jpg" alt="" />
        </section>
        <section class="shopping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-3">
                        <div class="shopping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productosEnCarrito.map(producto => (
                                        <tr key={producto.id} className="">
                                            <ItemCarrito producto={producto} />
                                            <button id='boton' onClick={() => handleEliminarProducto(producto.id)} className="cart__close" >x</button>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="continue__btn">
                                    <a href="#">Continue Shopping</a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="continue__btn update__btn">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-3">
                        <div class="cart__discount">
                            <h6>Discount codes</h6>
                            <form action="#">
                                <input type="text" placeholder="Coupon code"/>
                                <button type="submit">Apply</button>
                            </form>
                        </div>
                        <div class="cart__total">
                            <h6>Cart total</h6>
                            <ul>
                                <li>Subtotal <span>$ {calcularTotal()}</span></li>
                                <li>Total <span>$ {calcularTotal()}</span></li>
                            </ul>
                            <BtnCheckout />
                            {/* <a href="/carrito" class="primary-btn">Proceed to checkout</a>
                            <div className="primary">
                                <Link to="/CheckOut" className="link-to-carrito" onClick={() => console.log('Redirect to checkout')}>
                                    <CheckOut totalCompra={calcularTotal()}/>
                                    Proceed to checkout
                                </Link>
                            </div> */}
                            {/* <div className="primary">
                                <Link to="/CheckOut" className="link-to-carrito">
                                    <CheckOut totalCompra={calcularTotal()}/>
                                </Link>
                                    Proceed to checkout
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
    </section>
        </div>
    )
}
