import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload);
            // Keep only the latest 200 messages
            state.messages = state.messages.slice(0, 200);
        }
    }

})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;