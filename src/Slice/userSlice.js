import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        fetchProductsStart: (state, action) => {
            
            state.isLoading = true;
            state.products = action.payload;
        },
        fetchProductsSuccess: (state, action) => {
            
            state.isLoading = false;
            state.products = action.payload;
        },
        fetchProductsError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


export const { fetchProductsStart, fetchProductsSuccess, fetchProductsError } = productsSlice.actions;

export default productsSlice.reducer;