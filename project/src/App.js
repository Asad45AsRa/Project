import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}
