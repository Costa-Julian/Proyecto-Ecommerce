import React from 'react'

export const Navbar = () => {
return (
<div>
    <nav className="header__menu mobile-menu">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li className="active"><a href="./shop.html">Shop</a></li>
            <li><a href="#">Pages</a>
                <ul className="dropdown">
                    <li><a href="./about.html">About Us</a></li>
                    <li><a href="./shop-details.html">Shop Details</a></li>
                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                    <li><a href="./checkout.html">Check Out</a></li>
                    <li><a href="./blog-details.html">Blog Details</a></li>
                </ul>
            </li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./contact.html">Contacts</a></li>
        </ul>
    </nav>
</div>
)
}