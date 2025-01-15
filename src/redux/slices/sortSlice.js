import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortBy: 'asc',
    opened: false
}

export const sortSlice = createSlice({
    name: 'sort', 
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        setOpened: (state, action) => {
            state.opened = action.payload
        }
    }
})

export const { setSortBy, setOpened } = sortSlice.actions

export default sortSlice.reducer