import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/Result_reducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Main.css';
export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [notificationDisplayed, setNotificationDisplayed] = useState(false);
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    } else {
      if (!notificationDisplayed) {
        toast.error('Please provide a username.', {
          position: 'top-right',
          autoClose: 2000, // 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setNotificationDisplayed(true);
      }
    }
  }

  return (
    <div className='container'>
      <h1 className='title text-light'> React Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one option.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id='form'>
        <input ref={inputRef} className='userid' type='text' placeholder='Username*' />
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
