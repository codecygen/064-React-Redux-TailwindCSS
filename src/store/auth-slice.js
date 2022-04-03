import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthenticated: false,
        userName: ''
    },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
        getName(state, action) {
            state.userName = action.payload;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;