export const ItemCarrito = ({ producto }) => {
        return (
                <>
                        
                                <td class="product__cart__item">
                                        <div class="product__cart__item__pic">
                                        <img src={producto.image} alt=""/>
                                        </div>
                                        <div class="product__cart__item__text">
                                        <h6>{producto.title}</h6>
                                        </div>
                                </td>
                                <td class="quantity__item">
                                        <div class="quantity">
                                        <div class="pro-qty-2">
                                                <input type="text" value="1"/>
                                        </div>
                                        </div>
                                </td>
                                <td class="cart__price">${producto.price}</td>
                                
                        
                </>
        );
        };