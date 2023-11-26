import { createSlice } from "@reduxjs/toolkit";
// createSlice :its redux function we use it for create redux witaction and state

export const questionReducer =createSlice({
    name:'question',// we must declare name 
    initialState:{// must
        queue: [],
        answers : [],
        trace : 0
    },
    reducers:{// must
        startExamAction:(state ,action)=>{ 
            return {
            ...state,
            queue : action.payload// must payload
        }},
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        }
    
    }
})

export const { startExamAction , moveNextAction,movePrevAction} = questionReducer.actions;// we ve actions proprties

export default questionReducer.reducer;// we ve reducer proprty
