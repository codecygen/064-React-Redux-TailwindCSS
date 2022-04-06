import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        foundItem: {},
    },
    reducers: {
        addItem(state, action) {
            const newItemObj = action.payload;

            state.foundItem = state.cartItems.find(itemObj => itemObj.id === newItemObj.id);
            const foundIndex = state.cartItems.findIndex(itemObj => itemObj.id === newItemObj.id)

            if (state.foundItem && foundIndex >= 0) {
                state.cartItems[foundIndex].quantity++;
            } else {
                state.cartItems.push(newItemObj);
            }

            
            console.log(current(state.cartItems));
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;