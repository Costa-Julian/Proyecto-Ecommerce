// Aca se incluyen el action y el reducer, a pesar de que no se comuniquen entre ellos en ningun momento. 
// No se comunican, su intermediario es el store
// Son vecinos peleados, se crean juntos pero no se comunican

import { createSlice } from '@reduxjs/toolkit'
import { getAllProductos } from '../Services/productService';

const initialState = {
    products: getAllProductos(), /*Este va a ser mi estado global, ya no se guarda en estados locales*/ 
};

export const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
         
        }
    }
})


// export const { addProduct } = ProductSlice.actions /* exporto el reducer, para usarla en el Store */