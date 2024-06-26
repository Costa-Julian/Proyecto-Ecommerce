import React from 'react'
import { CarritoDeCompras } from '../Components/CarritoDeCompras'

export const CheckOut = ({totalCompra}) => {
    return (
    <>
    <section class="breadcrumb-blog set-bg" >
        <img src="img\breadcrumb-bg.jpg" alt="" />
    </section>
        <section class="checkout spad">
        <div class="container">
            <div class="checkout__form">
                <form action="#">
                    <div class="row">
                        <div class="col-lg-8 col-md-6">
                            <h2 class="coupon__code"> CheckOut</h2>
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
                        <div className="checkout__order">
                            <h4 className="order__title">Your order</h4>
                            <ul className="checkout__total__all">
                                <li>Total <span>${totalCompra}</span></li>
                            </ul>
                            <button type="submit" className="site-btn">PLACE ORDER</button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </section>
    </>
    )
}
