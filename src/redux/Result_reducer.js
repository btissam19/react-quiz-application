import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

export const  resultReducer=createSlice({
    name:"result",
    initialState:{
        userId : null,
        results:[]
    },
    reducers:{
        setUserId:(state,action) =>{
            state.userId=action.payload
        }
    
    }

})
export const {setUserId}=resultReducer.actions;
export default resultReducer.reducer;
