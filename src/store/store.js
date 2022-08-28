import { configureStore } from "@reduxjs/toolkit";
import sendReducer from './slices/sendSlice';
import loginReducer from "./slices/loginSlice";
import mediaReducer from "./slices/mediaSlice";

export const store = configureStore({
    reducer: {
        send: sendReducer,
        login: loginReducer,
        media: mediaReducer
    }
});