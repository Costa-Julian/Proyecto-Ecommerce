import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <section>
                <div id="container">
                    <div id="shopName"><a href="/"> <b>SHOP - </b>API </a></div>
                    <div id="collection">
                    </div>
                    <div id="search">
                        <FontAwesomeIcon icon={faSearch} className="search" />
                        <input type="text" id="input" name="searchBox" placeholder="Buscar productos..." />
                    </div>
                    <div id="user">
                        <a href="/cart"> 
                            <FontAwesomeIcon icon={faShoppingCart} className="addedToCart" />
                            <div id="badge"> 0 </div>
                        </a>
                        <a href="#"> 
                            <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
                        </a>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
