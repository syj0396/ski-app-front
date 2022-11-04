import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isLoading: true,
    user: {id: "1", username: "syj0396"},
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
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;