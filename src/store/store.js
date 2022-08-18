import { configureStore } from "@reduxjs/toolkit";
import sendReducer from './slices/sendSlice';

export const store = configureStore({
    reducer: {
        send: sendReducer
    }
});