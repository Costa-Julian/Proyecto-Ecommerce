import {configureStore} from '@reduxjs/toolkit'
import { ProductSlice } from './createSlice'

const Store = configureStore({
    reducer: ProductSlice.reducer,
})

export default Store;