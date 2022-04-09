import { createSlice } from "@reduxjs/toolkit";
import calculatePriceAmount from "./calculate-price-amount";

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

            const priceAmountObj = calculatePriceAmount(state.cartItems);
            state.sumPrice = priceAmountObj.prices;
            state.totalAmount = priceAmountObj.itemAmount;
            
            // current is needed and called from
            // import { createSlice, current } from "@reduxjs/toolkit";
            // It is called immer.
            // console.log(current(state.cartItems));
        },

        removeItem(state, action) {
            const removedItemId = action.payload;

            state.cartItems = state.cartItems.filter(eachItem => eachItem.id !== removedItemId);

            const priceAmountObj = calculatePriceAmount(state.cartItems);
            state.sumPrice = priceAmountObj.prices;
            state.totalAmount = priceAmountObj.itemAmount;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;