import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {

    },
}

export const sendSlice = createSlice({
    name: 'send',
    initialState,
    reducers: {
        addSend: (state, action) => {
            const payload = action.payload;
            const value = state.value;
            value[payload[0]] ? value[payload[0]].push(payload[1]) : value[payload[0]] = [payload[1]];
        },
    },
})

export const { addSend } = sendSlice.actions;

export default sendSlice.reducer;