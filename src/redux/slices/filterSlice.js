import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCategoryId: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { updateCategoryId } = filterSlice.actions

export default filterSlice.reducer