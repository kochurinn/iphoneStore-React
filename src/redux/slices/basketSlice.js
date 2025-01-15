import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCost: 0,
    products: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const { addProduct } = basketSlice.actions
export default basketSlice.reducer