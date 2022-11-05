import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isLoading: true,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload;
            state.isLoading = false;
        },
        logOut: (state) => {
            state.token = null;
            state.isLoading = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;