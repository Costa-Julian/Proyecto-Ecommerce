import React from 'react';


const Footer = () => {
    return (
        <footer className='footer'>
            <section className='container'>    
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3">
                    <div class="footer__logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""/></a>
                        </div>
                        <p> Remeras Hombres </p>
                        <p> Remeras Mujeres </p>
                        <p> Pantalones Hombres </p>
                        <p> Pantalones Mujeres </p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3">
                        <h3> Ayuda </h3>
                        <p> Home </p>
                        <p> Sobre Nosotros </p>
                        <p> Contacto </p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3">
                        <h3> Marcas </h3>
                        <p> Zara </p>
                        <p> Nike </p>
                        <p> Levis </p>
                        <p> Kosiuko </p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3">
                        <h3> Direccion </h3>
                        <p> Calle sin nombre </p>
                        <p> 123 </p>
                        <p> Buenos Aires </p>
                        <p> Argentina </p>
                    </div>
                </div>
                <div class="footer__copyright__text">
                    <p > © Proyecto API </p>
                    <p > Shop-API </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
