import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App