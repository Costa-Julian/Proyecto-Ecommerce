// Aca se incluyen el action y el reducer, a pesar de que no se comuniquen entre ellos en ningun momento. 
// No se comunican, su intermediario es el store
// Son vecinos peleados, se crean juntos pero no se comunican

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [], /*Este va a ser mi estado global, ya no se guarda en estados locales*/ 
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(state);
            console.log(action);
        }
    }
})


export const {addTodo} = todoSlice.actions /* exporto el reducer, para usarla en el Store */