import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem(state, action) {
            state.cartItems = [{id: action.payload}];
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;