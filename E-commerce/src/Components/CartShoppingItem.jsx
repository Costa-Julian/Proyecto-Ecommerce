import imagen from '../img/f1.jpg'

export const CartShoppingItem = ({product}) => {
    const productData = {
        name: "Producto 1",
        image: imagen,
        price: 19.65,
        quantity: 2
    };
    return (
        <div className="product-card">
            <img src={productData.image} alt={productData.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{productData.name}</h3>
                <p className="product-price">${productData.price}</p>
                <p className="product-quantity">Cantidad: {productData.quantity}</p>
            </div>
        </div>
    )
}
