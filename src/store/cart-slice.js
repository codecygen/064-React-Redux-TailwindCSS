import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addItem(state, action) {
            const newItemObj = action.payload;

            const foundItem = state.cartItems.find(itemObj => itemObj.id === newItemObj.id);

            if (foundItem) {
                console.log('again!');
                console.log(foundItem);
            } else {
                state.cartItems.push(newItemObj);
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;