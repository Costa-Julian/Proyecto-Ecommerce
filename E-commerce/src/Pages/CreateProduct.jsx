import React from 'react';

const CreateProduct = () => {
return (
<div className='container'>
    <h2>Crear Producto</h2>
    <div className='row'>
        <div class="col-6">
            <form class="contact__form" onSubmit={(e)=> e.preventDefault()}>
                <div class="checkout__input">
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" id="titulo" name="title" />
                </div>
                <div class="checkout__input">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="price" />
                </div>
                <div class="checkout__input">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" name="description" ></textarea>
                </div>
                <div class="checkout__input">
                    <label htmlFor="precio">Cantidad:</label>
                    <input type="number" id="cantidad" name="cantidad" />
                </div>
                <div className="checkout__input">
                <label htmlFor="imagen">Imagen:</label>
                <input
                    type="file"
                    id="imagen"
                    name="image"
                    accept="image/*"
                />
            </div>
                <button style={{ margin: '10px'}} className='primary-btn'>Crear Producto</button>
            </form>
        </div>
        <div class="col-6">
            <img src="img/product/product-1.jpg"
                style={{ width: '100%', minHeight: '250px', maxHeight: '100%', objectFit: 'cover' }} alt="" />
        </div>
    </div>
</div>
)
}

export default CreateProduct;