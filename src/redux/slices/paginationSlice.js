import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activePage: 0
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload
        }
    }
})

export const { setActivePage } = paginationSlice.actions
export default paginationSlice.reducer