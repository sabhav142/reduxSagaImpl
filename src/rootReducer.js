import { combineReducers } from "@reduxjs/toolkit";
import { productsSlice } from "./Slice/userSlice";

const rootReducers =combineReducers({
    allProducts:productsSlice.reducer
})

export default rootReducers;