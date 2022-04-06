import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addItem(state, action) {
            const newItemObj = action.payload;

            const foundItem = state.cartItems.find(itemObj => itemObj.id === newItemObj.id);
            const foundIndex = state.cartItems.findIndex(itemObj => itemObj.id === newItemObj.id)

            if (foundItem) {
                state.cartItems[foundIndex].quantity++;
            } else {
                state.cartItems.push(newItemObj);
            }

            for (const eachItem of state.cartItems) {
                state.totalPrice += eachItem.quantity * eachItem.price
            }

            console.log(current(state.totalPrice));
            console.log(current(state.cartItems));
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;