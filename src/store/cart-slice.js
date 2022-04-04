import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItem(state, action) {
            const newItemObj = action.payload;
            state.cartItems.push(newItemObj);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;