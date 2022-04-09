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

            let prices = {
                total: 0,
                hst: 0,
                subTotal: 0
            };

            let itemAmount = 0;

            current(state.cartItems).forEach(eachItem => {
                prices.total += eachItem.quantity * eachItem.price;
                itemAmount += eachItem.quantity;
            });

            prices.total = parseFloat( prices.total).toFixed(2);
            prices.hst = parseFloat( prices.total * 0.13).toFixed(2);
            prices.subTotal = parseFloat( prices.total * 1.13).toFixed(2);

            state.sumPrice = prices;
            state.totalAmount = itemAmount;

            // console.log(state.sumPrice);
            // console.log(state.totalAmount);
            // console.log(current(state.cartItems));
        },

        removeItem(state, action) {
            const removedItemId = action.payload;

            state.cartItems = state.cartItems.filter(eachItem => eachItem.id !== removedItemId);

            const prices = {
                total: 0,
                hst: 0,
                subTotal: 0
            };

            let itemAmount = 0;

            state.cartItems.forEach(eachItem => {
                prices.total += eachItem.quantity * eachItem.price;
                itemAmount += eachItem.quantity;
            });

            prices.total = parseFloat( prices.total).toFixed(2);
            prices.hst = parseFloat( prices.total * 0.13).toFixed(2);
            prices.subTotal = parseFloat( prices.total * 1.13).toFixed(2);

            state.sumPrice = prices;
            state.totalAmount = itemAmount;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;