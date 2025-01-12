import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import sortSlice from './slices/sortSlice'
import paginationSlice from './slices/paginationSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    paginationSlice
  },
})