import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        sumPrice: {
            total: 0,
            hst: 0,
            subTotal: 0
        },

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
            state.sumPrice = {
                total: 0,
                hst: 0,
                subTotal: 0
            };

            // Remove the old loop sums to prevent it to be added on top of the updated loop
            state.totalAmount = 0;

            current(state.cartItems).forEach(eachItem => {
                state.sumPrice.total += eachItem.quantity * eachItem.price;
                state.totalAmount += eachItem.quantity;
            });

            state.sumPrice.total = parseFloat(state.sumPrice.total).toFixed(2);
            state.sumPrice.hst = parseFloat(state.sumPrice.total * 0.13).toFixed(2);
            state.sumPrice.subTotal = parseFloat(state.sumPrice.total * 1.13).toFixed(2);

            // console.log(state.sumPrice);
            // console.log(state.totalAmount);
            // console.log(current(state.cartItems));
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;