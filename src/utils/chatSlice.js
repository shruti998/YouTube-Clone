import { createSlice } from "@reduxjs/toolkit";

const chatSlice= createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            // keep only 10 msg and remove from the top
           state.messages.slice(10,1);
            state.messages.push(action.payload);
        },
    },

});
export const {addMessage}= chatSlice.actions;
export default chatSlice.reducer;