import { useEffect } from 'react'
import Data from '../database/data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Action from '../redux/Question_reducer';
 export const useFetchQuestions =()=> {
    const dispatch=useDispatch();// work with actions 
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});
    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading : true}));  
         /** async function fetch backend data */
       (async ()=>{   // const fetctdata ()
        try {
            let questions = await Data;
            if(questions.length > 0){
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, apiData : questions}));

                /** dispatch an action */
                dispatch(Action.startExamAction(questions))
            }else {
                throw new Error("No Question Avalibale");
            }


        } catch (error) {
            setGetData(prev => ({...prev, isLoading : false}));
            setGetData(prev => ({...prev, serverError : error}));
        }
        
    })()

    
    
    } ,[dispatch])

  return  [getData, setGetData];
    

}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}