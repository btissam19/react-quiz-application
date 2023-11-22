import React from 'react'
import Questions from './Questions'

function Quiz() {
    const onPrev =()=>{ console.log('previuse')};
    const onNext=()=>{console.log('next')};
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
