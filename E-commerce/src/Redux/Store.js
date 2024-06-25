import {configureStore} from '@reduxjs/toolkit'
import { ProductSlice } from './productSlice'

const Store = configureStore({
    reducer: ProductSlice.reducer,
})

export default Store;