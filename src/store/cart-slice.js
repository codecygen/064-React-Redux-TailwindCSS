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
        },

        changeAmount(state, action) {
            const { id, quantity, amountChange } = action.payload;

            if (quantity === 1 && amountChange === -1) {
                const removeAction = { type: 'cart/removeItem', payload: id };
                cartSlice.caseReducers.removeItem(state, removeAction);
                return;
            }

            const newAmountItemIndex = state.cartItems.findIndex(itemObj => itemObj.id === id);

            amountChange === 1 ? 
                state.cartItems[newAmountItemIndex].quantity++ : 
                state.cartItems[newAmountItemIndex].quantity--
            ;

            const priceAmountObj = calculatePriceAmount(state.cartItems);
            state.sumPrice = priceAmountObj.prices;
            state.totalAmount = priceAmountObj.itemAmount;
        },

        loadPageWithCart(state, action) {
            const databaseValues = action.payload;

            state.cartItems = databaseValues.cartItems;
            state.sumPrice = databaseValues.sumPrice;
            state.totalAmount = databaseValues.totalAmount;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;