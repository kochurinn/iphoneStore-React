import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice
  },
})