import React from 'react'
import { CarritoDeCompras } from '../Components/CarritoDeCompras'

export const CheckOut = ({productosEnCarrito,eliminarProducto}) => {
    return (
    <>
        <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <h6 class="coupon__code"><span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click
                            here</a> to enter your code</h6>
                            <h6 class="checkout__title">Billing Details</h6>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Fist Name<span>*</span></p>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="checkout__input">
                                        <p>Last Name<span>*</span></p>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout__input">
                                <p>Country<span>*</span></p>
                                <input type="text"/>
                            </div>
                            <div class="checkout__input">
                                <p>Address<span>*</span></p>
                                <input type="text" placeholder="Street Address" class="checkout__input__add"/>
                                <input type="text" placeholder="Apartment, suite, unite ect (optinal)"/>
                            </div>
                            <div class="checkout__input">
                                <p>Town/City<span>*</span></p>
                                <input type="text"/>
                            </div>
                            <div class="checkout__input">
                                <p>Country/State<span>*</span></p>
                                <input type="text"/>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <CarritoDeCompras 
                                productosEnCarrito={productosEnCarrito}
                                eliminarProducto={eliminarProducto}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </section>
    </>
    )
}
