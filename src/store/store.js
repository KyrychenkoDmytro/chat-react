import { configureStore } from "@reduxjs/toolkit";
import sendReducer from './slices/sendSlice';
import loginReducer from "./slices/loginSlice";

export const store = configureStore({
    reducer: {
        send: sendReducer,
        login: loginReducer
    }
});