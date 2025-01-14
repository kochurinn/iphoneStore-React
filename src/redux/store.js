import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import sortSlice from './slices/sortSlice'
import paginationSlice from './slices/paginationSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    paginationSlice,
    searchSlice
  },
})