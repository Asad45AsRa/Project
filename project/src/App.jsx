import React from 'react'
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Services from './Components/Services.jsx';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/services' element = {<Services />} />
      <Route path='/blog' element = {<Blogs />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/*' element = {<Navigate to='/' />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    <Outlet ></Outlet>
    </>
  )
}

export default App