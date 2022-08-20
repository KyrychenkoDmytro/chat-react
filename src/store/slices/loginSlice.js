import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginInfo: {
        img: './icons/unknown.svg',
        name: ''
    },
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addInfo: (state, action) => { 
            state.loginInfo = action.payload;
        },
    },
})

export const { addInfo } = loginSlice.actions;

export default loginSlice.reducer;