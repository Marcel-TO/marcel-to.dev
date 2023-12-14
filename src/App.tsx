import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './components/background/background';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainPage } from './pages/main/main-page';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      [
        (<Route path={'/'} element={<MainPage/>}></Route>),
      ]
    )
  )

  return (
    <>
      <Background/>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
