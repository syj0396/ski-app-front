/*
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;*/

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slice/auth';
import boardSlice from './slice/board';
import clubSlice from './slice/club';
import resortSlice from './slice/resort';

const store = configureStore({
    reducer: {
        auth: authReducer,
        resort: resortSlice.reducer,
        board: boardSlice.reducer,
        club: clubSlice.reducer,
    }
});

export default store;