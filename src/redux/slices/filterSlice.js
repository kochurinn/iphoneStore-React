import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  categoryType: null
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setActiveCategoryType: (state, action) => {
      state.categoryType = action.payload
    },
  },
})

export const { setActiveCategoryId, setActiveCategoryType } = filterSlice.actions

export default filterSlice.reducer