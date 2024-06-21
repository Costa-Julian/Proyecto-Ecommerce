import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from './CreateSlice'

const Store = configureStore({
    reducer: todoSlice.reducer,
})

export default Store;