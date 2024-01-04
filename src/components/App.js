import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckUserExist } from '../helper/helper';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Results';
import '../styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<CheckUserExist><Quiz /></CheckUserExist>} />
        <Route path="/result" element={<CheckUserExist><Result /></CheckUserExist>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
