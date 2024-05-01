import React from 'react'
import { Link } from 'react-router-dom';

export const BtnCheckout = ({totalCompra}) => {
    return (
        <Link to={{ pathname: '/CheckOut', state: { totalCompra } }} >
            <button className="primary-btn">Proceed to checkout</button>
        </Link>
    );
}
