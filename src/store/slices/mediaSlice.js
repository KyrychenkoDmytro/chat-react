import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    small: false,
}

export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        addClass: (state, action) => {
            state.small = action.payload;

        },
    },
})

export const { addClass } = mediaSlice.actions;

export default mediaSlice.reducer;