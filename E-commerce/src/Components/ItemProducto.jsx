import {BtnAgregarCarrito} from './BtnAgregarCarrito'

export const ItemProducto = ({ producto }) => {

    return (        
            <div className="product__item" style={{minHeight:"screen"}}>
                <div className="product__item__pic set-bg" style={{ maxWidth: '100%', overflow: 'hidden' }} data-setbg="img/product/product-13.jpg">
                    <ul className="">
                        <li>
                            <a href="#">
                                <img 
                                    src={producto.image} 
                                    style={{ width: '100%', minHeight: '300px', maxHeight: '100%', objectFit: 'cover' }}  
                                    alt=""
                                />
                            </a>
                        </li>
                        
                    </ul>
                </div>

                <div className="product__item__text">
                    <h5 className='no-hover'>{producto.nombre}</h5>    
                    {/* <p className="animacion" onClick={handleClick}>+ Add To Cart</p> */}

                    <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h5>${producto.precio}</h5>
                    <div className="product__color__select">
                        <label htmlFor="pc-37">
                            <input type="radio" id="pc-37"/>
                        </label>
                        <label className="active black" htmlFor="pc-38">
                            <input type="radio" id="pc-38"/>
                        </label>
                        <label className="grey" htmlFor="pc-39">
                            <input type="radio" id="pc-39"/>
                        </label>
                    </div>
                </div>
            </div>

    );
    };