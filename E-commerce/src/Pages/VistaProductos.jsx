import React from 'react';
import { ItemProducto } from '../Components/ItemProducto';
import CategoryList from '../Components/CategoryList';
import { Link } from 'react-router-dom';


const VistaProductos = ({ products }) => {

    if(products.length === 0){
        return(
        // cambiar loader
        <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize:"40px", fontWeight:'400'}}>cargando...</p>
        </div>)
    }

    return (
        <section className="shop spad">

            <div className="container" style={{ padding:0 }}>
                <div className="row" style={{  padding:0,margin:0 }}>
                    
                    <CategoryList/>


                    {/* Product list */}
                    <div className="col-lg-9">
                        <div >
                            
                            <div className="row mx-auto">
                                {products.map(producto => (
                                    <Link to={'/productos/' +producto.id } key={producto.id} className="col-lg-4 col-md-6 col-sm-6" style={{ width: '100%' }}>
                                        <ItemProducto producto={producto}  />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VistaProductos;
