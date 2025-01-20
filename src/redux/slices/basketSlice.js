import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductOnMain: (state, action) => {
      state.products.push({
        ...action.payload,
        count: 1,
        added: true
      })
    },
    removeProduct: (state, action) => {
      if (!state.products.length) {
        state.products = []
        return
      }
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    },
    removeList: (state) => {
      state.products = []
    },
    plusCount: (state, action) => {
      const findProduct = state.products.find(product => product.id === action.payload.id)
      findProduct.count++
    },
    minusCount: (state, action) => {
      const findProduct = state.products.find(product => product.id === action.payload.id)
      if (findProduct.count > 1) {
        findProduct.count--
        return
      }
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    }
  }
})

export const { addProductOnMain, removeProduct, plusCount, minusCount, removeList } = basketSlice.actions
export default basketSlice.reducer