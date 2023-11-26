import React, { useEffect } from 'react'
import Questions from './Questions'
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/FetchQuestions';
import {useSelector, useDispatch } from 'react-redux'
function Quiz() {
  const state=useSelector(state=>state);
  const { queue, trace } = useSelector(state => state.question);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(state)
  
  })
    const onPrev =()=>{ 
      
      console.log('previuse');
      if(trace > 0){
        /** decrease the trace value by one using MovePrevQuestion */
        dispatch(MovePrevQuestion());
    }
    
    };
    const onNext=()=>{
      console.log('next');

      if(trace < queue.length){
          /** increase the trace value by one using MoveNextAction */
          dispatch(MoveNextQuestion());
      }
    
    };
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questions />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>

  )
}

export default Quiz
