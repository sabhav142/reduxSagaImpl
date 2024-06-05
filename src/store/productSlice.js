import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isGetAll: false,
    isRequestToGetAll: false,
    isfailedToGet: false,
    allProducts: [],

    productById: {},
    isGetById: false,
    isRequestToGetById: false,
    isFailedToGetById: false,
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        requestToGetAllProducts: (state, action) => {
            console.log(action, "hello")
            return {
                ...state,
                isGetAll: false,
                isRequestToGetAll: true,
                isfailedToGet: false,
            }
        },

        responseToGetAllProducts: (state, action) => {
            return {
                ...state,
                isGetAll: true,
                isRequestToGetAll: true,
                isfailedToGet: false,
                allProducts: action?.payload

            }
        },

        failedToGetAllProducts: (state, action) => {
            return {
                ...state,
                isGetAll: false,
                isRequestToGetAll: true,
                isfailedToGet: true,

            }
        },

        requestToGetProductsById: (state, action) => {
            return {
                ...state,
                isGetById: false,
                isRequestToGetById: true,
                isFailedToGetById: false,
            }
        },

        responseToGetProductById: (state, action) => {
            return {
                ...state,
                isGetById: true,
                isRequestToGetById: true,
                isFailedToGetById: false,
                productById: action?.payload

            }
        },


failedToGetProductById: (state ,action)=>{
    return{
        ...state,
        isGetById: false,
                isRequestToGetById: true,
                isFailedToGetById: false,
    }
}

    }

})

export default productSlice.reducer;
export const {
    requestToGetAllProducts,
    responseToGetAllProducts,
    failedToGetAllProducts,
    requestToGetProductsById,
    responseToGetProductById,
    failedToGetProductById,
} = productSlice.actions