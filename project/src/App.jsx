import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Services from './Components/Services.jsx';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/services' element = {<Services />}/>
        <Route path='/blog' element = {<Blogs />}/>
        <Route path='/contact' element = {<Contact />}/>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App