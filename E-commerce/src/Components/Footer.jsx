import React from 'react';


const Footer = () => {
    return (
        <footer>
            <section>    
                <div id="containerFooter">
                    <div className="webFooter">
                        <h3> Online store </h3>
                        <p> Remeras Hombres </p>
                        <p> Remeras Mujeres </p>
                        <p> Pantalones Hombres </p>
                        <p> Pantalones Mujeres </p>
                    </div>
                    <div className="webFooter">
                        <h3> Ayuda </h3>
                        <p> Home </p>
                        <p> Sobre Nosotros </p>
                        <p> Contacto </p>
                    </div>
                    <div className="webFooter">
                        <h3> Marcas </h3>
                        <p> Zara </p>
                        <p> Nike </p>
                        <p> Levis </p>
                        <p> Kosiuko </p>
                    </div>
                    <div className="webFooter">
                        <h3> Direccion </h3>
                        <p> Calle sin nombre </p>
                        <p> 123 </p>
                        <p> Buenos Aires </p>
                        <p> Argentina </p>
                    </div>
                </div>
                <div id="credit">
                    <a href=""> © Proyecto API </a> &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <a href="" target="_blank"> Shop-API </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
