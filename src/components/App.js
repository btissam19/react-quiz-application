import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Results';
import '../styles/App.css';

function App() {
  const routes = [
    { path: '/', element: <Main /> },
    { path: '/quiz', element: <Quiz /> },
    { path: '/result', element: <Result /> }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
