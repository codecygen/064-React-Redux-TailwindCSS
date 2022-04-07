import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalPrice: 0,
        totalAmount: 0,
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

            // Remove the old loop sums to prevent it to be added on top of the updated loop
            state.totalPrice = 0;
            state.totalAmount = 0;

            current(state.cartItems).forEach(eachItem => {
                state.totalPrice += eachItem.quantity * eachItem.price;
                state.totalAmount += eachItem.quantity;
            });

            console.log(state.totalPrice);
            console.log(state.totalAmount);
            console.log(current(state.cartItems));
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;