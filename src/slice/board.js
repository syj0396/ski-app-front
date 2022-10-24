import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
}
const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getBoards(state, action) {
            state.posts = action.payload;
        },
        addBoard(state) {

        }
    }
});

export const boardActions = boardSlice.actions;

export default boardSlice;