import React from 'react';
import { ItemProducto } from '../Components/ItemProducto';
import CategoryList from '../Components/CategoryList';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProductos } from '../Services/productService';

const VistaProductos = ({ eliminar }) => {
    /* Selector que recibe funcion callback que selecciona a que propiedad del estado global mi componente se quiere suscribir */
    // const products = useSelector ((state) => state.products) 
    /* Se dispara un evento con el payload del input */
    // const dispatch = useDispatch();

    const [productos, setProducto] = useState([]);
    useEffect(()=>{
        getAllProductos().then((data) => setProducto(data))
    },[])

    if(productos?.length === 0){
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
                    <div className="col-lg-9">
                        <div >
                            
                            <div className="row mx-auto">
                                {productos?.map(producto => (
                                    <Link  to={{
                                        pathname: `/productos/${producto.id}`,
                                        state: { producto:producto, eliminar: eliminar }
                                    }} 
                                    key={producto.id} className="col-lg-4 col-md-6 col-sm-6" style={{ width: '100%' }}>
                                        <ItemProducto producto={producto} eliminar={eliminar}  />
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
