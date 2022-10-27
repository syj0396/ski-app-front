import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clubs: [],
}
const clubSlice = createSlice({
    name: 'club',
    initialState,
    reducers: {
        getClubs(state, action) {
            state.clubs = action.payload;
        },
        createClub(state) {},
    }
});

export const clubActions = clubSlice.actions;

export default clubSlice;