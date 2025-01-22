import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'cards/fetchProductsStatus',
    async (params) => {
        const { activeCategoryType, sortBy, activePage } = params
        const { data } = await axios.get(`
            https://6616c60ced6b8fa434815662.mockapi.io/items?${
            `page=${activePage + 1}&limit=4&`
            }${
            activeCategoryType ? `category=${activeCategoryType}&` : ''
            }${
            sortBy ? `sortBy=price&order=${sortBy}` : ''
            }`
        )
        return data
    }
)

const initialState = {
    phones: [],
    status: 'loading'
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setPhones: (state, actions) => {
            state.phones = actions.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.phones = []
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, actions) => {
                state.phones = actions.payload
                state.status = 'success'
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.phones = []
                state.status = 'error'
            })
        }
        
    
})

export const { setPhones } = cardsSlice.actions
export default cardsSlice.reducer