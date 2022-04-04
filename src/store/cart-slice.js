import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem(state) {
            state.cartItems = [{id: 'aras'}];
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;